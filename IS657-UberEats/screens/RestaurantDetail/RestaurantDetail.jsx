import { View, Text, StatusBar} from "react-native";
import React from "react";
import About from "../../components/RestaurantDetailComponents/About/About";
import { Divider } from "react-native-elements";
import styles from "./styles"


function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={2} style={{marginVertical: 20}}/>
      
    </View>
  );
}

export default RestaurantDetail;
