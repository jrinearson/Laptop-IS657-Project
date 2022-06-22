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

const items = [
  {
    icon: "tag",
    text: "Promotions",
  },
  {
    icon: "question",
    text: "Help",
  },
  {
    icon: "star",
    text: "Restaurant Rewards",
  },
  {
    icon: "suitcase",
    text: "Business Preferences",
  },
  {
    icon: "dollar-sign",
    text: "Uber Rewards",
  },
  {
    icon: "gift",
    text: "Send a gift",
  },

  {
    icon: "user-friends",
    text: "Invite friends",
  },
  {
    icon: "eye",
    text: "Privacy",
  },
  {
    icon: "shield-alt",
    text: "COVID-19 Safety Center",
  },
  {
    icon: "car",
    text: "Deliver with JuberEats",
  },
  {
    icon: "info-circle",
    text: "About",
  },
];

export default function AccountBody() {
  return (
    <View style={styles.bodyContainer}>
      {items.map((item, index) => (
        <View key={index}>
          <TouchableOpacity>
            <View style={styles.bodyTextContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome5 name={item.icon} size={20} />
                </View>
                <View style={{alignitems: 'flex-start', marginLeft: 30}}>
                <Text style={styles.bodyText}>{item.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
