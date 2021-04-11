
import React from 'react';
import { Text, TextInput,  View } from 'react-native';

 function Student(props) {
  return (
  <View>
      <Text>Hey I'm {props.name}</Text>
    
   </View>
  );
}

export default function MultiComp(){
return(
<View style= {{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center'
}}>

  <Text>Welcome to Alex's house</Text>
  <Student name="AK"/>
  <Student name="Johnny"/>
  <Student name="Allie"/>
  <Student name = "Clark"/>
</View>


);


}
