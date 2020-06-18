import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


const FriendCard = ({ friend }) => {
  return (

    <View key= {friend.id}>
      <Image
        style= {{ width: 305, height: 300}}
        resizeMode="cover"
        source={{ uri: friend.img.src }}
      />
      <Text>{friend.First} {friend.Last}</Text>
    </View>
  );
};

export default FriendCard;
