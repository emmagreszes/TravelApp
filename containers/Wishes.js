import React from 'react';
import LocationCard from './LocationCard'
import {View} from 'react-native'

const Wishes = ({wishlist, removeItemValue}) => {
  return(

    <View>
        {wishlist.map((u) =>
          <LocationCard location = {u} removeItemValue={removeItemValue}/>
        )
      }
    </View>
  );
}

export default Wishes;
