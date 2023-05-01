import React, { useCallback, useState } from "react"
import { View, Text, TouchableOpacity, Alert, TextInput, ScrollView } from "react-native"
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import styles from "./style"
import Color from "../../assets/color"
import API from '../../api/index'
import TaskItem from "../../component/taskItem"
import AddButton from "../../component/addButton"

export default function Task({navigation, route}) {

    const gotInit = route.params.self != null
    const [isSaved, setIsSaved] = useState(false)
    const [self, setSelf] = useState(gotInit?JSON.parse(JSON.stringify(route.params.self)):{content: [], title: '', type: 'task'})
    const preSelf = gotInit?route.params.self:{content: [], title: '', type: 'task'}

    function isChanged() {
        return JSON.stringify(preSelf)!=JSON.stringify(self)
    }

    function createExitAlert() {
        Alert.alert("Bạn có muốn lưu thay đổi?", "",
            [
                {text: 'OK', onPress: gotInit?editNote:addNote},
                {text: 'Không', onPress: ()=>navigation.navigate('main')}
            ]
        )
    }

    function handleExit() {

        if(!isChanged() || isSaved)
            navigation.navigate('main')
        else
            createExitAlert()
    }

    async function addNote() {
        if(!isChanged() || isSaved) 
            return

        const ret = await API.addNote(self.title?self.title:'Không có tiêu đề', self.content, 'task')

        if(!ret)
            Alert.alert("Tạo mới không thành công", "",[{text: 'OK', type:'cancel'}])
        else setIsSaved(true)
    }

    async function editNote() {
        if(!isChanged() || isSaved) 
            return

        const ret = await API.editNote(self.id ,self.title?self.title:'Không có tiêu đề', self.content, 'task')

        if(!ret)
            Alert.alert("Thay đổi không thành công", "",[{text: 'OK', type:'cancel'}])
        else setIsSaved(true)
    }

    function addTask() {
        var newSelf = Object.assign({}, self)
        newSelf.content.push({content: '', isChecked: false})
        setSelf(newSelf)
    }

    function setTitle(text) {
        newSelf = Object.assign({}, self)
        newSelf.title = text
        setSelf(newSelf)
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.titleContainer}
                    onPress={handleExit}
                >
                    <AntDesignIcon name='codepen' size={24} color={Color.blue}/>
                    <Text style={styles.titleText}>{' Simple Note'}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.saveContainer}
                    onPress={gotInit?editNote:addNote}
                >
                    <AntDesignIcon name="save" size={24} color={Color.blue}/>
                    <Text style={styles.saveText}>{' Lưu'}</Text>
                </TouchableOpacity>

            </View>

            <TextInput
                style={styles.title}
                editable
                maxLength={40}
                cursorColor={Color.lightBlue}
                selectionColor={Color.lightBlue}
                placeholder="Nhập tiêu đề..."
                placeholderTextColor={Color.lightWhite}
                value={self.title}
                onChangeText={setTitle}
            />

            <ScrollView
                style={styles.content}
            >
                {
                    self.content.map((o, index)=> {
                        return <TaskItem
                            key={index}
                            index={index}
                            self={self}
                            setSelf={setSelf}
                        />
                    })
                }
            </ScrollView>

            <AddButton
                onPress={addTask}
            />

        </View>
    )
}