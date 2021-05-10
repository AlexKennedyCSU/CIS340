

import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImagePickerIOS } from 'react-native';
import * as imagePicker from 'expo-image-picker';//import
import * as Sharing from 'expo-sharing';

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {

    let permissionResult = await imagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted ==false){
      alert("permission is required");
      return;
    }

    let pickerResult = await imagePicker.launchImageLibraryAsync();
    if(pickerResult.cancelled == true){
      return;
    }

    setSelectedImage({localUri: pickerResult.uri});
  };


  let openSharingDialogAsync = async() => {
    if ( !(await Sharing.isAvilableAsync())){
      alert("sharing not available");
      return;
    }
  }
  //display
  
  if(selectedImage !== null){
    return(<View style={styles.container}>
      <Image source ={{uri: selectedImage.localUri}}  style ={styles.selImage}/>

      <TouchableOpacity onPress= {openSharingDialogAsync} style={styles.button}>
        <Text styles = {styles.buttonText}> share my photo</Text>
      </TouchableOpacity>
    </View>)
  }

// end of new code


  
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
  },

  selImage:{

    height: 300,
    width: 200,
    resizeMode: 'contain'
  }
});
