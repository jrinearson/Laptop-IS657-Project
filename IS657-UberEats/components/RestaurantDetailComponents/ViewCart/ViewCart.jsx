import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { TouchableOpacity } from "react-native";

export default function ViewCart() {
  return (
    
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
