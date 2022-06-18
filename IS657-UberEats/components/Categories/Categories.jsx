import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-Up",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Dessert",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Drinks",
  },
];

function Categories() {
  return (
    <ScrollView horizontal>
      <View style={styles.categoryContainer}>
        <Image style={styles.categoryImage} source={items[0].image} />
        <Text style={styles.categoryText}>{items[0].text}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Image style={styles.categoryImage} source={items[1].image} />
        <Text style={styles.categoryText}>{items[1].text}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Image style={styles.categoryImage} source={items[2].image} />
        <Text style={styles.categoryText}>{items[2].text}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Image style={styles.categoryImage} source={items[3].image} />
        <Text style={styles.categoryText}>{items[3].text}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Image style={styles.categoryImage} source={items[4].image} />
        <Text style={styles.categoryText}>{items[4].text}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Image style={styles.categoryImage} source={items[5].image} />
        <Text style={styles.categoryText}>{items[5].text}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Image style={styles.categoryImage} source={items[6].image} />
        <Text style={styles.categoryText}>{items[6].text}</Text>
      </View>
    </ScrollView>
  );
}

export default Categories;
