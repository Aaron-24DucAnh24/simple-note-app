import { View, TextInput, TouchableOpacity} from "react-native"
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import CheckBox from "expo-checkbox"
import React, { useState } from "react"
import styles from "./style"
import Color from "../../assets/color"

export default function TaskItem(props) {

    function setIsChecked() {
        var self = Object.assign({}, props.self)
        self.content[props.index].isChecked = !self.content[props.index].isChecked
        props.setSelf(self)
    }
    
    function setText(text) {
        var self = Object.assign({}, props.self)
        self.content[props.index].content = text
        props.setSelf(self)
    }

    function removeTask() {
        var newSelf = Object.assign({}, props.self)
        newSelf.content.splice(props.index, 1)
        props.setSelf(newSelf)
    }

    return (
        <View style={styles.container}>
            <CheckBox
                style={styles.checkBox}
                value={props.self.content[props.index].isChecked}
                onValueChange={setIsChecked}
                color={Color.blue}
            />

            <TextInput
                style={styles.text}
                selectionColor={Color.lightBlue}
                placeholder="Nhập công việc..."
                placeholderTextColor={Color.lightWhite}
                value={props.self.content[props.index].content}
                onChangeText={setText}
                maxLength={36}
            />

            <TouchableOpacity onPress={removeTask}>
                <AntDesignIcon name="minuscircle" size={24} color={Color.blue}/>
            </TouchableOpacity>
        </View>
    )
}
