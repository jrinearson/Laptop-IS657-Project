import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

export default function HeaderTabs(props) {

  return (
    <View style={styles.headerContainer}>
      <HeaderButton
        text="Delivery"
        buttonColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        
      />
      <HeaderButton
        text="Pickup"
        buttonColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

function HeaderButton(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress = {() => props.setActiveTab(props.text)}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : 'black',
          fontSize: 15,
          fontWeight: '700',
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
