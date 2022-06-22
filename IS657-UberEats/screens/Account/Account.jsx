import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import styles from "./styles";
import AccountHeader from "../../components/AccountComponents/AccountHeader/AccountHeader.jsx";
import AccountCategories from "../../components/AccountComponents/AccountCategories/AccountCategories.jsx";

const items = [
  {
    image: require("../../assets/images/wallet.png"),
    text: "Wallet",
  },
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Orders",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Favorites",
  },
];

export default function Account() {
  return (
    <SafeAreaView style={styles.page}>
      <AccountHeader />
      <AccountCategories />
    </SafeAreaView>
  );
}
