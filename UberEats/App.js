import React from "react";
import RootNavigation from "./Navigation.jsx";
import { LogBox } from 'react-native';


LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core and will be removed in a future release.']);


export default function App() {
  return (
      <RootNavigation />
  );
}

