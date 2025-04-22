import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { getDoc, doc, onSnapshot, setDoc, collection, addDoc } from 'firebase/firestore';
import { db } from './src/firebaseConnection';

export default function Fire() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cargo, setCargo] = useState(""); 
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  useEffect(() => {
      async function getDados() {
        const usersRef = collection(db, "users");
    }
      getDados();
  }, []);
      
        async function registraDados() {
          if (!nome || !idade || !cargo) {
            console.log("Preencha todos os campos antes de registrar!");
            return;
          }
      
          try {
            await addDoc(collection(db, "users"), { nome, idade, cargo });
            console.log("Sucesso ao cadastrar");
            setNome("");
            setIdade("");
            setCargo("");
          } catch (error) {
            console.error("Erro ao adicionar documento:", error);
          }
        }
      
        return (
          <View style={styles.container}>
            <Text style={styles.titulo}>Firebase</Text>
      
            {mostrarFormulario && (
              <>
                <Text style={styles.txt}>Cargo:</Text>
                <TextInput style={styles.input} placeholder='Digite seu cargo' value={cargo} onChangeText={setCargo} />
                <Text style={styles.txt}>Nome:</Text>
                <TextInput style={styles.input} placeholder='Digite seu nome' value={nome} onChangeText={setNome} />
                <Text style={styles.txt}>Idade:</Text>
                <TextInput style={styles.input} placeholder='Digite sua idade' value={idade} onChangeText={setIdade} />
                <TouchableOpacity style={styles.btn} onPress={registraDados}>
                  <Text style={styles.textBtn}>Adicionar</Text>
                </TouchableOpacity>
              </>
            )}
      
            <TouchableOpacity onPress={() => setMostrarFormulario(!mostrarFormulario)}>
              <Text style={styles.texto}>{mostrarFormulario ? "Esconder Formulário" : "Mostrar Formulário"}</Text>
            </TouchableOpacity>
          </View>
        );
      }
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
     fontWeight: 'bold',
     fontSize: 25,
     margin: 10,
  },
  txt: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 19,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    margin: 10,
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
    color: '#111',
  },
  btn: {
    width: 250,
    height: 40,
    margin: 20,
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 3,
  },
  textBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    padding: 8,
    color: '#fff'
  },
  texto: {
    marginTop: -10,
    fontWeight: 'bold'
  }
});
