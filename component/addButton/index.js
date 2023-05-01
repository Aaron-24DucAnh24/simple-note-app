import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Color from '../../assets/color'
import { TouchableOpacity, StyleSheet } from 'react-native'

export default function AddButton(props) {
    return (
        <TouchableOpacity 
            style={styles.addButtonContainer}
            onPress={props.onPress}
        >
            <Ionicon name="add-circle" size={60} color={Color.blue}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    addButtonContainer: {
        position: "absolute",
        right: 32,
        bottom: 32,
        zIndex: 5,
    },
})
