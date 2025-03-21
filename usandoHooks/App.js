import React, {useState, useEffect, useMemo, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('Letícia');
  const [entrada, setEntrada] = useState('');
  const nomeNovo = useRef(null);

  // Recupera o nome salvo no AsyncStorage ao iniciar o app
  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem('nome');
      if (nomeStorage !== null) {
        setNome(nomeStorage);
      }
    }
    getStorage();
  }, []);

  // Salva o nome no AsyncStorage sempre que ele for alterado
  useEffect(() => {
    async function saveStorage() {
      await AsyncStorage.setItem('nome', nome);
    }
    saveStorage();
  }, [nome]);

   const letras = useMemo(()=>
    {console.log('Mudou');
    return nome.length
  },[nome])

  // Função para adicionar o nome
  function novoNome() {
    nomeNovo.current.focus();
  }

  // Função para alterar o nome
  function alteraNome() {
    if (entrada.trim() !== "") {
      setNome(entrada); // Atualiza o nome
      setEntrada('');   // Limpa o campo de entrada
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} ref={nomeNovo}
        placeholder='Seu nome...'
        value={entrada}
        onChangeText={(texto) => setEntrada(texto)}
      />
      <TouchableOpacity style={styles.btn} onPress={alteraNome}>
        <Text style={styles.btnTexto}>Alterar nome</Text>
      </TouchableOpacity>
      <Text style={styles.texto}>{nome}</Text>
      <Text>{nome} tem {letras} letras</Text>

       <TouchableOpacity style={styles.btn} >
        <Text style={styles.btnTexto}>Novo nome</Text>
      </TouchableOpacity>

      <TextInput 
        style={styles.input}
        placeholder='Teste'
        value={entrada}
        onChangeText={(texto) => setEntrada(texto)}
      />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 55,
  },

  texto: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
  },

  input: {
    alignSelf: 'center',
    width: 370,
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },

  btn: {
    backgroundColor: '#222',
  },

  btnTexto:{
    color: '#FFF',
  },
});

