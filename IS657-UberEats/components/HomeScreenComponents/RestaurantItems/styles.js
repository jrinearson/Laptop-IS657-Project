import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    touchableOpacityContainer: {

    },

    restaurantItemContainer: {
        marginTop: 10,
        paddingHorizontal: 15,
        marginBottom: 30

    }, 

    image: {
        width: '100%',
        height: 180,
    },

    favButton: {
        position: 'absolute',
        right: 20,
        top: 10,
    },

    restaurantTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 2,
    },
    restaurantSubtitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0
    },

    name: {
        fontSize: 17,
        fontWeight: '500',
        letterSpacing: 0.5,
        flex: 1
    },

    deliveryTime: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    rating: {
        fontSize: 15,
        fontWeight: '500',
    },

});

export default styles