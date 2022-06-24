import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function OrderComplete() {
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

  return (
    <SafeAreaView style={styles.page}>
     <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        
        <ScrollView>
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../../assets/animations/cooking01.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
