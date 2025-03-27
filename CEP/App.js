import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { buscarCep } from './src/services/Api';

export default function App() {
  const [cep, setCep] = useState('');
  const [dadosCep, setDadosCep] = useState('');

  const obterDadosCep = async () => {
    if (cep.length === 8) {
      try {
        const dados = await buscarCep(cep);
        setDadosCep(dados);
      } catch (error) {
        Alert.alert('Falha na busca, adicione itens válidos', error.message);
      }
    } else {
      Alert.alert('CEP inválido', 'O CEP deve conter exatamente 8 dígitos.');
    }

    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App Cep</Text>
      <View style={styles.card}>
        <Text style={styles.titulo2}>Adicione seu Cep:</Text>
        <TextInput
          value={cep}
          onChangeText={setCep}
          placeholder='Adicione seu Cep:'
          style={styles.input}
          keyboardType="numeric"
          
        />
        <TouchableOpacity style={styles.btn} onPress={obterDadosCep}>
          <Text style={styles.btnTexto}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={() => {
          setCep('');
          setDadosCep('');
          
        }}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card2}>
        <Text style={styles.titulo3}>Informações recebidas:</Text>
        {dadosCep ? (
          <>
            <Text style={styles.texto}>Endereço: {dadosCep.logradouro}</Text>
            <Text style={styles.texto}>Cidade: {dadosCep.localidade}</Text>
            <Text style={styles.texto}>Bairro: {dadosCep.bairro}</Text>
            <Text style={styles.texto}>UF: {dadosCep.uf}</Text>
          </>
        ) : (
          <Text style={styles.texto2}>Nenhum dado disponível.</Text>
        )}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '	#F0F8FF', 
    alignItems: 'center',
    paddingVertical: 30,
  },

  card: {
    backgroundColor: '#0f3460',
    alignItems: 'center',
    width: '85%',
    height: 230,
    borderRadius: 20, // Bordas extremamente suaves para modernidade
    borderWidth: 5,
    borderColor: 'rgba(255, 255, 255, 0.2)', // Borda levemente transparente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },

  titulo: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222', // Cor vibrante para contraste
    paddingHorizontal: 20,
    padding: 20,
    marginTop: -30,
  },

  titulo2: {
    alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f5f5f5', // Cor vibrante para contraste
    paddingHorizontal: 20,
    padding: 15,
  },

  input: {
    width: '90%',
    height: 50,
    borderColor: 'rgba(255, 255, 255, 0.4)', // Bordas suaves e modernas
    borderWidth: 1.5,
    borderRadius: 12,
    paddingLeft: 15,
    marginTop: 8,
    backgroundColor: '#F8F8FF', 
    color: '#000', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },

  btn: {
    padding: 10,
    backgroundColor: '#008000',
    borderRadius: 7, 
    padding: 12,
    marginTop: 30,
    marginRight: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 12,
  },

  btn2: {
    padding: 10,
    backgroundColor: '#008000',
    borderRadius: 7, 
    padding: 12,
    alignSelf: 'flex-end',
    marginTop: -45,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 12,
  },

  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.5, // Espaçamento de letras para impacto visual
  },

  card2: {
    justifyContent: 'center',
    backgroundColor: '#0f3460',
    marginTop: 30,
    width: '85%',
    height: 290,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },

  titulo3: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f5f5f5', // Cor vibrante para contraste
    paddingHorizontal: 20,
    padding: 15,
  },

  texto: {
    marginLeft: 15,
    padding: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },

  texto2: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },

});
