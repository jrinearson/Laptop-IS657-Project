import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from "react-native";
import CarsList from './components/carlist';

export default function App() {
  return (
    
    <View styles={styles.container}>
      
      <CarsList/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

});
