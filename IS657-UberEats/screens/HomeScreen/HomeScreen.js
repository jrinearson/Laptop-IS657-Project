import { View, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../../components/HeaderTab/HeaderTabs";
import styles from "./styles";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "../../components/Categories/Categories";
import RestaurantItems from "../../components/RestaurantItems/RestaurantItems";
import { restaurants } from "../../components/RestaurantItems/RestaurantItems";
import { SafeAreaView } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../../components/BottomTabs/BottomTabs";



const YELP_API_KEY =
  "CKyMAwD-KDXLWtFEPB8us-6hKZIjq3FJkETeyZkOtKvI0VYQyE0MnulRxglSquTltNYjDi2vyzAoKF3eWqipKCqu205pQi72l54fNmRsuLCgME4_OtqaX_iACHauYnYx";

function HomeScreen() {
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
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

export default HomeScreen;
