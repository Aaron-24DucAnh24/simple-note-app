import { StyleSheet } from "react-native"
import Color from '../../assets/color'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: Color.superDark,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 32,
    },

    labelContainer: {
    },

    labelText: {
        color: Color.white,
        fontWeight: 700,
        fontSize: 32,
    },

    inputsContainer: {
        width: '100%',
        marginTop: 40,
        marginBottom: 28,
    },

    forgotContainer: {
        alignSelf: "flex-end",
        height: 24,
        paddingTop: 8,
        marginBottom: 32,
    },

    forgotText: {
        color: Color.white,
        fontSize: 12,
    },

    signupContainer: {
        marginTop: 24,
        height: 40,
        width: '80%',
        justifyContent: "center",
        alignItems: "center",
    },

    signupText: {
        color: Color.white,
        fontSize: 12,
        fontWeight: 500,
        fontStyle: "italic",
    }

})

export default styles