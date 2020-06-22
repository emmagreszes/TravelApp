import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, Image, StyleSheet } from 'react-native';
import useStickyState from '../../useStickyState';
import FormField from '../FormField';
import { Card, ListItem, Icon } from 'react-native-elements'
import { formData } from '../formData';

export default function Wishlist({ route, navigation }) {
  const [text, setText] = useStickyState('');
  const [formValues, handleFormValueChange, setFormValues] = formData({
    city: '',
    country: ''
  })
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

      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>

      <Card title= "Preview New Location">
        {
            <View>
              <Image
                style= {{ width: 305, height: 300}}
                resizeMode="cover"
                source={{ uri: formValues.image }}
              />
              <Text style = {styles.text}>{formValues.city} , {formValues.country}</Text>
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
