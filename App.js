import * as React from 'react';
import { StyleSheet, Image,Text, View, Button, TouchableOpacity, ImageBackground } from 'react-native';
import {Icon} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from "./components/About"
import EmmaBio from "./components/EmmaBio"
import EzraBio from "./components/EzraBio"
import JudithBio from "./components/JudithBio"
import Wishlist from "./components/Wishlist"
import Explore from "./components/Explore"
import MyLocations from "./components/MyLocations"
import WishlistForm from "./components/forms/WishlistForm"
import MyLocationsForm from "./components/forms/MyLocationsForm"


// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import Icon from "react-native-vector-icons/FontAwesome";


function HomeScreen({ navigation }) {
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:'200'}}>
    <Image
      style= {{ width: 305, height: 300}}
      source=  {require('./media/fullLogo.png')}
      alt = "logo"
    />


      <Icon name = "plane" type = "fontisto" color = "#57A892"/>
      <TouchableOpacity style = {styles.button}>
      <Button
        title="About"
        color="#DB9B8F"
        onPress={() => {navigation.navigate("About")}}
      />

      <Button
        title="MyLocations"
        color="#57A892"
        onPress={() => {navigation.navigate("MyLocations")}}
      />
      <Button
        title="Wishlist"
        color="#DB9B8F"
        onPress={() => {navigation.navigate("Wishlist")}}
      />
      <Button
        title="Explore"
        color="#57A892"
        onPress={() => {navigation.navigate("Explore")}}
      />

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 60,
    textAlign: 'center',
  },
  button: {
    height: 200,
    width: 800,
  },
  backButton: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


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
        <Stack.Screen name="WishlistForm" component={WishlistForm}/>
        <Stack.Screen name="MyLocationsForm" component={MyLocationsForm}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
