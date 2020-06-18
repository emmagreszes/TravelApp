import * as React from 'react';
import { Text, View, Button, Image, StyleSheet} from 'react-native';
import EmmaBio from "./EmmaBio"
import EzraBio from "./EzraBio"
import JudithBio from "./JudithBio"


export default function About({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="EmmaBio"
        onPress={() => {navigation.navigate("EmmaBio")}}
      />

      <Button
        title="JudithBio"
        onPress={() => {navigation.navigate("JudithBio")}}
      />
      <Button
        title="EzraBio"
        onPress={() => {navigation.navigate("EzraBio")}}
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
