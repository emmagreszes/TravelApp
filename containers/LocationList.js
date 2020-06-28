import React from 'react';
import LocationCard from './LocationCard'
import {View} from 'react-native'
//import locations from '../assets/locations'

const LocationList = ({myLocations}) => {
  return(
    <View>
        {myLocations.map((u) =>
          <LocationCard location = {u}/>
        )
      }
    </View>
  );
}  

export default LocationList;
