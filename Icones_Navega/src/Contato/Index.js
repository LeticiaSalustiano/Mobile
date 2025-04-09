/*import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function App() {

    const navegacao = useNavigation();

    function voltarHome(){
      navegacao.dispatch(StackActions.popToTop)
    }

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

  function enviarContato() {
    if (nome === '' || email === '' || mensagem === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
    } else {
      Alert.alert('Sucesso', 'Sua mensagem foi enviada com sucesso!');
      setNome('');
      setEmail('');
      setMensagem('');
      voltarHome();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Entre em Contato</Text>

    <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.textarea]}
        placeholder="Digite sua Mensagem"
        multiline
        numberOfLines={4}
        value={mensagem}
        onChangeText={setMensagem}
      />
    </View>
      <TouchableOpacity style={styles.btn} onPress={enviarContato}>
        <Text style={styles.btnTexto}>Enviar</Text>
      </TouchableOpacity>   
    </View>
  );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  card: {
    marginTop: '6%',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  textarea: {
    height: 100,
    textAlignVertical: 'top', 
  },
  btn: {
    width:150,
    backgroundColor: '#4B0082',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 20,
    alignSelf: 'flex-end',
  },
  btnTexto: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});*/

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navegacao = useNavigation();

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Contato</Text>       
      </View>
        
    );
}

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 20,
    },
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginBottom: 20,
    },
});
