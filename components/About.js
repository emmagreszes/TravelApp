import * as React from 'react';
import { Text, View, Button, Image, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import EmmaBio from "./EmmaBio"
import EzraBio from "./EzraBio"
import JudithBio from "./JudithBio"


export default function About({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button color= '#DB9B8F'
        title="EmmaBio"
        onPress={() => {navigation.navigate("EmmaBio")}}
      />

      <Button color= '#DB9B8F'
        title="JudithBio"
        onPress={() => {navigation.navigate("JudithBio")}}
      />
      <Button color= '#DB9B8F'
        title="EzraBio"
        onPress={() => {navigation.navigate("EzraBio")}}
      />

      <Icon raised name = "home" type = "fontisto" color = "#57A892" onPress={() => navigation.navigate('Home')} />
      <Image
        style= {{ width: 105, height: 50, position: 'absolute', bottom:0}}
        source=  {require('../media/smallLogo.png')}
        alt = "judith.jpg"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
