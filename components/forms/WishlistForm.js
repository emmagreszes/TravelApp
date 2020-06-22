import React, { Component, useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import useStickyState from '../../useStickyState';
import FormField from '../FormField';
import { Card, ListItem, Icon } from 'react-native-elements'
import { formData } from '../formData';
import { useAsyncStorage } from '@react-native-community/async-storage';
import wishlist from '../../assets/wishlist';

export default function Wishlist({ route, navigation }) {
  const [text, setText] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState('');
  const [wishlist, setWishlist] = useState('wishlist');
  const { getItem, setItem } = useAsyncStorage('@wishlist');

  const handleFormValueChange = (key, value) => {
    if (key == 'city') {
      setCity(value)
    } else if (key == 'country') {
      setCountry(value)
    }
  }

  const handleSubmit = () => {
    const obj = {City:city, Country:country, img:{src:image, alt:"picture"}}
    writeItemToStorage(wishlist.concat(obj))
  }

  const readItemFromStorage = async () => {
    const item = await getItem();
    setWishlist(JSON.parse(item));
  };

  const writeItemToStorage = async newValue => {
    await setItem(JSON.stringify(newValue));
    setWishlist(newValue);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <FormField
      label='City'
      formKey='city'
      placeholder='City'
      handleFormValueChange={handleFormValueChange}
    />
    <FormField
      label='Country'
      formKey='country'
      placeholder='country'
      handleFormValueChange={handleFormValueChange}
    />
    <FormField
      label='Image URL'
      formKey='image'
      placeholder='Image URL'
      handleFormValueChange={handleFormValueChange}
    />
    <Button title = "Submit" onPress={handleSubmit}/>

      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🌍').join(' ')}
      </Text>

      <Card title= "Preview New Location">
        {
            <View>
              <Image
                style= {{ width: 305, height: 300}}
                resizeMode="cover"
                source={{ uri: image }}
              />
              <Text style = {styles.text}>{city} ,{country}</Text>
            </View>
        }
      </Card>
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
