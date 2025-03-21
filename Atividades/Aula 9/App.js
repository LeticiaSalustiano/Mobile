/* 
   Desafio Banco
 Abertura da conta 

 nome e logo fixo na parte superior

 dados pra abertura da conta

 nome (textInput)
 idade (textInput)
 sexo (Picker)  (masculino, feminino ou prefiro não opinar)
 seu limite (slider)
 estudante (switch)

 botão para abrir a conta
 mostrar os dados e um alert, não pode ter dados em branco ou mostrar na tela e confirmar a abertura da conta
*/

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, Button, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem: 'https://cdn-icons-png.flaticon.com/512/10384/10384161.png',
      nome: '',
      idade: '',
      sexo: 'masculino',
      limite: 0,
      estudante: false,
    };
  }

  handleSubmit = () => {
    const { nome, idade, sexo, limite, estudante } = this.state;

    // Verifica se os campos foram preenchidos
    if (!nome || !idade) {
      Alert.alert('Erro', 'Nome e idade são obrigatórios!');
    } else {
      // Exibe os dados fornecidos e depois confirma a abertura da conta
      Alert.alert(
        'Confirmar',
        `Nome: ${nome}\nIdade: ${idade}\nSexo: ${sexo}\nLimite: R$${limite.toFixed(2)}\nEstudante: ${estudante ? 'Sim' : 'Não'}`,
        [
          {
            text: 'Confirmar',
            onPress: () => {
              Alert.alert('Sua conta foi aberta com sucesso!');
              // Para limpar os campos
              this.setState({
                nome: '',
                idade: '',
                sexo: 'masculino',
                limite: 0,
                estudante: false,
              });
            },
          },
          { text: 'Cancelar' },
        ]
      );
    }
  };

  render(){     
    return(          
      <View style={estilos.container}>
        <Text style={estilos.logo}>Banco Para Todos</Text>

        {/* Formulário para abrir a conta */}
        <View style={estilos.formContainer}>
          <TextInput
            style={estilos.input}
            placeholder="Nome"
            onChangeText={(text) => this.setState({ nome: text })}
            value={this.state.nome}
          />

          <TextInput
            style={estilos.input}
            placeholder="Idade"
            keyboardType="numeric"
            onChangeText={(text) => this.setState({ idade: text })}
            value={this.state.idade}
          />

          <Text style={estilos.texto}>Sexo</Text>
          <Picker
            selectedValue={this.state.sexo}
            style={estilos.picker}
            onValueChange={(itemValue) => this.setState({ sexo: itemValue })}
          >
            <Picker.Item label="Masculino" value="masculino" />
            <Picker.Item label="Feminino" value="feminino" />
            <Picker.Item label="Prefiro não opinar" value="prefiro_nao_opinar" />
          </Picker>

          <Text style={estilos.texto}>Limite de Crédito</Text>
          <Slider
            style={estilos.slider}
            minimumValue={200}
            maximumValue={5000}
            step={100}
            value={this.state.limite}
            onValueChange={(value) => this.setState({ limite: value })}
          />
          <Text>R${this.state.limite.toFixed(2)}</Text>

          <View style={estilos.switchContainer}>
            <Text style={estilos.texto}>Estudante</Text>
            <Switch
              value={this.state.estudante}
              onValueChange={(value) => this.setState({ estudante: value })}
            />
          </View>

          {/* Botão para abrir a conta 
           <TouchableOpacity style={estilos.btn} onPress={this.handleSubmit} underlayColor="#000000"
              title="Abrir Conta">
           </TouchableOpacity>*/}

          <Button 
                  title="Abrir Conta"
                  color="#000" 
                  onPress={this.handleSubmit}/>
        </View>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },

  logo: {
    marginTop: 70,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  formContainer: {
    marginTop: 50,
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },

  picker: {
    height: 50,
    marginBottom: 15,
  },

  slider: {
    width: '100%',
    height: 40,
    marginBottom: 15,
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  
  },

  texto: {
    marginTop: 12,
    fontSize: 18
  },

});

export default App;
