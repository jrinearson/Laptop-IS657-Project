import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./styles";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MenuItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
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

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}
    >
      {foods.map((food, index) => (
        <View key={index} style={styles.foodItemContainer}>
          {hideCheckbox ? (
            <></>
          ) : (
            <BouncyCheckbox
              fillColor="#06C167"
              iconStyle={{ borderColor: "lightgray", borderRadius: 5 }}
              isChecked={isFoodInCart(food, cartItems)}
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />
          )}
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
      <Text style={styles.titleText}>{props.food.title}</Text>
    </View>
    <View style={styles.priceContainer}>
      <Text>{props.food.price}</Text>
    </View>
    <View>
      <Text>{props.food.description}</Text>
    </View>
  </View>
);
