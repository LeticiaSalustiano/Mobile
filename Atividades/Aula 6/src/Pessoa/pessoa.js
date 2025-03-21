import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native';

class Pessoa extends Component{
    render(){
      return(
        <View style={estilos.areaPessoa}>
        <Text style={estilos.textoPessoa}> Nome: {this.props.data.nome}</Text>
        <Text style={estilos.textoPessoa}> Idade: {this.props.data.idade}</Text>
        <Text style={estilos.textoPessoa}> Email: {this.props.data.email}</Text>
      </View>
    );
   }
  }

  const estilos = StyleSheet.create({

    areaPessoa:{
    backgroundColor: '#333',
    height: 200,
    marginTop: 5
    },

    textoPessoa:{
     color: '#fff',
     fontSize: 20,
     marginTop: 10
    }

});

export default Pessoa
