
import React from 'react';
import { Text, TextInput, View} from 'react-native';

 function MyApp() {

  return (
    <View>
      <Text>
        hello im the man
        </Text>
        </View>
      
   
  );
}

export default function MultiComp(){


  return (
<View style = {{
flex: 1,
justifyContent: 'Center',
alignItems: "Center"

}}>
<Text>  Welcome To My Class</Text>
<MyApp />
<MyApp />
<MyApp />
<MyApp />
    </View>


  )
}

