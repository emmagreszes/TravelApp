import React from 'react';
import FriendCard from './FriendCard'
import { View} from 'react-native'
import friends from '../assets/friends'

const FriendList = () => {
  return(
    <View>
      {friends.map((u) =>
        <FriendCard friend = {u}/>
      )
      }
    </View>
  );
}

export default FriendList;
