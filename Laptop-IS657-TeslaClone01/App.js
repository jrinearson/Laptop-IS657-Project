import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View styles={styles.container}>

    <View styles={styles.carContainer}>
      <ImageBackground 
      source={require('laptop-is657-teslaclone01\assets\images\modelx.jpeg')}
      style={styles.image}
      />
    

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>

      </View>
    

    </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  carContainer: {
    width: '100%',
    height: '100%',

  },

  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',


  },

   title: {
     fontSize: 40,
     fontWeight: '500',

   },

   subtitle: {
     fontSize: 16,
     color: '#5C5E62'
   },

   image: {
     width: '100%',
     height: '100%',
     resizeMode: 'cover',
     position: 'absolute',
   },



});
