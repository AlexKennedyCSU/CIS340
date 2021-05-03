import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {

uri: "https://raw.githubusercontent.com/AbundabiRamadan/CIS340/master/images/rams.png",
width: 90,
height: 80

  }
  return (
    <View style={styles.container}>
    
    <Image style ={styles.localCSULogo}
    source = {require('./assets/csu-logo.png')}
    
    />

<Image style ={styles.localCSULogo}
    source = {{uri: "https://raw.githubusercontent.com/AbundabiRamadan/CIS340/master/images/logo.png"}}
    
    />

    <Image  style ={styles.stretch} source={csuLogo}/>

    





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
  },

  localCSULogo: {
width: 55,
height: 55

  },

  urlCSULogo: {
    width:50,
    hewight: 50

  },

  stretch: {width: 50,
    height: 200,
  resizeMode: 'center',}
});
