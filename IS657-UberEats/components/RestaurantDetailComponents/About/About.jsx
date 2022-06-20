import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { StatusBar } from "react-native";

const image =
  "https://d1ralsognjng37.cloudfront.net/e5e57bed-2612-466a-977a-d10f653aa04b.jpeg";
const title = "Morrison Atwater Village";
const info = "Gastropub • Craft Burgers 🍔 • $$ • 4.5🌟 (5335+)";

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={styles.restaurantImage} />
);

const RestaurantTitle = (props) => (
  <Text style={styles.title}>{props.title}</Text>
);

const RestaurantDescription = (props) => (
  <Text style={styles.description}>{props.title}</Text>
);

function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <View style={styles.titleContainer}>
        <RestaurantTitle title={title} />
      </View>
      <View style={styles.descriptionContainer}>
        <RestaurantDescription title={info} />
      </View>
    </View>
  );
}

export default About;
