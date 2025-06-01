import { StyleSheet, Text, View, Dimensions } from 'react-native';
import PrimeHeader  from './components/primerHeader';

import NavigationIcon from './components/navigation_icon';

export default function App() {
  return (
    
    <View style={styles.container}>
        <View>
            <PrimeHeader />
          </View>
      
      
      <View style={styles.content}>
        
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
});
