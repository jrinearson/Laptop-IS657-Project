import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { TouchableOpacity, Modal } from "react-native";
import { useSelector } from "react-redux";

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

  console.log(totalUSD);

  const checkoutModalContent = () => {
    return (
      <View style={styles.checkoutContainer}>
        <View style={{ alignContent: "center" }}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </View>
          </TouchableOpacity>
        </View>
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
