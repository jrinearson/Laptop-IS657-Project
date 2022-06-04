import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
      width: '100%',
      height: '100%',
    },
  
    titles: {
      marginTop: '20%',
      width: '100%',
      alignItems: 'center',
      
    },

     title: {
       fontSize: 40,
       fontWeight: '500',
  
     },

     subtitleCTA: {
      fontSize: 16,
      color: '#5C5E62',
      textDecorationLine: 'underline'

     },
  
     subtitle: {
       fontSize: 16,
       color: '#5C5E62'
     },
  
     image: {
       width: '100%',
       height: '200%',
       resizeMode: 'contain',
       position: 'absolute',
     },

     buttonsContainer: {
       position: 'absolute',   
       width: '100%',
       bottom: 50,
     }

  
  });

export default styles