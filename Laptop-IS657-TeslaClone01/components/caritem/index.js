import React from 'react';  
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles'
import StyledButton from '../styledbutton';


const CarItem = (props) => {

  const {name, tagline, taglineCTA, image} = props;

    return (
        <View styles={styles.carContainer}>

          {/*Sets the background to a picture of a Model X*/}
          <ImageBackground 
          source={image}
          style={styles.image}/>

        {/*Adds titles*/}
        <View style={styles.titles}>
          <Text style={styles.title}>
            {name}
          </Text>

          <Text style={styles.subtitle}>
            {tagline}&nbsp;
            

            <Text style={styles.subtitleCTA}>
              {taglineCTA}
            </Text>

          </Text>
        </View>

        <View styles={styles.buttonsContainer}>

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
      </View>

    );
};

export default CarItem;