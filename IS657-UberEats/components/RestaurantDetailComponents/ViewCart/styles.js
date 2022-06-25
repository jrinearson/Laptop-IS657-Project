import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    zIndex: 999,
  },
  subContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    marginTop: 20,
    alignItems: "center",
    padding: 15,
    borderRadius: 30,
    width: "100%",
    position: "relative",
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  buttonTextContainer: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },

  checkoutContainer: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    height: "1000%",
    borderWidth: 1,
    alignItems: "center",
    marginBottom: 30

  },

  restaurantNameText: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },

  orderItemContainer: {
    justifyContent: "space-between",
    width: "100%",
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    width: "90%",
  },

  checkoutButton: {
    backgroundColor: "black",
    marginTop: 20,
    alignItems: "center",
    padding: 15,
    borderRadius: 30,
    width: "100%",
    position: "relative",
    justifyContent: "center",
    flexDirection: "row",
    
  },
  checkoutButtonText: {
    color: "white",
    fontWeight: "600",
  },

  subtotalText: {
    marginBottom: 10,
    fontWeight: '600'
  },
});

export default styles;
