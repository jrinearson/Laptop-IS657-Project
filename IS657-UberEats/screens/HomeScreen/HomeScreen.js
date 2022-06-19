import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import HeaderTabs from "../../components/HeaderTab/HeaderTabs";
import styles from "./styles";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "../../components/Categories/Categories";
import RestaurantItems from "../../components/RestaurantItems/RestaurantItems";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <HeaderTabs />
          <SearchBar />
        </View>

        <Categories />

        <RestaurantItems />

      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
