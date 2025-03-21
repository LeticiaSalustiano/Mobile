import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal} from 'react-native';

class Entrar extends Component {
   
 render(){
  return(
    <View style={{backgroundColor: '#292929', width:'100%', height: 350, borderRadius: 20 }}>
        <Text style={{color: '#fff', fontSize: 28, paddingTop:15, textAlign: 'center'}}>Seja bem Vindo(a)!!!</Text>
        <Button title='Sair' onPress={this.props.fechar}></Button>
    </View>
  );
 }
}

export default Entrar;