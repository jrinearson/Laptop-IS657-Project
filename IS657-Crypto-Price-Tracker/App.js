import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import HomeScreen from './source/screens/homescreen/index.jsx';
import CoinDetailScreen from './source/screens/coindetailscreen/index.jsx';


export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetailScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    paddingTop: 50,
  },
});

