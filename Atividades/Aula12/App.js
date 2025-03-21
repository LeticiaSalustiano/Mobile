import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Modal } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alcool: '',
            gasolina: '',
            visibModal: false,
            resultado: '',
            resultadoColor: '',
        };
    }

calcular = () => {
    const { alcool, gasolina } = this.state;
      if (alcool && gasolina) {
        const ratio = parseFloat(alcool) / parseFloat(gasolina);
        const resultado = ratio < 0.7 ? 'Álcool é melhor!' : 'Gasolina é melhor!';
        const resultadoColor = ratio < 0.7 ? '#00FF00' : '#FFA500'; 
          this.setState({ 
            visibModal: true, 
            resultado, 
            resultadoColor,
            alcool: '', 
            gasolina: '' 
    });
  }
};

  render() {
    return (
      <View style={estilos.container}>
      <Cartao />
          <Text style={estilos.titulo}>Quer saber qual a melhor opção?</Text>

          <View style={estilos.form}>
            <Text style={estilos.titulo2}>Álcool: </Text>
             <TextInput
                style={estilos.input}
                placeholder="Preço por litro"
                keyboardType="numeric"
                onChangeText={(text) => this.setState({alcool: text })}
                value={this.state.alcool}
         />

        <Text style={estilos.titulo2}>Gasolina: </Text>
          <TextInput
              style={estilos.input}
              placeholder="Preço por litro"
              keyboardType="numeric"
              onChangeText={(text) => this.setState({gasolina: text })}
              value={this.state.gasolina}
    />
     </View>

    <TouchableOpacity
      onPress={this.calcular}
        style={{
          backgroundColor: 'red',
          padding: 10,
          borderRadius: 5,
          marginTop: 50,
          width: 200,
          height: 45,
    }}
  >
      <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Calcular</Text>
        </TouchableOpacity>

    <Modal
        transparent={true}
        visible={this.state.visibModal}
        animationType="fade"
  >

    <View style={{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>

    <View style={{
      backgroundColor: '#909090',
      padding: 20,
      borderRadius: 10,
      width: 300,
      height: 400}}>

    <Text style={{
      fontFamily: 'Arial',
      fontSize: 30,
      textAlign: 'center',
      color: this.state.resultadoColor, 
      marginBottom: 20,
      marginTop: 50
}}>

    {this.state.resultado}
        </Text>
          <Text style={estilos.titulo3}>Com os preços:</Text>

    <Text style={{
      fontSize: 19,
      textAlign: 'center',
      marginBottom: 20,
      marginTop: 20,
      color: '#fff'
}}>

    Álcool: R$ {this.state.alcool}
        </Text>

    <Text style={{
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 15,
      color: '#fff'
}}>

    Gasolina: R$ {this.state.gasolina}
    </Text>

  <TouchableOpacity
      onPress={() => this.setState({ visibModal: false })}

    style={{
      backgroundColor: 'red',
      padding: 10,
      alignSelf: 'center',
      borderRadius: 5,
      marginTop: 40,
}}
>
               <Text style={{ fontSize: 15, color: '#fff' }}>Calcular novamente</Text>
             </TouchableOpacity>
          </View>
        </View>
      </Modal>
     </View>
   );
  }
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#505050',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 25,
        color: '#f5f5f5',
        marginTop: 50,
        padding: 10,
    },
    titulo2: {
        fontSize: 18,
        color: '#f5f5f5',
        padding: 10,
    },
    titulo3: {
        textAlign: 'center',
        fontSize: 25,
        color: '#f5f5f5',
        padding: 10,
    },
    form: {
        marginTop: 20,
    },
    input: {
        width: 350,
        height: 40,
        borderColor: '#303030',
        borderWidth: 2,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
});

class Cartao extends Component {
    render() {
      let imagem = 'https://cdn.iconscout.com/icon/free/png-256/free-bomba-de-gasolina-1841991-1564907.png';
        return (
         <Image
            source={{ uri: imagem }}
            style={{
              width: 150,
              height: 150,
              marginTop: 90,
              alignSelf: 'center',
              marginLeft: 40,
  }}
/>

    );
  }
}

export default App;
