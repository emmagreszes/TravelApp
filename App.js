import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from "./components/About"
import EmmaBio from "./components/EmmaBio"
import EzraBio from "./components/EzraBio"
import JudithBio from "./components/JudithBio"
import Wishlist from "./components/Wishlist"
import Explore from "./components/Explore"
import MyLocations from "./components/MyLocations"
import Friends from "./components/Friends"
import WishlistForm from "./components/forms/WishlistForm"
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import Icon from "react-native-vector-icons/FontAwesome";

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
        title="About"
        onPress={() => {navigation.navigate("About")}}
      />

      <Button
        title="MyLocations"
        onPress={() => {navigation.navigate("MyLocations")}}
      />
      <Button
        title="Wishlist"
        onPress={() => {navigation.navigate("Wishlist")}}
      />
      <Button
        title="Explore"
        onPress={() => {navigation.navigate("Explore")}}
      />
      <Button
        title="Friends"
        onPress={() => {navigation.navigate("Friends")}}
      />

    </View>
  );
}


function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { name } = route.params;
  const { age } = route.params;
  return (
    <View >
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
        <Stack.Screen name="EzraBio" component={EzraBio} />
        <Stack.Screen name="EmmaBio" component={EmmaBio} />
        <Stack.Screen name="JudithBio" component={JudithBio} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Wishlist" component={Wishlist}/>
        <Stack.Screen name="MyLocations" component={MyLocations}/>
        <Stack.Screen name="Explore" component={Explore}/>
        <Stack.Screen name="Friends" component={Friends}/>
        <Stack.Screen name="WishlistForm" component={WishlistForm}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
  const styles = StyleSheet.create({
   backButton: {
     height: 44,
     width: 44,
     justifyContent: 'center',
     alignItems: 'center',
   },
  });
}



// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="home" size={25} color={tintColor} />
//         )
//       }
//     },
//     Wishlist: {
//       screen: Wishlist,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="comments" size={25} color={tintColor} />
//         )
//       }
//     },
//     Explore: {
//       screen: Explore,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="search" size={25} color={tintColor} />
//         )
//       }
//     },
//     Friends: {
//       screen: Friends,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="search" size={25} color={tintColor} />
//         )
//       }
//     },
//     MyLocations: {
//       screen: MyLocations,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <Icon name="user" size={25} color={tintColor} />
//         )
//       }
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     tabBarOptions: {
//       activeTintColor: '#eb6e3d'
//     }
//   }
// );
//
// const AppConta
