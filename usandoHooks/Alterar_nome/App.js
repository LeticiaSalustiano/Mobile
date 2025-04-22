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
    padding: 20,
    backgroundColor: '#F5F5F5', // Fundo mais agradável
  },

  texto: {
    color: '#333', // Texto escuro, mas suave
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35,
    marginVertical: 20, // Espaçamento em torno do texto
  },

  input: {
    alignSelf: 'center',
    width: '90%',
    height: 45,
    borderColor: '#6200EE', // Borda com cor mais vibrante
    backgroundColor: '#FFF',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 15,
    borderRadius: 8, // Bordas mais arredondadas
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Leve sombra
    marginTop: 20,
  },

  btn: {
    backgroundColor: '#6200EE', // Cor roxa vibrante
    padding: 12,
    borderRadius: 8,
    alignItems: 'center', // Centralizar o texto no botão
    marginVertical: 10,
  },

  btnTexto: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
