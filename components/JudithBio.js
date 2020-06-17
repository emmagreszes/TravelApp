import * as React from 'react';
import { Image, Text, View, Button } from 'react-native';
import { judithpic } from './assets/judith.jpeg'

export default function JudithBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Judith's Bio</Text>
      <Image source={judithpic} style= {{ width: 305, height: 159}} />;
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
