import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";
import { Ionicons, AntDesign } from "@expo/vector-icons";


function SearchBar({cityHandler}) {
  return (
    <View style={styles.search}>
      <GooglePlacesAutocomplete
      query={{key: 'AIzaSyAHUzjOlUZ7nbD_Am53m8Y0zNU7vQWO8es'}}
      onPress={(data, details = null) => {
        console.log(data.description);
        const city = data.description.split(','[0]);
        cityHandler(city);
      }}
        placeholder="Search 🍜"
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
          </View>
        )}
      />
    </View>
  );
}

export default SearchBar;
