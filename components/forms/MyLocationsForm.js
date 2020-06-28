import React, { Component, useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import useStickyState from '../../useStickyState';
import FormField from '../FormField';
import { Card, ListItem, Icon } from 'react-native-elements'
import { formData } from '../formData';
import wishPage from '../MyLocations'
// import wishlist from '../../assets/wishlist';

export default function MyLocationsForm({ route, navigation }) {
  const [text, setText] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState('');
  const myLocations = route.params.myLocations;
  const writeItemToStorage = route.params.writeItemToStorage;

  const handleFormValueChange = (key, value) => {
    if (key == 'city') {
      setCity(value)
    } else if (key == 'country') {
      setCountry(value)
    } else if (key == 'image') {
      setImage(value)
    }
  }

  const handleSubmit = () => {
    const obj = {City:city, Country:country, img:{src:image, alt:"picture"}}
    writeItemToStorage(myLocations.concat(obj))
    navigation.goBack()
  }

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
    <Icon raised name = "check" type = "fontisto" color = "#57A892" onPress={handleSubmit} />

      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🌍').join(' ')}
      </Text>

      <Card containerStyle= {{padding:8}}>
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
      <Icon raised name = "home" type = "fontisto" color = "#57A892" onPress={() => navigation.navigate('Home')} />
      <Image
        style= {{ width: 105, height: 50, bottom:0}}
        source=  {require('../../media/smallLogo.png')}
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
