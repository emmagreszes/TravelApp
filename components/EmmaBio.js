

import * as React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { emma } from '../assets/emma.jpg';




export default function EmmaBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Emma "Brynn" Greszes</Text>
      <Image
        style= {{ width: 305, height: 300}}
        source=  "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
        alt = "emma.jpg"
      />
      <Text> My name is Emma Greszes and I am an incoming Senior at Brandeis majoring
      in Computer Science and minoring in Architecture and Art History.
       I have lived in New York all my life. In my free time, you can probably
       find me working in the art
      studio. I also love hiking, biking and traveling!
      </Text>


      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );


const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
}
