import React, { useCallback } from "react"
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native"
import styles from "./style"
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Color from "../../assets/color"
import NoteItem from "../../component/noteItem"
import { useState } from "react"
import API from '../../api/index'
import { useFocusEffect } from "@react-navigation/native"

export default function Main({navigation, route}) {

    const [noteItemList, setNoteItemList] = useState([])
    const [noteNumber, setNoteNumber] =  useState(0)
    const [name, setName] = useState('')

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

            <TouchableOpacity 
                style={styles.addButtonContainer}
                onPress={()=> navigation.navigate('detail', {self: null})}
            >
                <Ionicon name="add-circle" size={60} color={Color.blue}/>
            </TouchableOpacity>

        </View>
    )
}
