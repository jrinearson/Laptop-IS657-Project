import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: Dimensions.get("window").height,
  },

  header: {
    marginTop: 30,
    alignItems: "center",
  },

  body: {
    margin: 15,
    alignItems: "center",
    height: "100%",
    marginTop: 15,
  },

  orderPlacedContainer: {
    marginBottom: 15,
  },

  orderPlacedText: {
    fontSize: 16,
    fontWeight: "500",
  },

  checkbox: {
    height: 100,
    alignSelf: "center",
    marginBottom: 30,
  },

  cooking: {
    height: 150,
    alignSelf: "center",
    marginBottom: 30,
    width: 900,
  },
});

export default styles;
