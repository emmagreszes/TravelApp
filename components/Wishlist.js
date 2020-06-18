import * as React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import LocationList from '../containers/LocationList'

export default function Wishlist({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <LocationList/>

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
