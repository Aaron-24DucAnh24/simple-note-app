import React, { useCallback, useState } from "react"
import { View, Text, TouchableOpacity, Alert, TextInput } from "react-native"
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import styles from "./style"
import Color from "../../assets/color"
import API from '../../api/index'
import { useFocusEffect } from "@react-navigation/native"

export default function Detail({navigation, route}) {

    function createExitAlert() {
        Alert.alert("Bạn có muốn lưu thay đổi?", "",
            [
                {text: 'OK', onPress: route.params.self?editNote:addNote},
                {text: 'Không', onPress: ()=>navigation.navigate('main')}
            ]
        )
    }

    function isChanged() {
        return preContent!=content || preTitle!=title
    }

    function handleExit() {
        if(!isChanged() || isSaved) {
            navigation.navigate('main')
        } else {
            createExitAlert()
        }
    }

    async function addNote() {
        if(!isChanged() || isSaved) 
            return

        const ret = await API.addNote(title?title:'Không có tiêu đề', content)

        if(!ret)
            Alert.alert("Tạo mới không thành công", "",[{text: 'OK', type:'cancel'}])
        else setIsSaved(true)
    }

    async function editNote() {
        if(!isChanged() || isSaved) 
            return

        const ret = await API.editNote(self.id ,title?title:'Không có tiêu đề', content)

        if(!ret)
            Alert.alert("Thay đổi không thành công", "",[{text: 'OK', type:'cancel'}])
        else setIsSaved(true)
    }

    var self = route.params.self
    const [isSaved, setIsSaved] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [preContent, setPreContent] = useState('')
    const [preTitle, setPreTitle] = useState('')

    useFocusEffect(
        useCallback(() => {
            setContent(self?self.content:'')
            setTitle(self?self.title:'')
            setPreContent(self?self.content:'')
            setPreTitle(self?self.title:'')
            setIsSaved(false)
        }, [])
    )

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
                    onPress={route.params.self?editNote:addNote}
                >
                    <AntDesignIcon name="save" size={24} color={Color.blue}/>
                    <Text style={styles.saveText}>{' Lưu'}</Text>
                </TouchableOpacity>

            </View>

            <TextInput
                style={styles.title}
                editable
                maxLength={36}
                cursorColor={Color.lightBlue}
                selectionColor={Color.lightBlue}
                placeholder="Nhập tiêu đề..."
                placeholderTextColor={Color.lightWhite}
                value={title}
                onChangeText={setTitle}
            />

            <TextInput
                style={styles.content}
                editable
                multiline
                maxLength={500}
                cursorColor={Color.lightBlue}
                selectionColor={Color.lightBlue}
                placeholder="Nhập nội dung..."
                placeholderTextColor={Color.lightWhite}
                value={content}
                onChangeText={setContent}
            />

        </View>
    )
}