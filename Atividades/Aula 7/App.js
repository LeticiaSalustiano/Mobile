import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0, 
      pizzas: [
        { key: 1, nome: 'Calabreza', valor: 59.90 },
        { key: 2, nome: 'Muzzarela', valor: 30.00 },
        { key: 3, nome: '4 Queijos', valor: 55.00 },
        { key: 4, nome: 'Catupiry', valor: 40.90 },
        { key: 5, nome: 'Portuguesa', valor: 45.00 },
      ]
    };
  }

  render() {
    let pizzaItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />;
    });

    return (
      <View style={estilos.container}>
        <Text style={estilos.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue) => this.setState({ pizza: itemValue })}>
          <Picker.Item label='Escolha aqui sua pizza' enabled={false} />
          {pizzaItem}
        </Picker>
        <Text style={estilos.pizza}>Você escolheu pizza de: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={estilos.valor}>R${this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },

  logo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },

  pizza: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15
  },

  valor: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
    fontWeight: 'bold'
  }
});

export default App;





