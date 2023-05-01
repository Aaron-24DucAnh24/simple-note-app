import { StyleSheet } from "react-native"
import Color from "../../assets/color"

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:'100%',
        backgroundColor: Color.superDark,
        position: "relative",
    },

    header: {
        backgroundColor: Color.lightDark,
        width: '100%',
        height: 90,
        paddingHorizontal: 20,
        paddingBottom: 16,
        alignItems: 'flex-end',
        justifyContent: "space-between",
        flexDirection: "row",
    },

    titleContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    titleText: {
        color: Color.white,
        fontSize: 20,
        fontWeight: 700
    },

    saveContainer: {
        width: 80,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: 'absolute',
        right: 20,
        bottom: 6,
    },

    saveText: {
        color: Color.white,
        fontSize: 18,
        fontWeight: 700
    },

    title: {
        fontSize: 16,
        color: Color.white,
        fontWeight: "600",
        marginHorizontal: 20,
        marginTop: 20,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: Color.dark
    },

    content: {
        width: '100%',
        marginTop: 20,
        marginBottom: 40,
    },

})

export default styles
