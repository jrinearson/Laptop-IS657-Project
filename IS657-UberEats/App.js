import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <View>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

