import React, { Component } from 'react';
import { View } from 'react-native';


  class App extends Component{
    render(){
      return(
         <View style={{flex: 2, flexDirection: 'row', backgroundColor: '#555', justifyContent: 'space-around', alignItems: 'center'}}>

           <View style={{height: 50, backgroundColor: 'black'}}></View>
           <View style={{height: 50, width: 50, backgroundColor: 'green'}}></View>
           <View style={{height: 50, width: 50, backgroundColor: 'blue'}}></View>
           <View style={{height: 50, width: 50, backgroundColor: 'red'}}></View>
           <View style={{height: 50, backgroundColor: 'black'}}></View>

         </View>
        );     
      }
    }

    export default App