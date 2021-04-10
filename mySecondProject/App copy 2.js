
import React from 'react';
import { Text} from 'react-native';

export default function App() {


  function getFullName(fname,mName,lName){


    return fname+ " "+ mName+" "+lName;
  }
  const pet = "Kitty";
  return (
    
      <Text>
        
        {"\n\n\n\n\n\n\n"}
        
        hello im the man {"\n"}
        My name is {getFullName("Alex","John","Kennedy")} {"\n}"}
        i have a {pet}!
        </Text>
      
   
  );
}

