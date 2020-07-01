import * as React from 'react';
import { Text, View, Button, Image, StyleSheet} from 'react-native';
import {Icon, Card} from 'react-native-elements';
import EmmaBio from "./EmmaBio"
import EzraBio from "./EzraBio"
import JudithBio from "./JudithBio"


export default function About({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Card>
          <View style={styles.card}>
          <Text style= {styles.text}> Locale makes organizing travel easy, efficient, and fun. With a simple-to-use interface and innovative features,
          Locale is a leading travel companion. Create a wishlist of your dream vacations, a log of your favorite spots, and explore
          interesting tourist attractions near you. Start now. Join us. Make travel good.
          </Text>
          <Text style={{color:'white'}}>{'\n'} </Text>
          <Icon name = "plane" type = "fontisto" color = "#DB9B8F" onPress={() => navigation.navigate('Home')} />
          </View>
          <Button color= '#DB9B8F'
            title="EmmaBio"
            onPress={() => {navigation.navigate("EmmaBio")}}
          />

          <Button color= '#57A892'
            title="JudithBio"
            onPress={() => {navigation.navigate("JudithBio")}}
          />
          <Button color= '#DB9B8F'
            title="EzraBio"
            onPress={() => {navigation.navigate("EzraBio")}}
          />
      </Card>




      <Icon raised name = "home" type = "fontisto" color = "#57A892" onPress={() => navigation.navigate('Home')} />
      <Image
        style= {{ width: 105, height: 50, position: 'absolute', bottom:0}}
        source=  {require('../media/smallLogo.png')}
        alt = "judith.jpg"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
      fontFamily: "Georgia",
       justifyContent: "center",
       fontSize: 30,
       fontWeight: 4,
       color: '#57A892',
        textAlign: 'center',
  },

  card: {
    justifyContent: 'center',
    width: 700,
    height: 400,
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
    borderWidth: .5,
    borderColor: "gray",
    backgroundColor: "white",
    resizeMode: "cover",
    alignItems: 'center',

  },
  icon: {
    marginBottom: 12,
    paddingLeft: 10,
    paddingTop: 10,
  }
});
