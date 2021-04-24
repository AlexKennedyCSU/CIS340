import React from 'react';
import { Text, View, SectionList } from 'react-native';

export default  StatesApp= ()=> {
  return(
          <View style = {{flex: 1, paddingTop: 22}}>
              <SectionList
              sections={[
                        {tile: 'A', data: ['Alabama','Alaska','Arkansas','Arizona']},
                        {tile: 'C', data: ['California','Colorado','Conneticut']},
                        {tile: 'D', data: ['Delaware']},
                        {tile: 'F', data: ['Florida']},
                        {tile: 'G', data: ['Georgia']},
                        {tile: 'H', data: ['Hawaii']},

            ]}
              
              renderItem = {({item}) => <Text style={{padding: 10, fontSize: 20, height: 44}}> {item} </Text> }  
              
              renderSectionHeader={({section})=> <Text style ={{paddingTop: 3, paddingLeft: 7,
              paddingRight: 7,
               paddingBottom: 3, 
              fontSize: 14,
               fontWeight: 'bold'}}> {section.title} </Text>}
            keyExtractor={(item,index)=> index}  
            
              
              
              />


          </View>




  ); //end return

  }





 
   
