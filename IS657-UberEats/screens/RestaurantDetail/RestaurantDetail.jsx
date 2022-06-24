import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import styles from "./styles";
import About from "../../components/RestaurantDetailComponents/About/About.jsx";
import MenuItems from "../../components/RestaurantDetailComponents/MenuItems/MenuItems.jsx";
import ViewCart from "../../components/RestaurantDetailComponents/ViewCart/ViewCart.jsx";

const foods = [
  {
    title: "Bacon Burger",
    description:
      "Angus beef patty, thick cut bacon, blue cheese crumbles, bacon & onion jam served w/side of fries",
    price: "$20.00",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/HjJvsO_7dTbKfpequbx05g/o.jpg",
  },
  {
    title: "Red Hot Wings",
    description:
      "7 breaded tasty wings tossed in our very own hot sauce served w/fries & ranch",
    price: "$16.00",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/YH5RNa8atwllfP6yym5BnA/o.jpg",
  },
  {
    title: "Rib Eye Steak",
    description:
      "Half pound rib eye steak served w/side of mashed potatoes",
    price: "$27.00",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/8fJF2G52Y9XhUsNvi5SsvQ/o.jpg",
  },
  {
    title: "Onion Rings",
    description:
      "Homemade beer batter, hand-cut onion rings, served w/house crafted bbq sauce ",
    price: "$10.00",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/2XlMm1ZoA7yx8GmYCL9iPw/o.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={styles.screen}>
      <About route={route} />
      <Divider width={2} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods}/>
        <ViewCart navigation={navigation} />
    </View>
  );
}
