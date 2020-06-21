import React from 'react';
import LocationCard from './LocationCard'
import {View} from 'react-native'
import locations from '../assets/locations'

const LocationList = () => {
  return(
    <View style={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around'
    }}>
      {locations.map((u) =>
        <LocationCard location = {u}/>
      )
      }
    </View>
  );
}

export default LocationList;
