

import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [count, setCount] =useState(0);
  const onTap = ()=> setCount(count => count +1);
  return (
    <View style={styles.container}>
      
      <View style={styles.counterText}>
<Image source={{uri: 'https://raw.githubusercontent.com/AbundabiRamadan/CIS340/master/images/logo.png'}}
style = {styles.logo}

/>

<Text style = {styles.insts}>
  press the button to select image
</Text>




      </View>
      <TouchableOpacity
      style={styles.button}
      onPress = {()=> alert('you need to select image')}>
        
         <Text style = {styles.buttonText}>pick image</Text>

      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {

    borderRadius: 5,
    backgroundColor: "#FFFFE0",
    padding: 10

  },
  insts: {
    fontSize: 18,
    color: "red",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20

  },
  buttonText: {
    fontSize: 20,
    color: "green"
  }
});
