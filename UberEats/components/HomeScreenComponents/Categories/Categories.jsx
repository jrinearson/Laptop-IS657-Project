import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

const items = [
  {
    image: require("../../../assets/images/shopping-bag.png"),
    text: "Pick-Up",
  },
  {
    image: require("../../../assets/images/bread.png"),
    text: "Bakery",
  },
  {
    image: require("../../../assets/images/coffee.png"),
    text: "Coffee",
  },
  {
    image: require("../../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../../assets/images/desserts.png"),
    text: "Dessert",
  },
  {
    image: require("../../../assets/images/fast-food.png"),
    text: "Fast Food",
  },
  {
    image: require("../../../assets/images/soft-drink.png"),
    text: "Drinks",
  },
];

function Categories() {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.categoryContainer}>
            <TouchableOpacity>
              <View style={styles.categoryImageContainer}>
                <Image style={styles.categoryImage} source={item.image} />
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.categoryText}>{item.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Categories;
