import React from 'react';
import LocationCard from './LocationCard'
import {View} from 'react-native'
import wishlist from '../assets/wishlist'

const WishList = () => {
  return(
    <View>
      {wishlist.map((u) =>
        <LocationCard location = {u}/>
      )
      }
    </View>
  );
}

export default WishList;
