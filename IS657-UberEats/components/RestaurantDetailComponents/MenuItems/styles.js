import { StyleSheet, Dimenions, Dimensions } from "react-native";

const styles = StyleSheet.create({
    screen: {
        height: Dimensions.get('screen').height
    },   

    menuItemContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        width: '100%',
    },

    foodPicture: {
        resizeMode: 'absolute',
        height: 75,
        width: 75
    },

    titleContainer: {
        paddingVertical: 12.5
    },

    titleText: {
        fontSize: 16,
        fontWeight: '600'
    },

    priceContainer: {
        paddingBottom: 5
    },

    descriptionContainer: {
        paddingBottom: 12.5
    },
});

export default styles;