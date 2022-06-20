import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 40,
        zIndex: 999,
    },
    subContainer: {
        flexDirection: 'row',
        justifycontent: 'center',
        marginHorizontal: 15
        
    },
    
    button: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        marginTop: 20,
        alignItems: 'center',
        padding: 15,
        borderRadius: 30,
        width: '100%',
        position: 'relative',
        
    },
    buttonText: {
        color: 'white',
        fontWeight: '600'
    },

});

export default styles;