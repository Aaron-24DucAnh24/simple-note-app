import React from "react"
import { Text, TouchableOpacity, Alert } from "react-native"

import styles from "./style"

export default function NoteItem(props) {

    function createAlert() {
        Alert.alert("Bạn muốn xoá ghi chú này?", "",
            [
                {text: 'OK', onPress:()=>props.delete(props.self.id, props.index)},
                {text: 'Thoát', type: 'cancel'},
            ]
        )
    }

    function openNote() {
        props.navigation.navigate(props.self.type=='note'?'detail':'task', {self: props.self})
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onLongPress={createAlert}
            onPress={openNote}
        >
            <Text style={styles.text}>{props.self.title}</Text>
        </TouchableOpacity>
    )
}
