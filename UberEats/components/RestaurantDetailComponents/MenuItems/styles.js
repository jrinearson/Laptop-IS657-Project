import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  screen: {
    height: Dimensions.get("window").height,
  },

  foodItemContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginBottom: 30,
  },

  menuItemContainer: {
    justifyContent: "space-between",
    flex: 1,
  },

  foodPicture: {
    resizeMode: "absolute",
    height: 75,
    width: 75,
  },

  titleContainer: {
    paddingTop: 0,
  },

  titleText: {
    fontSize: 16,
    fontWeight: "600",
  },

  priceContainer: {
    paddingVertical: 5,
  },
});

export default styles;
