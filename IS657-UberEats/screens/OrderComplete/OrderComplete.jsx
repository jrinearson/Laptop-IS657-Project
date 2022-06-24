import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
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
      <View
        style={{
        
          margin: 15,
          alignItems: "center",
          height: "100%",
          
        }}
      >
        <Image source={require("../../assets/images/greencheckmark.jpg")} style={{height: 80, width: 80}} />
        <Text>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>

        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            style={styles.cooking}
            source={require("../../assets/animations/cooking01.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
