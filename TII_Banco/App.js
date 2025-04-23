import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native';
import { doc, onSnapshot, collection, addDoc, getDoc } from 'firebase/firestore';
import { db } from './src/firebaseConnection';
import { UserList } from './src/users';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

// Aula 23 - Banco
export default function Fire() {
  const[nome, setNome] = useState("");
  const[idade, setIdade] = useState("")
  const[cargo, setCargo] = useState("");
  const[mostrarFormulario, setMostrarFormulario] = useState(true);
  const [users, setUsers] = useState([])

  useEffect(()=> {
    async function getDados() {
      //onSnapshot(doc(db, "users"), (doc)=> {
       // setNome(doc.data()?.nome)
       // setIdade(doc.data()?.idade)
       // setCargo(doc.data()?.cargo)
      //})

      const useRef = collection(db, "users");
      console.log()

      onSnapshot(useRef, (snapshot)=> {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            idade: doc.data().idade,
            cargo: doc.data().cargo,
          })
          
        });
        setUsers(lista);
      })
    }
    getDados();
  }, []);

  // Função para registrar os dados e limpar os campos
async function registraDados() {
  // Verificar se estão preenchidos
  if (!nome || !idade || !cargo) {
    Alert.alert('Preencha todos os campos!');
    return;
  }

  try {
    // Adicionar os dados no banco
    await addDoc(collection(db, "users"), {
      nome: nome,
      idade: idade,
      cargo: cargo,
    });

    // Limpar os campos do input
    setNome('');
    setIdade('');
    setCargo('');

    Alert.alert("Dados registrados com sucesso!");
  } catch (error) {
    console.error("Erro ao registrar os dados:", error);
    Alert.alert("Erro ao registrar os dados. Tente novamente!");
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>FireBase</Text>
      {mostrarFormulario && (
        <View>
          <View>
            <Text style={styles.txt}>Nome</Text>
            <TextInput
              value={nome}
              onChangeText={(text) => setNome(text)}
              placeholder="Digite seu nome"
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.txt}>Idade</Text>
            <TextInput
              value={idade}
              onChangeText={(text) => setIdade(text)}
              placeholder="Digite sua idade"
              keyboardType='numeric'
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.txt}>Cargo</Text>
            <TextInput
              value={cargo}
              onChangeText={(text) => setCargo(text)}
              placeholder="Digite seu cargo"
              style={styles.input}
            />
          </View>
            <TouchableOpacity 
              style={styles.btn} 
              onPress={registraDados}
              disabled={!nome || !idade || !cargo}>

              <Text style={styles.textBtn}>Adicionar</Text>

            </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity 
        onPress={()=> setMostrarFormulario(!mostrarFormulario)}>
      <Text  
        style={styles.texto}>
          {mostrarFormulario ? 'Esconder Formulário' : 'Mostrar Formulário'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.txt2}>Usuários: </Text>

      <FlatList 
        data={users} 
        keyExtractor={(item)=> String(item.id)} 
        renderItem={({ item }) => <UserList data={item} />} 
      > 
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titulo: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
    marginTop: 100,
 },
 txt: {
  alignSelf: 'flex-start',
  marginLeft: 20,
  fontWeight: 'bold',
  fontSize: 19,
},
  input: {
    marginLeft: 20,
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    margin: 10,
    backgroundColor: '#f5f5f5',
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
    alignSelf: 'center',
    color: 'red',
    marginTop: -5,
    fontWeight: 'bold',
    margin: 10,
  },
  txt2: {
    margin: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 19,
  },
});
