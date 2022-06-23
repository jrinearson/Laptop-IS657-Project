import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart({ navigation }) {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  console.log(totalUSD);

  return (
    <>
      {total ? (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <TouchableOpacity style={styles.button}>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>View Cart</Text>
              </View>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>{totalUSD}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
