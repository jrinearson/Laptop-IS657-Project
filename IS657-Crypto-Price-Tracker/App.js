import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          source={{ uri: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579' }}
          style={styles.icon}
        />

        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={styles.subtitleDirection}>
            <Text style={styles.rank}>1</Text>
            <Text style={styles.text}>BTC</Text>
            <AntDesign name="caretdown" style={styles.caretDown}/>
            <Text style={styles.text}>4.4% %</Text>
          </View>
        </View>
        <View style={styles.coinContainerRow}>
          <Text style={styles.title}>$21,255.80</Text>
          <Text style={styles.text}>MCap 4.09 T</Text>
        </View>
      </View>

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

  coinContainer: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    padding: 15,
    justifyContent: 'space-between'
  },

  coinContainerRow: {
    marginLeft: 'auto'
  },

  icon: {
    height: 40,
    width: 40,
    marginRight: 10,
    alignSelf: 'center',
  },

  title: {
    color: 'white',
    fontSize: 16,
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
    color: 'red',
    size: 12,
    alignSelf: 'center',
    marginRight: 5,
    justifyContent: 'center'
  }
});

