import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const LocationCard = ({ location }) => {
  return (

    <View key= {location.id}>
      <Image
        style= {{ width: 305, height: 300}}
        resizeMode="cover"
        source={{ uri: location.img.src }}

      />
      <Text>{location.City}, {location.City}</Text>
    </View>
  );
};

export default LocationCard;
