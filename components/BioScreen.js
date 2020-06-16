import * as React from 'react';
import { Text, View, Button } from 'react-native';

function BioScreen({ route, navigation }) {
  /* 2. Get the param */
  const { name } = route.params;
  const { age } = route.params;
  const { bio } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Team Bios</Text>
      <Text>Name: {JSON.stringify(name)}</Text>
      <Text>Age: {JSON.stringify(age)}</Text>
      <Text>Bio: {JSON.stringify(bio)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
