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
  <View style={styles.restaurantInfoContainer}>
    <View style={styles.restaurantNameText}>
      <Text>JOEY DTLA</Text>
    </View>
    <View style={styles.restaurantTimeText}>
      <Text>30-45 min</Text>
    </View>
    <View style={styles.restaurantRatingText}>
      <Text>4.7</Text>
    </View>
  </View>
);

export default RestaurantItem;
