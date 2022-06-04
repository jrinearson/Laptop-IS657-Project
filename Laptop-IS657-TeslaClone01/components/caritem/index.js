import React from 'react';  
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../styledbutton';


const CarItem = (props) => {
    return (
        <View styles={styles.carContainer}>

          {/*Sets the background to a picture of a Model X*/}
          <ImageBackground 
          source={require('../../assets/images/modelx.jpeg')} 
          style={styles.image}/>

        {/*Adds titles*/}
        <View style={styles.titles}>
          <Text style={styles.title}>Model X</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <StyledButton 
        type='primary' 
        content={'Custom Order'}
        onPress={() => {
          console.warn('👌Custom Order 👌')}}/>

        <StyledButton 
        type='secondary' 
        content={'Existing Inventory'}
        onPress={() => {
        console.warn('🔥Existing Inventory🔥')}}/>
      </View>

    );
};

export default CarItem;