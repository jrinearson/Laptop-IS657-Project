import React from "react";
import { FlatList } from "react-native";
import CoinItem from "../../components/coinitem/index.jsx";
import CurrencyDetails from '../../../assets/data/cryptocurrencies.json';

function HomeScreen() {
    return (
        <FlatList
            data={CurrencyDetails}
            renderItem={({ item }) => <CoinItem marketCoin={item} />}
        />
    );
};

export default HomeScreen;

