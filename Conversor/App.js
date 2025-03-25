import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Picker from './src/Picker';
import api from './src/Services/Api';

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color={'#121212'} size={80} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.titulo1}>Selecione sua moeda:</Text>
          <Picker
            
            style={styles.picker}
          />

          <Text style={styles.titulo2}>Digite o valor a ser convertido (R$):</Text>
          <TextInput
            placeholder='Ex: 1.50'
            style={styles.input}
            keyboardType="numeric"
            
          />

          <TouchableOpacity style={styles.btn} 
          >
            <Text style={styles.btnTexto}>Converter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card2}>
          <Text style={styles.texto}>
            Valor moeda
          </Text>
          <Text style={styles.texto}>
            Corresponde a
          </Text>
          <Text style={styles.texto}>
            Valor convertido
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    marginTop: 50,
  },

  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 100,
    width: 300,
    height: 270,
    borderRadius: 5,
  },

  titulo1: {
    alignSelf: 'flex-start',
    fontSize: 15,
    padding: 15,
  },

  titulo2: {
    alignSelf: 'flex-start',
    fontSize: 15,
    marginLeft: 15,
  },

  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
    marginTop: 20,
  },

  btn: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderStartEndRadius: 5,
    borderEndEndRadius: 5,
    alignSelf: 'stretch',
    marginTop: '12%',
  },

  btnTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  card2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
    width: 300,
    height: 200,
  },

  texto: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});