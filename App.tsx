import { StyleSheet, View, Dimensions } from 'react-native';
import { ScrollView, Text, Image } from 'react-native';

import PrimeHeader  from './components/primerHeader';

import NavigationIcon from './components/navigation_icon';

export default function App() {
  return (
    
    <View style={styles.container}>
        <View>
            <PrimeHeader />
          </View>
      
      
      <View style={styles.content}>
       <View style={styles.pageContent}>
  <Image
    source={require('./assets/banner.jpeg')}
    style={styles.banner}
    resizeMode="cover"
  />

  <Text style={styles.sectionTitle}>Recommended Movies</Text>
  <View style={styles.movieRow}>
    <Image source={require('./assets/m1.jpeg')} style={styles.card} />
    <Image source={require('./assets/m2.jpg')} style={styles.card} />
    <Image source={require('./assets/m3.jpeg')} style={styles.card} />
  </View>

  <Text style={styles.sectionTitle}>Featured Originals and Exclusives</Text>
  <View style={styles.movieRow}>
    <Image source={require('./assets/m4.jpeg')} style={styles.card} />
    <Image source={require('./assets/m5.jpeg')} style={styles.card} />
    <Image source={require('./assets/m6.jpeg')} style={styles.card} />
  </View>
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
  content: {
    flex: 1,
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
    color: '#fff',
  },

   pageContent: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 10,
  },

  banner: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },

  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
  },

  movieRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%',
  },

  card: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },

});
