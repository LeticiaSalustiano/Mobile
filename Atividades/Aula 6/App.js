import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView, FlatList } from 'react-native';
import Pessoa from './src/Pessoa/pessoa.js';

class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        feed:[
          {id: '1', nome: 'Letícia Salustiano', idade: 18, email: 'leticiasalustiano07@gmail.com'},
          {id: '2', nome: 'Arthur Lima', idade: 36, email: 'arthurlima@gmail.com'},
          {id: '3', nome: 'Márcio Antunes', idade: 54, email: 'marcioantunes@gmail.com'},
          {id: '4', nome: 'Angela Maria', idade: 76, email: 'angelamaria@gmail.com'},
          {id: '5', nome: 'Bento Soares', idade: 82, email: 'bentosoares@gmail.com'},
          {id: '6', nome: 'Lia Martins', idade: 22, email: 'liamartins@gmail.com'}
        ]
      }
    }

  render(){

    return(
      <View style={estilos.container}>
        <FlatList showsVerticalScrollIndicator={false}
        data={this.state.feed}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <Pessoa data={item}></Pessoa>}
        ></FlatList>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
     container:{
      flex: 1,
     }

});

export default App


  



