import React from "react"
import { StyleSheet, Text, TouchableOpacity, Alert } from "react-native"
import Color from "../../assets/color"
import API from '../../api/index'
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
        props.navigation.navigate('detail', {self: props.self})
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
