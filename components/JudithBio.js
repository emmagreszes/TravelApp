import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function JudithBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Judith's Bio</Text>
      <Image source={require('./my-icon.png')} />;      
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
