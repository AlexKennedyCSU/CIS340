import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

export default  MyScrollView= ()=> {
  
 const dog = {
   uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
   width: 64,
   height: 64
 }
    return (
      <ScrollView>


      <Text style ={{fontSize: 80}}> Try to scroll down</Text>
      <Image source = {dog}/>
      <Image source = {require('./assets/apple_raw.png')} style={{width:64, height:64}}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {dog}/>

      <Text style ={{fontSize: 80}}> Try to scroll down</Text>

      <Image source = {dog}/>
      <Image source = {dog}/>
      <Image source = {require('./assets/apple_raw.png')} style={{width:64, height:64}}/>
      <Image source = {dog}/>
      <Image source = {dog}/>


      </ScrollView>
    
  );
}
