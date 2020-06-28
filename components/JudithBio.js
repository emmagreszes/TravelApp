import * as React from 'react';
import { Text, View, Button, Image} from 'react-native';
import {Icon} from 'react-native-elements';
import { judith } from '../assets/judith.jpeg';

export default function JudithBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Judiths Bio</Text>
      <Image
        style= {{ width: 305, height: 300}}
        source=  {require('../assets/judith.jpeg')}
        alt = "judith.jpg"
      />
      <Text>My name is Judith Sherbin and I am an Applied Math and Computer Science
      double major at Brandeis. I was born in Hong Kong, but have spent most of my life in the switch
      San Francisco Bay Area. In my free time I love running, reading, traveling, and playing the ukulele.</Text>

      <Icon raised name = "home" type = "fontisto" color = "#57A892" onPress={() => navigation.navigate('Home')} />
      <Image
        style= {{ width: 105, height: 50, position: 'absolute', bottom:0}}
        source=  {require('../media/smallLogo.png')}
        alt = "judith.jpg"
      />
    </View>
  );
}
