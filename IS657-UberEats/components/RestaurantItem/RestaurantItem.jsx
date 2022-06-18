import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function RestaurantItem() {
  return (
    <View style={styles.imageContainer}>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      style={styles.image}
      source={{
        uri: "https://d1ralsognjng37.cloudfront.net/e4fd5d47-5348-40b2-bbd9-59adfae66974.jpeg",
      }}
    />
    <TouchableOpacity style={styles.favButton}>
      <MaterialCommunityIcons name="heart-outline" size={30} color={"white"} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View>
    <View style={styles.restaurantTitle}>
      <Text style={styles.name}>JOEY DTLA</Text>
      <Text style={styles.rating}>4.7</Text>
    </View>
    <View style={styles.restaurantSubtitle}>
      <Text>$3.99 Delivery Fee</Text>
      <Text>25-40 min</Text>
      
    </View>
  </View>
);

export default RestaurantItem;
