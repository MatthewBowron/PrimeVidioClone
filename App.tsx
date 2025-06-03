import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import PrimeHeader  from './components/primerHeader';

import NavigationIcon from './components/navigation_icon';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <PrimeHeader />
      </View>
      
      <View style={styles.content}>
        <Image source={require('./assets/banner.jpeg')} style={styles.banner}/>

        <Text style={styles.text}>Recommended Movies</Text>
        <View style={styles.movieRow}>
          <Image source={require('./assets/m1.jpeg')} style={styles.longBanner} />
          <Image source={require('./assets/m2.jpg')} style={styles.longBanner} />
        </View>

        <Text style={styles.text}>Featured Originals and Exclusives</Text>
        <View style={styles.movieRow}>
          <Image source={require('./assets/m3.jpeg')} style={styles.tallBanner} />
          <Image source={require('./assets/m4.jpeg')} style={styles.tallBanner} />
          <Image source={require('./assets/m5.jpeg')} style={styles.tallBanner} />
        </View>
      </View>

      <View style={styles.footer}>
          <NavigationIcon icon='Home' color='#fff'/>
          <NavigationIcon icon='Prime'/>
          <NavigationIcon icon='Subscriptions'/>
          <NavigationIcon icon='Downloads'/>
          <NavigationIcon icon='Search'/>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: screenWidth,
    height: 0.1*screenHeight,
    paddingHorizontal: 0.02*screenWidth,
    paddingBottom: 0.01*screenHeight,
    borderTopWidth: 2,
    borderTopColor: '#444',
  },
  text: {
    color: '#777',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
  },
  content: {
    flex: 1,
    width: screenWidth,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  banner: {
    width: screenWidth,
    height: 0.3*screenHeight,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'stretch',
  },

  divider: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  movieRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  longBanner: {
    width: 0.6*screenWidth,
    height: 0.15*screenHeight,
    marginRight: 10,
    borderRadius: 8,
    resizeMode: 'cover',
  },

  tallBanner: {
    width: 0.35*screenWidth,
    height: 0.3*screenHeight,
    marginRight: "5%",
    borderRadius: 8,
    resizeMode: 'cover',
  },
});
