import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const restaurants = [
  {
    name: "DONATO'S PUB & GRILL",
    image: require("../../assets/restaurant-images/donato-pub-grill.jpg"),
    rating: "4.8",
    deliveryTime: "45 - 60",
    deliveryFee: "$4.99",
    categories: ["Bar", "New American"],
    rating: "",
  },
  {
    name: "BROADWAY BURGER",
    image: require("../../assets/restaurant-images/broadway-burger.jpg"),
    rating: "4.5",
    deliveryTime: "15 - 20",
    deliveryFee: "$1.99",
    categories: ["Burgers", "Fast Food"],
  },
  {
    name: "CAROUSEL",
    image: require("../../assets/restaurant-images/carousel.jpeg"),
    rating: "4.9",
    deliveryTime: "30 - 45",
    deliveryFee: "$2.99",
    categories: ["Armenian", "Persian"],
  },
  {
    name: "LUCY'S PIZZA",
    image: require("../../assets/restaurant-images/lucy-pizza.jpg"),
    rating: "4.2",
    deliveryTime: "30 - 45",
    deliveryFee: "$0.99",
    categories: ["Pizza", "Italian"],
  },
  {
    name: "SANTORINI'S GRILL",
    image: require("../../assets/restaurant-images/santorini-bar-grill.jpeg"),
    rating: "4.8",
    deliveryTime: "60 - 75",
    deliveryFee: "$4.99",
    categories: ["Greek", "Mediterranean"],
  },
  {
    name: "TOKYO LOBBY",
    image: require("../../assets/restaurant-images/tokyo-lobby.jpg"),
    rating: "4.6",
    deliveryTime: "20 - 35",
    deliveryFee: "Free",
    categories: ["Japanese", "Asian"],
  },
];

function RestaurantItems() {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.touchableOpacityContainer}
    >
      {restaurants.map((restaurant, index) => (
        <View key={index} style={styles.restaurantItemContainer}>
          <RestaurantImage image={restaurant.image} />
          <RestaurantInfo
            name={restaurant.name}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
            deliveryFee={restaurant.deliveryFee}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image style={styles.image} source={props.image} />
    <TouchableOpacity style={styles.favButton}>
      <MaterialCommunityIcons name="heart-outline" size={30} color={"white"} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View>
    <View style={styles.restaurantTitle}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.rating}>{props.rating}</Text>
    </View>
    <View style={styles.restaurantSubtitle}>
      <Text>{props.deliveryFee} Delivery Fee</Text>
      <Text>{props.deliveryTime} min</Text>
    </View>
  </View>
);

export default RestaurantItems;
