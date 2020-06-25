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


{/*
  <FlipCard
    style={styles.card}
    friction={6}
    perspective={1000}
    flipHorizontal={true}
    flipVertical={false}
    flip={false}
    clickable={true}
    onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
  >

    <View key = {location.id}>
      <Image
        style= {{ width: 305, height: 300}}
        resizeMode="cover"
        source={{ uri: location.img.src }}
        //  border= {5}
      />
      <Text style = {styles.text}>{location.City}, {location.Country}</Text>
    </View>
    <View>
      <Text>The Back</Text>
      </View>
  </FlipCard>
*/}
