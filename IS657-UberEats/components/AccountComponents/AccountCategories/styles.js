import { Dimensions, StyleSheet } from "react-native";      

const styles = StyleSheet.create({

    categoryContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 30,
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
        marginVertical: 10,
    },

});

export default styles;