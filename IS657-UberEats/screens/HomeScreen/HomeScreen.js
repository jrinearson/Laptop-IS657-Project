import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../../components/HeaderTab/HeaderTabs";
import styles from "./styles";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "../../components/Categories/Categories";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </SafeAreaView>
  );
}

export default HomeScreen;
