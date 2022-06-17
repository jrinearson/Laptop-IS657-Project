import React from "react";
import { Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

function CoinItem({ marketCoin }) {
    const {
        name,
        current_price,
        market_cap_rank,
        price_change_percentage_24h,
        symbol,
        market_cap,
        image,
    } = marketCoin;

    function NormalizeMarketCap(marketCap) {
        if (marketCap > 1000000000000) {
            return `${Math.floor(marketCap / 1000000000000)} T`
        } if (marketCap > 1000000000) {
            return `${Math.floor(marketCap / 1000000000)} B`
        } if (marketCap > 1000000) {
            return `${Math.floor(marketCap / 1000000)} M`
        }
    };

    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'
    const caretSign = price_change_percentage_24h < 0 ? 'caretdown': 'caretup'

    return (
        <View style={styles.coinContainer}>
            <Image
                source={{ uri: image }}
                style={styles.icon}
            />
            <View>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.subtitleDirection}>
                    <Text style={styles.rank}>{market_cap_rank}</Text>
                    <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                    <AntDesign
                        name={caretSign}
                        size={12}
                        color={percentageColor}
                        style={styles.caretDown}
                    />
                    <Text style={{color: percentageColor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
                </View>
            </View>
            <View style={styles.coinContainerRow}>
                <Text style={styles.title}>{current_price}</Text>
                <Text style={{ color: 'white' }}>MCap {NormalizeMarketCap(market_cap)}</Text>
            </View>
        </View>
    );
}

export default CoinItem;