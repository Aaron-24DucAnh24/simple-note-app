import { StyleSheet } from "react-native"
import Color from "../../assets/color"

const styles = StyleSheet.create({
    input: {
        display: "flex",
        alignItems: "center",
        color: Color.white,
        width: '100%',
        height: 60,
        paddingHorizontal: 16,
        borderColor: Color.lightWhite,
        borderWidth: 2,
        borderRadius: 12,
        marginVertical: 8,
        fontSize: 16,
    }
})

export default styles
