import { StyleSheet } from "react-native"
import Color from "../../assets/color"

const styles = StyleSheet.create({

    container: {
        height: 48,
        maxWidth: '100%',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
    },

    text: {
        backgroundColor: Color.dark,
        marginHorizontal: 8,
        paddingHorizontal: 8,
        height: '100%',
        flex: 1,
        borderRadius: 8,
        fontSize: 16,
        fontWeight: "600",
        color: Color.white,
    },

    checkBox: {
        height: 24,
        width: 24,
    }

})

export default styles
