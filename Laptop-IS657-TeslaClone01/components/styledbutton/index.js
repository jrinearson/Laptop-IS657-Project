import React from 'react';  
import { View, Pressable, Text } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

    const type = props.type;
    console.warn(type);
    
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => console.warn('💯')}>
                <Text style={styles.text}>
                    Custom Order
                </Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;