import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    coinContainer: {
      flexDirection: 'row',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'gray',
      padding: 15,
      justifyContent: 'space-between'
    },
  
    coinContainerRow: {
      marginLeft: 'auto',
      alignItems: 'flex-end'
    },
  
    icon: {
      height: 40,
      width: 40,
      marginRight: 10,
      alignSelf: 'center',
    },
  
    title: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 3,
    },
  
    text: {
      color: 'white',
      marginRight: 5
    },
  
    rank: {
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: '#585858',
      paddingHorizontal: 5,
      marginRight: 2,
      borderRadius: 2.5
     },
  
    subtitleDirection: {
      flexDirection: 'row',
    },
  
    caretDown: {
      alignSelf: 'center',
      marginRight: 5,
      justifyContent: 'center'
    }
  });

  export default styles