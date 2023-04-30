import { StyleSheet } from "react-native"
import Color from "../../assets/color"

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.dark,
        height: 56,
        marginHorizontal: 20,
        marginBottom: 16,
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 16
    },

    text: {
        color: Color.white,
        fontSize: 18,
        fontWeight: 700
    }
})

export default styles
