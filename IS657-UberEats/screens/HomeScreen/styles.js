import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create ({
    safeArea: {
       backgroundColor: 'white',
       height: Dimensions.get('window').height
    },

    header: {
        backgroundColor: 'white',
        padding: 15,
        
    },
});

export default styles;
