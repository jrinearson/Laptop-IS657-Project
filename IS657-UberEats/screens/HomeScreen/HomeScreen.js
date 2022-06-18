import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderTabs from "../../components/HeaderTab/HeaderTabs";

function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
