import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../../components/HeaderTab/HeaderTabs";
import styles from "./styles";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
