import * as React from 'react';
import { Text, View, Button, Image, StyleSheet, Linking } from 'react-native';
import {Icon} from 'react-native-elements';
import { ezra } from '../assets/ezra.jpg';


export default function Explroe({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style= {{fontSize: 50, fontFamily: 'Georgia', fontWeight: 'bold',justifyContent: 'center'}}> COMING SOON!</Text>
      <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=kaWkfpk3rbg')}>
      check out our plan
      </Text>
      <Image
        style= {{ width: 1305, height: 800}}
        source=  "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/SV_timelapse.gif"
        alt = "map"
      />

      <Icon raised name = "home" type = "fontisto" color = "#57A892" onPress={() => navigation.navigate('Home')} />
      <Image
        style= {{ width: 105, height: 50, bottom:0}}
        source=  {require('../media/smallLogo.png')}
        alt = "judith.jpg"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
