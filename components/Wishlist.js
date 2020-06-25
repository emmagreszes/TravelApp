import React, { Component, useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import Wishes from '../containers/Wishes'
import WishlistForm from './forms/WishlistForm'
import { useAsyncStorage } from '@react-native-community/async-storage';
import initialWishlist from '../assets/wishlist';

export default function Wishlist({ route, navigation }) {
  const [text, setText] = useState('');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setWishlist(JSON.parse(item)||wishlist);
  };

  const writeItemToStorage = async newValue => {
    await setItem(JSON.stringify(newValue));
    setWishlist(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const [wishlist,setWishlist] = useState(initialWishlist);
  const {getItem, setItem} = useAsyncStorage('@wishlist');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Add new destination" onPress={() => navigation.navigate('WishlistForm', {writeItemToStorage: writeItemToStorage, wishlist: wishlist})} />

      <Wishes wishlist = {wishlist||[]}/>

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
