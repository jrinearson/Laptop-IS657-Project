import React from "react";
import { View, Text, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

function CoinDetailScreen() {
    return (
        <View>
            <Ionicons 
                name='chevron-back-sharp' 
                size={30} 
                color='white' 
            />
        </View>
    );
};

export default CoinDetailScreen;