import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import FlipCard from 'react-native-flip-card'
import { useAsyncStorage } from '@react-native-community/async-storage';


const LocationCard = ({ location, removeItemValue }) => {
  return (

      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
      >
        {/* Face Side */}
        <View  style = {styles.card} key = {location.id}>
          <Image
            style= {styles.image}
            resizeMode="cover"
            source={{ uri: location.img?.src }}
          />
          <Text style = {styles.text}>{location.City}, {location.Country} </Text>
        </View>
        {/* Back Side */}
        <View style = {styles.back}>
          <Text style = {styles.text}>Things to Do: </Text>
          <Text style = {styles.text}> {location.Notes} </Text>
          <Icon style = {styles.icon} name = "trash" type = "fontisto" color = "#57A892" onPress ={()=> removeItemValue(location.City)} />

        </View>

      </FlipCard>

  );
};

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    fontSize: 12,
    padding: 12,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color: '#ae6e5f'

  },
  card: {
    justifyContent: 'center',
    width: 150,
    height: 160,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
    borderWidth: .5,
    borderColor: "gray",
    backgroundColor: "white",
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOffset: {
	     width: 0,
	      height: 8,
      },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  image: {
    width: 128,
    height: 100 ,
    justify: "center"
  },
  back:{
    justifyContent: 'center',
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1,
    borderWidth: .5,
    borderColor: "gray",
    backgroundColor: "white",
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
        height: 8,
      },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
  icon:{
    justifyContent: "right",
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
  }

})

export default LocationCard;
