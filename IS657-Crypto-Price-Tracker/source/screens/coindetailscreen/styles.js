import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    header : {
        padding: 15,
    },

    name: {
        color: 'white',
        fontSize: 15,
    },

    priceContainer: {
        color: 'white',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },

    price: {
        color: 'white',
        fontSize: 30,
        fontWeight: '600',
        letterSpacing: 1,
    },

    priceChange: {
        color: 'white',
        fontSize: 17,
        fontWeight: 400,
    },

    priceChangeContainer: {
        backgroundColor: '#ea3943',
        padding: 5,
        paddingVertical: 8,
        borderRadius: 5,
        flexDirection: 'row',
    },

    caretDown: {
        alignSelf: 'center',
        marginRight: 5,
        justifyContent: 'center'
    },

});

export default styles;
