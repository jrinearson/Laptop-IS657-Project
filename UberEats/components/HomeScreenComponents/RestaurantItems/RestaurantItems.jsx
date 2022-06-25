import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const restaurants = [];

function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={styles.touchableOpacityContainer}
          onPress={() =>
            navigation.navigate("RestaurantDetail", {
              name: restaurant.name,
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories[0].title,
            })
          }
        >
          <View style={styles.restaurantItemContainer}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo
              name={restaurant.name}
              rating={restaurant.rating}
              price={restaurant.price}
              review_count={restaurant.review_count}
              category={restaurant.categories[0].title}
              location={restaurant.location.city}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

function RestaurantImage(props) {
  const [iconType, setIconType] = useState("heart-outline");
  const [iconColor, setIconColor] = useState("white");

  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri: props.image,
        }}
      />
      <TouchableOpacity
        style={styles.favButton}
        onPress={() => {
          if (iconType === "heart-outline") {
            setIconType("heart") & setIconColor("red");
          } else {
            setIconType("heart-outline") & setIconColor("white");
          }
        }}
      >
        <MaterialCommunityIcons name={iconType} size={30} color={iconColor} />
      </TouchableOpacity>
    </>
  );
}

function RestaurantInfo(props) {
  return (
    <View>
      <View style={styles.restaurantTitle}>
        <Text numberOfLines={1} style={styles.name}>
          {props.name}
        </Text>
        <Text style={styles.rating}>{Number(props.rating).toFixed(1)}</Text>
      </View>
      <View style={styles.restaurantSubtitle}>
        <Text>{props.category}</Text>
        <Text>{props.price}</Text>
      </View>
      <View style={styles.restaurantSubtitle}>
        <Text>{props.review_count} Reviews</Text>
        <Text>{props.location}</Text>
      </View>
    </View>
  );
}

export default RestaurantItems;
