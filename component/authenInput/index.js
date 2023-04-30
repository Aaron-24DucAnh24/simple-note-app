import React from "react"
import { TextInput } from "react-native"
import styles from "./style"
import Color from "../../assets/color"

export default function AuthenInput(props) {
    return (
        <TextInput style={styles.input}
            placeholder={props.name}
            secureTextEntry={props.secure}
            placeholderTextColor={Color.lightWhite}
            selectionColor={Color.blue}
            onChangeText={props.setValue}
            value={props.value}
        />
    )
}