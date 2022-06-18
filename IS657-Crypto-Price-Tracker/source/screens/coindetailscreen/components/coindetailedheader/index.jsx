import React from "react";
import { View, Text, Image } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import styles from './styles'

function CoinDetailHeader(props) {

    const { image, symbol, marketCapRank } = props;

    return (
        <View style={styles.header}>
            <Ionicons
                name='chevron-back-sharp'
                size={30}
                color='white'
            />
            <View style={styles.tickerContainer}>
                <Image
                    style={styles.coinIcon}
                    source={{ uri: image }}
                />
                <Text style={styles.ticketTitle}>{symbol.toUpperCase()}</Text>
                <View style={styles.rankContainer}>
                    <Text style={styles.rankTitle}>#{marketCapRank}</Text>
                </View>
            </View>
            <EvilIcons
                name='user'
                size={30}
                color='white'
            />
        </View>

    );
};

export default CoinDetailHeader