import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { FunctionComponent } from 'react';


import { ICON_LIST } from './icon_list';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

var textColor = '#AAA';

interface Props {
  color?: string;
  icon: string;
}

const NavigationIcon: FunctionComponent<Props> = ({color = '#777', icon}) => {
    if (color != null)
      textColor = color;

    var path;
    for(const i of ICON_LIST){
        if (i.icon == icon){
            path = i.path;
            break;
        }
    }

    if (path == null)
        path = require('./icons/no_image_available.jpg');
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={path} /> 
            <Text style={[{color: color}, styles.text]}>{icon}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 0.18*screenWidth,
    height: 0.06*screenHeight,
  },
  img: {
    width: 0.03*screenHeight,
    height: 0.03*screenHeight,
    marginBottom: 0.01*screenHeight,
  },
  text: {
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default NavigationIcon;