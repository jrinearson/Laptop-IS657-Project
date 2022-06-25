import { Dimensions, StyleSheet } from "react-native";      

const styles = StyleSheet.create({

    page: {
        backgroundColor: 'white'
    },
    
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignContent: 'center'
    },

    headerImage: {
        justifyContent: 'center'
    },

    headerText :{
        fontSize: 35,
        fontWeight: '600'
    },

    profilePicture: {
        height: 60,
        width: 60,
        borderRadius: 100,
        marginRight: 10,
    },



});

export default styles;