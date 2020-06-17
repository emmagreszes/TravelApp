import * as React from 'react';
import { Text, View, Button, Image, StyleSheet} from 'react-native';
import { emma } from '../assets/emma.jpg';

export default function EmmaBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style = {styles.text}>Emma Greszes</Text>
      <Image
        style= {{ width: 305, height: 300}}
        source=  {require('../assets/emma.jpg')}
        alt = "emma.jpg"
      />
      <Text style = {styles.text}> My name is Emma Greszes and I am an incoming Senior at Brandeis majoring
      in Computer Science and minoring in Architecture and Art History.
       I have lived in New York all my life. In my free time, you can probably
       find me working in the art
      studio. I also love hiking, biking and traveling!
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
