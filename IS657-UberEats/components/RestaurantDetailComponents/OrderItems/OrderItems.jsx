import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function OrderItems({ item }) {
  const { title, price } = item;

  return (
    <View style={styles.itemsContainer}>
      <Text>{title}</Text>
      <Text>{price}</Text>
    </View>
  );
}
