import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "Bacon Bourbonator Burger",
    description:
      "Angus beef patty, thick cut bacon, blue cheese crumbles, bacon & onion jam, side of fries",
    price: "$20.00",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/HjJvsO_7dTbKfpequbx05g/o.jpg",
  },
  {
    title: 'Red Hot "Morrison" Wings',
    description:
      "7 breaded tasty wings tossed in our very own Morrison hot sauce served w/fries & ranch",
    price: "$16.00",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/YH5RNa8atwllfP6yym5BnA/o.jpg",
  },
  {
    title: "Rib Eye Steak",
    description:
      "Half pound rib eye steak (enjoyed best medium rare or medium), side of mashed potatoes",
    price: "$27.00",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/8fJF2G52Y9XhUsNvi5SsvQ/o.jpg",
  },
  {
    title: "Onion Rings",
    description:
      "Homemade beer batter, hand-cut onion rings, house crafted bbq sauce ",
    price: "$10.00",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/2XlMm1ZoA7yx8GmYCL9iPw/o.jpg",
  },
];

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <FoodInfo food={food} />
          <Divider width={0.5} />
        </View>
        
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <TouchableOpacity>
    <View style={styles.menuItemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.food.title}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text>{props.food.price}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text>{props.food.description}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
