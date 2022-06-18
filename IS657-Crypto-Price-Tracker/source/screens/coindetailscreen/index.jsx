import React from "react";
import { View, Text } from 'react-native';
import CoinDetailHeader from './components/coindetailedheader';
import Coin from '../../../assets/data/crypto.json';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';



function CoinDetailScreen() {

    const {
        image: { small },
        symbol,
        name,
        market_data: { 
            market_cap_rank, 
            current_price,
            price_change_percentage_24h
         }
    } = Coin;

    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'
    const caretSign = price_change_percentage_24h < 0 ? 'caretdown': 'caretup'

    return (
        <View style={styles.header}>
            <CoinDetailHeader
                image={small}
                symbol={symbol}
                marketCapRank={market_cap_rank} />
        
            <View style={styles.priceContainer}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>${current_price.usd}</Text>
                </View>
                <View style={styles.priceChangeContainer}>
                <AntDesign
                        name={caretSign}
                        size={12}
                        color={'white'}
                        style={styles.caretDown}
                    />
                    <Text style={styles.priceChange}>{price_change_percentage_24h.toFixed(2)}</Text>
                </View>
            </View>
        </View>
    );
};

export default CoinDetailScreen;