import * as React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Ezra } from '../assets/Ezra.jpg';




export default function EzraBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>


         <Card title= 'Ezra Gershman'>
            <View style={styles.card}>
            <Image
              style= {{ width: 305, height: 300}}
              source=  {require('../assets/ezra.jpg')}
              alt = "judith.jpg"
            />
            <Text style= {styles.text}> My name is Ezra Gershman. I am a CS and NEJS major. I am a rising senior
            at Brandeis. I am from Silver Spring, Maryland. In my free time, you can find me singing,
            napping, playing video games, or reading!
            </Text>
            <Text style={{color:'white'}}>{'\n'} </Text>
            <Icon name = "plane" type = "fontisto" color = "#DB9B8F" onPress={() => navigation.navigate('Home')} />
            </View>
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
      height: 700,
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
