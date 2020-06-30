import React from 'react';
import LocationCard from './LocationCard'
import {View, StyleSheet} from 'react-native'

const Wishes = ({wishlist, removeItemValue}) => {
  return(

    <View style = {styles.cards}>
        {wishlist.map((u) =>
          <LocationCard location = {u} removeItemValue={removeItemValue}/>
        )
      }
    </View>
  );
}

export default Wishes;

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    //flexDirection: 'row',
    flexWrap: 'wrap'
  },
})
