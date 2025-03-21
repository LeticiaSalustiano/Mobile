import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class App extends Component{
    render(){
      return(
         <View style={styles.container}>
          <Text style={styles.textoPrincipal}>Texto 1</Text>
          <Text style={styles.textoSecundario}>Texto 2</Text>
          <Text>Texto 3</Text>
          
         </View>
      );     
    }
  }

  const styles = StyleSheet.create({
    container:{
      marginTop: 50,
      alignItems: 'center'
    },

    textoPrincipal:{
      fontSize: 25,
      color: '#ff0000'
    },

    textoSecundario:{
      textAlign: 'center',
      color: '#0000ff'
    }

  });

  export default App

 