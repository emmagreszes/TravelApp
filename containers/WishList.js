import React from 'react';
import LocationCard from './LocationCard'
import {View} from 'react-native'
import locations from '../assets/wishlist'

const WishList = () => {
  return(
    <View>
      {locations.map((u) =>
        <LocationCard location = {u}/>
      )
      }
    </View>
  );
}

export default WishList;
