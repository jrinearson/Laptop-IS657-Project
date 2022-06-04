import React from 'react';  
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
const CarItem = () => {
    return (
        <View styles={styles.carContainer}>

          {/*Sets the background to a picture of a Model X*/}
          <ImageBackground 
          source={require('../../assets/images/modelx.jpeg')} 
          style={styles.image}
        />

        {/*Adds titles*/}
        <View style={styles.titles}>
          <Text style={styles.title}>Model X</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
      </View>

    );
};

export default CarItem;