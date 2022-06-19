import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from 'react-native-elements';

export const restaurants = [];

function RestaurantItems(props) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.touchableOpacityContainer}
    >
      {props.restaurantData.map((restaurant, index) => (
        <View key={index} style={styles.restaurantItemContainer}>
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
      ))}
    
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      style={styles.image}
      source={{
        uri: props.image,
      }}
    />
    <TouchableOpacity style={styles.favButton}>
      <MaterialCommunityIcons name="heart-outline" size={30} color={"white"} />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View>
    <View style={styles.restaurantTitle}>
      <Text numberOfLines={1} style={styles.name}>{props.name}</Text>
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

export default RestaurantItems;
