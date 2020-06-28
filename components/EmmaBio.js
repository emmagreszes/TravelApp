

import * as React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { emma } from '../assets/Emma.jpg';




export default function EmmaBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Emma Greszes</Text>

      <Image
        style= {{ width: 305, height: 300}}
        source=  {require('../assets/Emma.jpg')}
        alt = "emma"
      />

      <Text> My name is Emma Greszes and I am an incoming Senior at Brandeis majoring
      in Computer Science and minoring in Architecture and Art History.
       I have lived in New York all my life. In my free time, you can probably
       find me working in the art
      studio. I also love hiking, biking and traveling!
      </Text>


      <Icon raised name = "home" type = "fontisto" color = "#57A892" onPress={() => navigation.navigate('Home')} />
      <Image
        style= {{ width: 105, height: 50, position: 'absolute', bottom:0}}
        source=  {require('../media/smallLogo.png')}
        alt = "judith.jpg"
      />
    </View>
  );


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
}
