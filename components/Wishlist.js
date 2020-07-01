import React, { Component, useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';
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
  const {getItem, setItem} = useAsyncStorage('@wishlist20200701');
  //writeItemToStorage(initialWishlist)

  const removeItemValue = (key) => {
        writeItemToStorage(wishlist.filter(x => x.City != key))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Icon raised name = "plus-a" type = "fontisto" color = "#57A892" onPress = {() => navigation.navigate('WishlistForm', {writeItemToStorage: writeItemToStorage, wishlist: wishlist})} />

      <Wishes wishlist = {wishlist||[]} removeItemValue = {removeItemValue}/>

    <Icon raised name = "home" type = "fontisto" color = "#57A892" onPress={() => navigation.navigate('Home')} />
    <Image
      style= {{ width: 105, height: 50,  bottom:0}}
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
