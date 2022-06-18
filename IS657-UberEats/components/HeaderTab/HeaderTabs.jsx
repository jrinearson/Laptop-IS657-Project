import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function HeaderTabs() {
  return (
    <View style={styles.headerContainer}>
      <HeaderButton text="Delivery" buttonColor="black" textColor="white" />
      <HeaderButton text="Pickup" buttonColor="white" textColor="black" />
    </View>
  );
}

function HeaderButton(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.buttonColor,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
    >
      <Text
        style={{
          color: props.textColor,
          fontSize: 15,
          fontWeight: 'bold',
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
