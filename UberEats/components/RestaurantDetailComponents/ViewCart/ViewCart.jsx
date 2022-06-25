import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";
import OrderItems from "../OrderItems/OrderItems.jsx";
import firebase from "../../../Firebase.js";
import { ScrollView } from "react-native-gesture-handler";

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

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

  const addOrderToFireBase = () => {
    const db = firebase.firestore();
    db.collection("orders").add({
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setModalVisible(false);
    navigation.navigate("OrderComplete");
  };

  console.log(totalUSD);

  const checkoutModalContent = () => {
    return (
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={{ height: "40%" }}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        ></TouchableOpacity>
        <ScrollView>
        <View style={styles.checkoutContainer}>
          <Text style={styles.restaurantNameText}>{restaurantName}</Text>
          <View style={styles.orderItemContainer}>
            {items.map((item, index) => (
              <OrderItems key={index} item={item} />
            ))}
          </View>
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text style={styles.subtotalText}>{totalUSD}</Text>
          </View>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => addOrderToFireBase()}
          >
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>Checkout</Text>
            </View>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>{totalUSD}</Text>
            </View>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>View Cart</Text>
              </View>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>{totalUSD}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
