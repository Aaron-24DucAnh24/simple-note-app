import React, { useCallback } from "react"
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native"
import styles from "./style"
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Octicon from 'react-native-vector-icons/Octicons'
import Color from "../../assets/color"
import NoteItem from "../../component/noteItem"
import AddButton from "../../component/addButton"
import { useState } from "react"
import API from '../../api/index'
import { useFocusEffect } from "@react-navigation/native"

export default function Main({navigation, route}) {

    const [noteItemList, setNoteItemList] = useState([])
    const [noteNumber, setNoteNumber] =  useState(0)
    const [name, setName] = useState('')
    const [optionDisplay, setOptionDisplay] = useState({display: 'none'})

    function createAlert() {
        Alert.alert(name + ", bạn muốn đăng xuất?", "", 
            [{text: 'OK', onPress: logout},
            {text: 'Không', type:'cancel'}]
        )
    }

    async function logout() {
        await API.logout()
        navigation.navigate('login')
    }

    async function getNote() {
        const ret = await API.getNote()
        setNoteItemList(ret)
        setNoteNumber(ret.length)
    }

    async function deleteNote(id, index) {
        const ret = await API.deleteNote(id)
        if(ret) {
            var newList = []
            for(i in noteItemList) {
                if(i!=index)
                    newList.push(noteItemList[i])
            }
            setNoteItemList(newList)
            setNoteNumber(newList.length)
        }
    }

    useFocusEffect(
        useCallback(() => {
            getNote()
            setName(route.params.name?route.params.name:name)
        }, [])
    )

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.titleContainer}>
                    <AntDesignIcon name='codepen' size={24} color={Color.blue}/>
                    <Text style={styles.titleText}>{' Simple Note'}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutContainer} onPress={createAlert}>
                    <AntDesignIcon name="rightcircle" size={24} color={Color.blue}/>
                </TouchableOpacity>
            </View>

            <View style={styles.numBar}>
                <Text style={styles.numBarText}>{`Tất cả ghi chú (${noteNumber})`}</Text>
            </View>

            <ScrollView style={styles.list}>
                {
                    noteItemList.map((noteItem, index) => {
                        return <NoteItem 
                            key={index}
                            index={index} 
                            self={noteItem}
                            delete={deleteNote}
                            navigation={navigation}
                        />
                    })
                }
            </ScrollView>

            <AddButton
                onPress={()=>setOptionDisplay(optionDisplay.display?{}:{display: 'none'})}
            />

            <TouchableOpacity
                onPress={()=> {
                    navigation.navigate('detail', {self: null})
                    setOptionDisplay({display: 'none'})
                }}
                style={[styles.noteButton, optionDisplay]}
            >
                <Octicon name="note" size={32} color={Color.blue}/>
                <Text style={styles.btnText}>{'Ghi chú'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.taskButton, optionDisplay]}
                onPress={()=> {
                    navigation.navigate('task', {self: null})
                    setOptionDisplay({display: 'none'})
                }}
            >
                <Octicon name="tasklist" size={32} color={Color.blue}/>
                <Text style={styles.btnText}>{'Công việc'}</Text>
            </TouchableOpacity>

        </View>
    )
}
