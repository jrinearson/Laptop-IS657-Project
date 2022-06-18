import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

function SearchBar() {
  return (
    <View>
        <GooglePlacesAutocomplete />
    </View>
  )
};

export default SearchBar;