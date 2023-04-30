import { StyleSheet } from "react-native"
import Color from '../../assets/color'


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
        position: "relative"
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

    logoutContainer: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 12,
        bottom: 6,
    },

    numBar: {
        paddingHorizontal: 20,
        paddingTop: 8,
        paddingBottom: 20,
    },

    numBarText: {
        color: Color.lightWhite,
        fontStyle: "italic", 
        fontSize: 14,
    },

    addButtonContainer: {
        position: "absolute",
        right: 32,
        bottom: 32,
        zIndex: 5,
    }

})

export default styles
