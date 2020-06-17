import * as React from 'react';
import { Image, Text, View, Button } from 'react-native';
import { judith } from '../assets/judith.jpeg';

export default function JudithBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Judith's Bio</Text>
      <Image source={judith} style= {{ width: 305, height: 159}} alt = "judith.jpeg"/>;
      <Text>My name is Judith Sherbin and I am an Applied Math and Computer Science
      double major at Brandeis. I was born in Hong Kong, but have spent most of my life in the switch
      San Francisco Bay Area. In my free time I love running, reading, traveling, and playing the ukulele.</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}