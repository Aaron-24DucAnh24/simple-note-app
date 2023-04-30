import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import Color from "../../assets/color"


export default function AuthenButton(props) {
    return (
        <TouchableOpacity 
            style={styles.button}
            onPress={props.onClick}
        >
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Color.blue,
        height: 40, 
        width: '90%',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },

    text: {
        color: Color.lightDark,
        fontSize: 18,
        fontWeight: 600,
    }
})