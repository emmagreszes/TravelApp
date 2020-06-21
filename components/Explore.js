import * as React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { ezra } from '../assets/ezra.jpg';


export default function Explroe({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>https://www.youtube.com/watch?v=kaWkfpk3rbg</Text>
      <Image
        style= {{ width: 1305, height: 800}}
        source=  "https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/SV_timelapse.gif"
        alt = "map"
      />

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
