import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
  },

  header: {
    marginTop: 30,
    alignItems: "center",
  },

  body: {
    margin: 15,
    alignItems: "center",
    marginTop: 15,
  },

  orderPlacedContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
  },

  orderPlacedText: {
    fontSize: 20,
    fontWeight: "500",
  },

  checkoutButtonContainer: {
    marginHorizontal: 15,
  },

  checkoutButton: {
    backgroundColor: "black",
    marginTop: 20,
    marginBottom: 40,
    alignItems: "center",
    padding: 15,
    borderRadius: 30,
    width: "100%",
    position: "relative",
    justifyContent: "center",
    flexDirection: "row",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});

export default styles;
