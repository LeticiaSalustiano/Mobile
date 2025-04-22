import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import PickerItem from './src/Picker'; 
import { api } from './src/Services/Api';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [moedas, setMoedas] = useState([]);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [moedaBase, setMoedaBase] = useState("");
  const [valorMoeda, setValorMoeda] = useState(null);
  const [convertido, setConvertido] = useState(0);
  

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

  async function converter(){
    const resultado = await api.get(`all/${moedaSelecionada}-BRL`)
    console.log(resultado.data[moedaSelecionada].ask)
    console.log(moedaBase)

    let conversao = (resultado.data[moedaSelecionada].ask) * parseFloat(moedaBase)
    console.log(conversao)

    setValorMoeda(moedaBase)
    setConvertido(`${conversao.toLocaleString("pt-BR", {style:'currency', currency:"BRL"})}`)

    Keyboard.dismiss();
    setMoedaBase("");
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
          <Text style={styles.texto}>
            ${valorMoeda}
          </Text>
          <Text style={styles.texto2}>
            Corresponde a
          </Text>
          <Text style={styles.texto}>
          ${convertido}
          </Text>
         


</View>

 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e', // Fundo moderno e escuro
    alignItems: 'center',
    paddingVertical: 30,
  },

  card: {
    alignItems: 'center',
    backgroundColor: '#16213E', // Tom azul elegante
    marginTop: 40,
    width: '85%',
    height: 330,
    borderRadius: 20, // Bordas extremamente suaves para modernidade
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)', // Borda levemente transparente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },

  titulo1: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f3f3', // Cor vibrante para contraste
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  titulo2: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f3f3',
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  input: {
    width: '90%',
    height: 50,
    borderColor: 'rgba(255, 255, 255, 0.4)', // Bordas suaves e modernas
    borderWidth: 1.5,
    borderRadius: 12,
    paddingLeft: 15,
    marginTop: 20,
    backgroundColor: '#0f3460', // Azul escuro para harmonizar com o design
    color: '#fff', // Texto branco para maior legibilidade
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },

  btn: {
    padding: 15,
    backgroundColor: '#e94560',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30, // Design circular para aparência moderna
    alignSelf: 'center',
    marginTop: 20,
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
    alignItems: 'center',
    backgroundColor: '#0f3460',
    marginTop: 30,
    width: '85%',
    height: 220,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1.5,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },

  texto: {
    padding: 10,
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },

  texto2: {
    padding: 10,
    fontSize: 16,
    color: '#dcdde1', // Texto suave com bom contraste
    textAlign: 'center',
  },
});
