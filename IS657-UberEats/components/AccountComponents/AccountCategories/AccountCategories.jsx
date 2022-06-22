import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";

const items = [
  {
    image: require("../../../assets/images/wallet.png"),
    text: "Wallet",
  },
  {
    image: require("../../../assets/images/shopping-bag.png"),
    text: "Orders",
  },
  {
    image: require("../../../assets/images/deals.png"),
    text: "Favorites",
  },
];

export default function AccountCategories() {
  return (
      <View style={styles.categoryContainer}>
        {items.map((item, index) => (
          <View key={index} >
            <TouchableOpacity>
              <View style={styles.categoryImageContainer}>
                <Image style={styles.categoryImage} source={item.image} />
              </View>
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
            <Text style={styles.categoryText}>{item.text}</Text>
            </View>
          </View>
        ))}
      </View>
  );
}
