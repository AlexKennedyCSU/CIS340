
import React from 'react';
import { Text, Image,  View } from 'react-native';

 export default function myDoggy() {

 
  return (
  <View style= {{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
     
    <Image source ="https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png"
    
    style={{width: 200, height: 200}}/>

    <Text>Hello, this is my image</Text>
   </View>
  );
}


