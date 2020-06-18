import * as React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { ezra } from '../assets/ezra.jpg';


export default function Friends({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ezra's Bio</Text>
      <Image
        style= {{ width: 305, height: 300}}
        source=  {require('../assets/ezra.jpg')}
        alt = "ezra.jpg"
      />
      <Text style = {styles.text}>My name is Ezra Gershman. I am a CS and NEJS major. I am a rising senior
      at Brandeis. I am from Silver Spring, Maryland. In my free time, you can find me singing,
      napping, playing video games, or reading! </Text>

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
