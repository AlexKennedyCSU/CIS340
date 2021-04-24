import React from 'react';
import { Text, View, FlatList } from 'react-native';

export default  StatesApp= ()=> {
  return(
          <View style = {{flex: 1, paddingTop: 22}}>
              <FlatList
              data={[
                {key: 'Alabama'},
                {key: 'Colorado'},
                {key: 'Arkansas'},
                {key: 'Kansas'},
                {key: 'Idaho'},
                {key: 'Illinois'},
                {key: 'Utah'},
                {key: 'Maryland'},
                {key: 'Georgia'},
                {key: 'Minnesota'},
                {key: 'Virginia'},
                {key: 'Vermont'},
                {key: 'Michigan'},
                {key: 'California'},
                {key: 'Washington'},
              ]}
              renderItem = {({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item.key} </Text> }             
              
              
              />


          </View>




  );

  }





 
   
