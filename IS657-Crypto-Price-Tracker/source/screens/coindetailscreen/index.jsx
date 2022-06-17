import React from "react";
import { View } from 'react-native';
import CoinDetailHeader from './components/coindetailheader';
import Coin from '../../../assets/data/crypto.json';


function CoinDetailScreen() {

    const {
        image: { small },
        symbol,
        name,
        market_data: { market_cap_rank }
    } = Coin;

    return (
        <View>
            <CoinDetailHeader
                image={small}
                name={name}
                symbol={symbol}
                marketCapRank={market_cap_rank} />
        </View>
    );
};

export default CoinDetailScreen;