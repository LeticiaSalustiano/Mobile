import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import PickerItem from './src/Picker'; 
import { api } from './src/Services/Api';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [moedas, setMoedas] = useState([]);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [moedaBase, setMoedaBase] = useState(0);
  

  useEffect(()=>{
    async function loadMoedas() {
      const resposta = await api.get("all")
      let arrayMoedas = [];
      Object.keys (resposta.data). map((key)=>{
        arrayMoedas.push({
          key:key,
          label:key,
          value:key
        })
      })
      setMoedas(arrayMoedas);
      setMoedaSelecionada(arrayMoedas[0].key)
      setLoading(false);
    }
      loadMoedas();
  }, [])

  function converter(){
    console.log(moedaBase)
    Keyboard.dismiss();
    setMoedaBase(0);
  };

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
          <PickerItem
            moedas={moedas}
            moedaSelecionada={moedaSelecionada}
            quandoMudar={(moeda)=> setMoedaSelecionada(moeda)}
          />

          <Text style={styles.titulo2}>Digite o valor a ser convertido (R$):</Text>
          <TextInput
            placeholder='Ex: 1.50'
            style={styles.input}
            keyboardType="numeric"
            value={moedaBase}
            onChangeText={(valor)=> setMoedaBase(valor)}
          />
          <TouchableOpacity style={styles.btn} onPress={converter} 
          >
            <Text style={styles.btnTexto} >Converter</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card2}>
          <Text style={styles.texto}>
            ${moedaSelecionada}
          </Text>
          <Text style={styles.texto2}>
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
    backgroundColor: '#f3f3f3',
    marginTop: 100,
    width: 300,
    height: 270,
    borderRadius: 7,
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
    backgroundColor: '#f3f3f3',
    marginTop: 50,
    width: 300,
    height: 200,
  },

  texto: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  texto2: {
    padding: 10,
    fontSize: 15,
  },
});