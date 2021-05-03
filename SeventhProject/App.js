
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {

  onPressButton(){

    alert('You tapped a button')
  }
  render(){
  return (
    <View style={styles.container}>

<View style={styles.containerButton}>
  <Button onPress={this.onPressButton}

  
  title ="Press Button1" />
      
      </View>

      <View style={styles.containerButtonLayout}>
  <Button onPress={this.onPressButton}
  title ="Press Button1" />
      
      </View>

      <View style={styles.containerButtonLayout}>
  <Button onPress={()=>{
alert('you tapped a button kewl');

  }}
  title ="kewl"
  color="green" />
      
      </View>

      <View style={styles.containerButton}>
  <Button onPress={()=>{
alert('you tapped a button tap dat');

  }}
  title ="tap dat" />
      
      </View>

      
      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerButton: {
    margin: 20,
  },
  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between' 
  }
});
