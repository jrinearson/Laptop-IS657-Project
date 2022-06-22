import { Dimensions, StyleSheet } from "react-native";      

const styles = StyleSheet.create({

    categoryContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingHorizontal: 10
    },

    categoryImage: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
    },
    
    categoryImageContainer: {
        height: 80,
        width: 90,
        resizeMode: 'contain',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    
    categoryText: {
        fontSize: 13,
        fontWeight: '500',
    },

});

export default styles;