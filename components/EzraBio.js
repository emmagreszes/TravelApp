import * as React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';
import { ezra } from '../assets/ezra.jpg';


export default function EzraBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ezras Bio</Text>
      <Image
        style= {{ width: 305, height: 300}}
        source=  {require('../assets/ezra.jpg')}
        alt = "ezra.jpg"
      />
      <Text style = {styles.text}>My name is Ezra Gershman. I am a CS and NEJS major. I am a rising senior
      at Brandeis. I am from Silver Spring, Maryland. In my free time, you can find me singing,
      napping, playing video games, or reading! </Text>

      <Icon raised name = "home" type = "fontisto" color = "#57A892" onPress={() => navigation.navigate('Home')} />
      <Image
        style= {{ width: 105, height: 50, position: 'absolute', bottom:0}}
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
