import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import styles from "./screens/HomeScreen/styles";

export default function App() {
  return (
    <View style={styles.header}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

