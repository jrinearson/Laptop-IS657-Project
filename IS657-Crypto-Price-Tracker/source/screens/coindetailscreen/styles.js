import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    coinIcon: {
        width: 25,
        height: 25,
    },

    text: {
        color: 'white',
    },

    header: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    tickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    ticketTitle: {
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 10,
        fontSize: 17,
    },

    rankTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },

    rankContainer: {
        backgroundColor: '#585858',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,

    },

});

export default styles;
