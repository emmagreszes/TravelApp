import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import WishList from '../containers/WishList'
import WishlistForm from './forms/WishlistForm'


export default function Wishlist({ route, navigation }) {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Add new destination" onPress={() => navigation.navigate('WishlistForm')} />

      <WishList/>

      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
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
