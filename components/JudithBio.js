import * as React from 'react';
import { Text, View, Button, Image} from 'react-native';
import { judith } from '../assets/judith.jpeg';

export default function JudithBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Judiths Bio</Text>
      <Image
        style= {{ width: 305, height: 300}}
        source=  {require('../assets/judith.jpeg')}
        alt = "emma.jpg"
      />
      <Text>My name is Judith Sherbin and I am an Applied Math and Computer Science
      double major at Brandeis. I was born in Hong Kong, but have spent most of my life in the switch
      San Francisco Bay Area. In my free time I love running, reading, traveling, and playing the ukulele.</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
