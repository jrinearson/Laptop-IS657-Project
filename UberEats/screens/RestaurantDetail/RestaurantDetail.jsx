import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import styles from "./styles";
import About from "../../components/RestaurantDetailComponents/About/About.jsx";
import MenuItems from "../../components/RestaurantDetailComponents/MenuItems/MenuItems.jsx";
import ViewCart from "../../components/RestaurantDetailComponents/ViewCart/ViewCart.jsx";

const foods = [
  {
    title: "Truffle Parmesean Fries",
    description: "Truffle shavings, grainy mustard aioli, chives",
    price: "$12.00",
  },
  {
    title: "Roasted Corn Guacamole",
    description:
      "Cilantro, fresh lime, cherry tomatoes, serranos, feta cheese, warm tortilla chips",
    price: "$14.50",
  },
  {
    title: "Korean Fried Cauliflower",
    description: "Sweet spicy Korean chili miso paste, toasted sesame seeds",
    price: "$14.50",
  },
  {
    title: "Red Hot Wings",
    description: "Homemade sauce, blue cheese, carrots",
    price: "$16.00",
  },
  {
    title: "Onion Rings",
    description:
      "Homemade beer batter, hand-cut onion rings, house crafted BBQ sauce",
    price: "$10.00",
  },
  {
    title: "Bacon Burger",
    description:
      "Angus beef patty, thick cut bacon, blue cheese crumbles, bacon & onion jam served, handcut fries",
    price: "$20.00",
  },
  {
    title: "Black Truffle Ravioli",
    description: "Shrimp, truffle beurre blanc, grana padano",
    price: "$33.00",
  },
  {
    title: "Rib Eye Steak",
    description: "Sauce béarnaise, whipped potatoes ",
    price: "$27.00",
  },
  {
    title: "Sake Glazed Chilean Sea Bass",
    description: "Wok-fired vegetables, gold potatoes, dashi broth",
    price: "$43.00",
  },
  {
    title: "Crème Brûlée Cheesecake",
    description: "Fresh strawberry compote, whipped cream",
    price: "$14.00",
  },
  {
    title: "Molten Chocolate Cake",
    description: "Fresh raspberries, tahitian vanilla ice cream",
    price: "$14.50",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={styles.screen}>
      <About route={route} />
      <Divider width={2} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
