import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

function BottomTabs() {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <FontAwesome5 name="home" size={25} />
          <Text style={styles.text}>Home</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <FontAwesome5 name="search" size={25} />
          <Text style={styles.text}>Browse</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <MaterialIcons name="local-grocery-store" size={25} />
          <Text style={styles.text}>Grocery</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <FontAwesome5 name="receipt" size={25} />
          <Text style={styles.text}>Orders</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.buttonContainer}>
          <MaterialCommunityIcons name="account" size={25} />
          <Text style={styles.text}>Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


export default BottomTabs;
