import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import styles from "./styles";
import { restaurants } from "../../components/HomeScreenComponents/RestaurantItems/RestaurantItems.jsx";
import HeaderTabs from "../../components/HomeScreenComponents/HeaderTab/HeaderTabs.jsx";
import SearchBar from "../../components/HomeScreenComponents/SearchBar/SearchBar.jsx";
import Categories from "../../components/HomeScreenComponents/Categories/Categories.jsx";
import RestaurantItems from "../../components/HomeScreenComponents/RestaurantItems/RestaurantItems.jsx";
import BottomTabs from "../../components/HomeScreenComponents/BottomTabs/BottomTabs.jsx";

const YELP_API_KEY =
  "CKyMAwD-KDXLWtFEPB8us-6hKZIjq3FJkETeyZkOtKvI0VYQyE0MnulRxglSquTltNYjDi2vyzAoKF3eWqipKCqu205pQi72l54fNmRsuLCgME4_OtqaX_iACHauYnYx";

export default function HomeScreen({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(restaurants);
  const [city, setCity] = useState("Glendale");
  const [activeTab, setActiveTab] = useState("Delivery");

  async function GetRestaurantsFromYelp() {
    const YELP_URL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const API_OPTIONS = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    const res = await fetch(YELP_URL, API_OPTIONS);
    const json = await res.json();
    return setRestaurantData(
      json.businesses.filter((business) =>
        business.transactions.includes(activeTab.toLowerCase())
      )
    );
  }

  useEffect(() => {
    GetRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
