import * as React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import FriendList from '../containers/FriendList'


export default function Friends({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <FriendList/>

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
