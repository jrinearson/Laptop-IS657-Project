import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";


export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const description = `${categories} ${price ? "• " + price : ""} • ${rating}🌟 • ${reviews} Reviews`;

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
