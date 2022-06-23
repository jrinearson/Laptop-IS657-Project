import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import styles from "./styles";
import About from "../../components/RestaurantDetailComponents/About/About.jsx";
import MenuItems from "../../components/RestaurantDetailComponents/MenuItems/MenuItems.jsx";
import ViewCart from "../../components/RestaurantDetailComponents/ViewCart/ViewCart.jsx";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={styles.screen}>
      <About route={route} />
      <Divider width={2} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name}/>
      <ViewCart navigation={navigation} />
    </View>
  );
};
