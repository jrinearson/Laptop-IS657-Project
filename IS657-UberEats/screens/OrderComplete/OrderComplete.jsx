import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "firebase";
import { useState } from "react";
import MenuItems from "../../components/RestaurantDetailComponents/MenuItems/MenuItems.jsx";

export default function OrderComplete({ navigation }) {
  const [lastOrder, setLastOrder] = useState({
    items: [],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            source={require("../../assets/images/yaranaika.png")}
            style={{ height: 100, width: 100 }}
          />
          <Image
            source={require("../../assets/images/yaranaika.png")}
            style={{ height: 100, width: 100 }}
          />
          <Image
            source={require("../../assets/images/yaranaika.png")}
            style={{ height: 100, width: 100 }}
          />
        </View>
      </View>
      <View style={styles.orderPlacedContainer}>
        <Text style={styles.orderPlacedText}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
      </View>
      <View style={styles.checkoutButtonContainer}>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Start New Order 🔥</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ width: "100%" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}
      >
        <MenuItems foods={lastOrder.items} hideCheckbox={true} />
      </ScrollView>
    </SafeAreaView>
  );
}
