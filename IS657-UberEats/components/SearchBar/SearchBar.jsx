import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";


function SearchBar() {
  return (
    <View style={styles.search}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.searchRightButton}>
            <AntDesign name="clockcircle" size={11}/>
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

export default SearchBar;
