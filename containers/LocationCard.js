import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import FlipCard from 'react-native-flip-card'

const LocationCard = ({ location }) => {
  return (

//    <View key= {location.id}>
      // <Image
      //   style= {{ width: 305, height: 300}}
      //   resizeMode="cover"
      //   source={{ uri: location.img.src }}
      //
      // />
      // <Text>{location.City}, {location.Country}</Text>
      <FlipCard style = {styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
      >
        {/* Face Side */}
        <View key = {location.id}>
          <Image
            style= {styles.image}
            resizeMode="cover"
            source={{ uri: location.img.src }}
            border= {5}
          />
          <Text style = {styles.text}>{location.City}, {location.Country}</Text>
        </View>
        {/* Back Side */}
        <View>
          <Text>The Back</Text>
        </View>

      </FlipCard>

  );
};

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    fontSize: 20,
    padding: 12
  },
  card: {
    justifyContent: 'center',
    width: 150,
    height: 145,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap:"wrap",
    borderRadius: 15,
    borderWidth: 1,
  },
  image: {
    width: 105,
    height: 100 ,
    justifyContent: "center"
  }
})

export default LocationCard;
