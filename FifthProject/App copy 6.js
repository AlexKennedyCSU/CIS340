import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View } from 'react-native';

export default function App() {
  return (
    <View style = {{flex: 1,  
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch'}}>
      <View style = {{width: 50, height: 30, backgroundColor: 'red'}}/> 
      <View style = {{ height: 30, backgroundColor: 'green'}}/> 
      <View style = {{ height: 30, backgroundColor: 'blue'}}/> 
      
    </View>
  );
}


