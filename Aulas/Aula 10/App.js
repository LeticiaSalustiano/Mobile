import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
         entrada: '',
         nome: ''
    };
    
    this.gravarNome = this.gravarNome.bind(this);
 }

 async componentDidMount(){
   await AsyncStorage.getItem('nome').then((value)=>{
        this.setState({nome: value})
    })
 }

 async componentDidUpdate(_, prevState){
    if(prevState.nome !== this.state.nome){
        await AsyncStorage.setItem('nome', this.state.nome)
        alert('Funcionando')
    }
 }

 gravarNome(){
    const{entrada} = this.state;
    this.setState({
        nome: this.state.entrada
    });
    AsyncStorage.setItem('nome', entrada)
    alert('Salvo com sucesso')
    Keyboard.dismiss();
  
 }

 render(){
    return(
      <View style={estilos.container}>
        <View style={estilos.viewEntrada}>
           <TextInput style={estilos.entrada}
           value={this.state.entrada}
           onChangeText={(texto) => this.setState({entrada: texto})}
           ></TextInput>
           <TouchableOpacity onPress={this.gravarNome}>
              <Text style={estilos.btn}>+</Text>
           </TouchableOpacity>
        </View>
        <Text style={estilos.nome}>{this.state.nome}</Text>
      </View>
    )
 }
}

 const estilos = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
      padding: 20,
      alignItems: 'center'
    },

    viewEntrada: {
      flexDirection: 'row',
    },

    entrada: {
      width: 350,
      height: 40,
      borderColor: '#000',
      borderWidth: 1,
      padding: 10
    },

    btn: {
      backgroundColor: '#222',
      color: '#fff',
      height: 40,
      padding: 10,
      borderColor: '#000',
      borderWidth: 1,
    },

    nome: {
      fontSize: 30,
      marginTop: 15
    },
});


export default App;