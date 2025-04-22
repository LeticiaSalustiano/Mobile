import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        valor: true
    };
  };

  render() {
    return (
      <View style={estilos.container}>
        <Switch
          value={this.state.valor}
          onValueChange={(valorSelecionado)=> this.setState({valor: valorSelecionado})}
          ></Switch>
          <Text style={estilos.texto}>
            {(this.state.valor) ? 'Ligado':'Desligado'}
          </Text>
      </View>
    );
  }
}
 
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    padding: 20
  },

  texto:{
    textAlign: 'center',
    fontSize: 20
  }

});
 
export default App;

