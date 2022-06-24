import { View, Text, Image, Dimensions } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "firebase";
import { useState } from "react";
import MenuItems from "../../components/RestaurantDetailComponents/MenuItems/MenuItems.jsx";

export default function OrderComplete() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
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
        <Image
          source={require("../../assets/images/greencheckmark.jpg")}
          style={{ height: 90, width: 90 }}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.orderPlacedContainer}>
          <Text style={styles.orderPlacedText}>
            Your order at {restaurantName} has been placed for {totalUSD}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
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

        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ height: Dimensions.get("window").height }}>
            <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
