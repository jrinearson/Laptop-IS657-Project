import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { StatusBar } from "react-native";

const yelpRestaurantInfo = {
  name: "Morrison Atwater Village",
  image:
    "https://d1ralsognjng37.cloudfront.net/e5e57bed-2612-466a-977a-d10f653aa04b.jpeg",
  price: "$$",
  reviews: "5335",
  rating: 4.5,
  categories: [{ title: "Gastropub" }, { title: "American" }],
};

const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;

const formattedCategories = categories.map((cat) => cat.title).join(" • ");

const description = `${formattedCategories}${
  price ? " • " + price : ""
} • ${rating} 🌟 ${reviews}+`;

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <View style={styles.titleContainer}>
        <RestaurantName name={name} />
      </View>
      <View style={styles.descriptionContainer}>
        <RestaurantDescription description={description} />
      </View>
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={styles.restaurantImage} />
);

const RestaurantName = (props) => (
  <Text style={styles.title}>{props.name}</Text>
);

const RestaurantDescription = (props) => (
  <Text style={styles.description}>{props.description}</Text>
);
