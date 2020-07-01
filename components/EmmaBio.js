

import * as React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { emma } from '../assets/Emma.jpg';




export default function EmmaBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>


         <Card title= 'Emma Greszes'>
            <View style={styles.card}>
              <Image
                style= {{ width: 305, height: 300}}
                source=  {require('../assets/Emma.jpg')}
                alt = "emma"
              />
            <Text style= {styles.text}> My name is Emma Greszes and I am an incoming Senior at Brandeis majoring
            in Computer Science and minoring in Architecture and Art History.
             I have lived in New York all my life. In my free time, you can probably
             find me working in the art
            studio. I also love hiking, biking and traveling!
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
