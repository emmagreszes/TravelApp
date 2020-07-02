import React from 'react';
import LocationCard from './LocationCard'
import {View} from 'react-native'
//import locations from '../assets/locations'

const LocationList = ({myLocations, removeItemValue}) => {
  return(
    <View>
        {myLocations.map((u) =>
          <LocationCard location = {u} removeItemValue={removeItemValue}/>
        )
      }
    </View>
  );
}

export default LocationList;
