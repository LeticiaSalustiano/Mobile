import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { doc, onSnapshot, collection, addDoc } from 'firebase/firestore';
import { db } from './src/firebaseConnection';

// Aula 23 - Banco
export default function Fire() {
  const[nome, setNome] = useState("");
  const[idade, setIdade] = useState("")
  const[cargo, setCargo] = useState("");
  const[mostrarFormulario, setMostrarFormulario] = useState(true);

  useEffect(()=> {
    async function getDados() {
      onSnapshot(doc(db, "users"), (doc)=> {
        setNome(doc.data()?.nome)
        setIdade(doc.data()?.idade)
        setCargo(doc.data()?.cargo)
      })
    }
    getDados();
  }, []);

  // Função para registrar os dados e limpar os campos
  async function registraDados() {
    // Adicionar os dados no banco
    await addDoc(collection(db, "users"), {
      nome: nome,
      idade: idade,
      cargo: cargo
    });

    // Limpar os campos do input
    setNome('');
    setIdade('');
    setCargo('');
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>FireBase</Text>
      {mostrarFormulario && (
        <View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Nome</Text>
            <TextInput
              value={nome}
              onChangeText={(text) => setNome(text)}
              placeholder="Digite seu nome"
              style={styles.input}
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Idade</Text>
            <TextInput
              value={idade}
              onChangeText={(text) => setIdade(text)}
              placeholder="Digite sua idade"
              style={styles.input}
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Cargo</Text>
            <TextInput
              value={cargo}
              onChangeText={(text) => setCargo(text)}
              placeholder="Digite seu cargo"
              style={styles.input}
            />
          </View>
          <TouchableOpacity style={styles.botao} onPress={registraDados}>
            <Text style={{ color: '#FFF', fontSize: 18 }}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.botao} onPress={()=> setMostrarFormulario(!mostrarFormulario)}>
        <Text style={{ color: '#FFF', fontSize: 18 }}>
          {mostrarFormulario ? 'Esconder Formulário' : 'Mostrar Formulário'}
        </Text>
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
  botao: {
    width: 360,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  input: {
    width: 360,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
  }
});
