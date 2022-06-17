import React from "react";
import { FlatList } from "react-native";
import CoinItem from "../../components/coinitem/index.jsx";
import coins from '../../../assets/data/cryptocurrencies.json';

function HomeScreen() {
    return (
        <FlatList
            data={coins}
            renderItem={({ item }) => <CoinItem marketCoin={item} />}
        />
    );
};

export default HomeScreen;

