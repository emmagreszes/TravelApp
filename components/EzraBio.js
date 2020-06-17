import * as React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { ezra } from '../assets/ezra.jpg';


export default function EzraBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ezra's Bio</Text>
      <img source=  {ezra} style= {{ width: 305, height: 159}}
      alt = "ezra.jpg"/>
      <Text>My name is Ezra Gershman. I am a CS and NEJS major. I am a rising senior
      at Brandeis. I am from Silver Spring, Maryland. In my free time, you can find me singing,
      napping, playing video games, or reading! </Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
