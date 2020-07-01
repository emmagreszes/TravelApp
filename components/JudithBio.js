
import * as React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { judith } from '../assets/judith.jpeg';




export default function JudithBio({ route, navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>


         <Card title= 'Judith Sherbin'>
            <View style={styles.card}>
            <Image
              style= {{ width: 305, height: 300}}
              source=  {require('../assets/judith.jpeg')}
              alt = "judith.jpg"
            />
            <Text style= {styles.text}> My name is Judith Sherbin and I am an Applied Math and Computer Science
            double major at Brandeis. I was born in Hong Kong, but have spent most of my life in the switch
            San Francisco Bay Area. In my free time I love running, reading, traveling, and playing the ukulele.
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
