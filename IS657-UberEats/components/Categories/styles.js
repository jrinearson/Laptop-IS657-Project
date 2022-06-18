import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    categoryImage: {
        height: 30,
        width: 40,
        resizeMode: 'contain',
        backgroundColor: '#eee',
    },
    categoryImageContainer: {
        height: 50,
        width: 60,
        resizeMode: 'contain',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    
    categoryText: {
        fontSize: 13,
        fontWeight: '500',
    },

    categoryContainer: {
        alignItems: 'center',
        marginHorizontal: 12,
        marginVertical: 10,

    },
});

export default styles