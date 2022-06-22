import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import styles from "./styles";

export default function AccountHeader() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Justin Rinearson</Text>
        <View style={styles.headerImage}>
          <Image
            style={styles.profilePicture}
            source={require("../../../assets/images/justin-headshot.jpg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
