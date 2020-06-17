import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BioScreen from "./components/BioScreen"
import EmmaBio from "./components/EmmaBio"
import EzraBio from "./components/EzraBio"
import JudithBio from "./components/JudithBio"

const bios = [
  {name:"Ezra",age:21, bio:"/.."},
  {name:"Emma",age:22, bio:"h"},
  {name:"Judith",age:22,bio:"wbhds"},
]

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Bios"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('BioScreen', {
            name:"xz",
            age:19,
            bio:"dnejs"
          });
        }}
      />

      <Button
        title="EmmaBio"
        onPress={() => {navigation.navigate("EmmaBio")}}
      />

      <Button
        title="JudithBio"
        onPress={() => {navigation.navigate("JudithBio")}}
      />
      <Button
        title="EzraBio"
        onPress={() => {navigation.navigate("EzraBio")}}
      />

    </View>
  );
}


function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { name } = route.params;
  const { age } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(name)}</Text>
      <Text>otherParam: {JSON.stringify(age)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BioScreen" component={BioScreen} />
        <Stack.Screen name="EmmaBio" component={EmmaBio} />
        <Stack.Screen name="JudithBio" component={JudithBio}/>
        <Stack.Screen name="EzraBio" component={EzraBio}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
