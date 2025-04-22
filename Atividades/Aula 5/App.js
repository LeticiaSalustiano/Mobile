import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

//faca com que ao escrever o nome no input ao clicar o botao aparece o texto + nome
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if (this.state.input === ''){
    alert('Adicione o seu nome!')
    return;
}
    this.setState({nome: 'Olá, seja bem vindo(a)! ' + this.state.input});
}

  render(){

    return(
      <View style={estilos.container}>
        <TextInput style={estilos.caixa} placeholder='Digite seu nome' 
        onChangeText={ (texto)=> this.setState ({input: texto})}></TextInput>
        <Button title='Entrar' onPress={this.entrar} style={estilos.btn}></Button>
        <Text style={estilos.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
     container:{
      flex: 1,

     },

     caixa:{
      width: 370,
      marginTop: 50,
      borderStyle: 'solid',
      borderWidth: 0.2,
      borderColor: 'black',
      margin: 10
     },

     texto:{
      padding: 25,
      fontSize: 20,
      textAlign: 'center'
     },

     btn:{
      padding: 30
     }
});

export default App



