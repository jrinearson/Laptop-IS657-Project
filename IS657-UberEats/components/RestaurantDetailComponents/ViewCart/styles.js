import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
        zIndex: 999,
    },
    subContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        
    },
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        marginTop: 20,
        alignItems: 'center',
        padding: 15,
        borderRadius: 30,
        width: '100%',
        position: 'relative',
        justifyContent: 'flex-end',
        flexDirection: 'row'
        
    },

    buttonTextContainer: {
        flex: 1, 
        alignItems: "center",
    },

    buttonText: {
        color: 'white',
        fontWeight: '600'
    },

});

export default styles;