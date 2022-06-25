import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./screens/HomeScreen/HomeScreen.jsx";
import RestaurantDetail from "./screens/RestaurantDetail/RestaurantDetail.jsx";
import Account from "./screens/Account/Account.jsx";
import Orders from "./screens/Orders/Orders.jsx";
import { Provider as ReduxProvider } from "react-redux";

import configureStore from "./Redux/Store.js";
import OrderComplete from "./screens/OrderComplete/OrderComplete.jsx";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="Account" component={Account} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="OrderComplete" component={OrderComplete} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}

// some comments