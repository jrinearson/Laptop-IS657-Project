import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import styles from "./styles";
import About from "../../components/RestaurantDetailComponents/About/About.jsx";
import MenuItems from "../../components/RestaurantDetailComponents/MenuItems/MenuItems.jsx";

function RestaurantDetail() {
  return (
    <View style={styles.screen}>
      <About />
      <Divider width={2} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}

export default RestaurantDetail;
