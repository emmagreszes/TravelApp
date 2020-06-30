import React, { Component, useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import {Icon} from 'react-native-elements';
import LocationList from '../containers/LocationList'
import MyLocationsForm from './forms/MyLocationsForm'
import { useAsyncStorage } from '@react-native-community/async-storage';
import initialLocations from '../assets/locations';

export default function MyLocations({ route, navigation }) {
  const [text, setText] = useState('');

  const readItemFromStorage = async () => {
    const item = await getItem();
    setMyLocations(JSON.parse(item)||myLocations);
  };

  const writeItemToStorage = async newValue => {
    await setItem(JSON.stringify(newValue));
    setMyLocations(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  const [myLocations,setMyLocations] = useState(initialLocations);
  const {getItem, setItem} = useAsyncStorage('@myLocations20200630');

  const removeItemValue = (key) => {
        writeItemToStorage(myLocations.filter(x => x.City != key))
  }
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Icon raised name = "plus-a" type = "fontisto" color = "#57A892" onPress = {() => navigation.navigate('MyLocationsForm', {writeItemToStorage: writeItemToStorage, myLocations: myLocations})} />

      <LocationList myLocations = {myLocations ||[]} removeItemValue = {removeItemValue}/>

      <Icon raised name = "home" type = "fontisto" color = "#57A892" onPress={() => navigation.navigate('Home')} />
      <Image
        style= {{ width: 105, height: 50,bottom:0}}
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
