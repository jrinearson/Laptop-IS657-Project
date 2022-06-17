import React from "react";
import { View, Text, Image } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import Coin from '../../../assets/data/crypto.json';
import styles from "./styles";

function CoinDetailScreen() {
    const {
        image: { small },
        symbol,
        name,
        market_data: { market_cap_rank }
    } = Coin;

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
                    source={{ uri: small }}
                />
                <Text style={styles.ticketTitle}>{symbol.toUpperCase()}</Text>
                <View style={styles.rankContainer}>
                    <Text style={styles.rankTitle}>#{market_cap_rank}</Text>
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

export default CoinDetailScreen;