import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.largeGreen}>Green Text</Text>
      <Text style= {styles.yellow}> YellowText </Text>
      <Text style= {[styles.yellow, styles.largeGreen]}> YellowText, Then large green </Text>
      <Text style= {[styles.largeGreen, styles.yellow ]}> large green , Then YellowText </Text>
    </View>
  );
}


const styles = StyleSheet.create({

container: {
marginTop: 60,

},

largeGreen:{
  color: 'green',
  fontWeight: 'bold',
  fontSize: 20,
},

yellow: {
  color: 'yellow',
  fontSize: 30,

}

});


