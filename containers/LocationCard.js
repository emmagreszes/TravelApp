import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const LocationCard = ({ location }) => {
  return (

    <View key= {location.id}>
      <Image
        style= {{ width: 305, height: 300}}
        resizeMode="cover"
        source={{ uri: location.img.src }}
      //  border= {5}

      />
      <Text style = {styles.text}>{location.City}, {location.Country}</Text>
      <Button> x </Button>
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 25,
  },
});
