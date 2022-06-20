import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import RestaurantDetail from "./screens/RestaurantDetail/RestaurantDetail.jsx"

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={screenOptions}> */}
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ResaturantDetail" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
