import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import RestaurantDetail from "./screens/RestaurantDetail/RestaurantDetail"

export default function App() {
  return (
    <View>
      <RestaurantDetail />
      <StatusBar style="auto" />
    </View>
  );
}

