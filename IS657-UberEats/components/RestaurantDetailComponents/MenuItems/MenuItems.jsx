import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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

export default function MenuItems({ restaurantName, checkboxValue }) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) => (
    Boolean(cartItems.find((item) => item.title === food.title))
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index} style={styles.foodItemContainer}>
          <BouncyCheckbox
            fillColor="#06C167"
            iconStyle={{ borderColor: "lightgray", borderRadius: 5 }}
            isChecked={isFoodInCart(food, cartItems)}
            onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            
          />
          <FoodInfo food={food} />
          <Divider width={2} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={styles.menuItemContainer}>
    <View style={styles.titleContainer}>
      <TouchableOpacity>
        <Text style={styles.titleText}>{props.food.title}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.priceContainer}>
      <Text>{props.food.price}</Text>
    </View>
    <View>
      <Text>{props.food.description}</Text>
    </View>
  </View>
);
