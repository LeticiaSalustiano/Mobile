import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { doc, onSnapshot, collection, addDoc, updateDoc } from 'firebase/firestore';

import { db, auth } from './firebaseConnection';
import { UserList } from './users';
import { signOut } from 'firebase/auth';

// Aula 23 - Banco
export default function FormUsers() {

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("")
  const [cargo, setCargo] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing]  = useState('');
  const[authUser, setAuthUser] = useState(null);


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
    alert('Preencha todos os campos!');
    return;
  }

  else {
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

    alert("Dados registrados com sucesso!");
  }
}

   function editUser(data){
    //console.log(data);
    setNome(data.nome) 
    setIdade(data.idade)
    setCargo(data.cargo)
    setIsEditing(data.id)
    setMostrarFormulario(true)
   }

   async function editarDados() {
    const docRef = doc(db, "users", isEditing)
    await updateDoc(docRef,{
      nome: nome,
      idade: idade,
      cargo: cargo
    })
    setIsEditing("")
    setNome("")
    setCargo("")
    setIdade("")
   }

   async function logOutUser() {
    try {
      await signOut(auth);
      setAuthUser(null);
      alert("Logout successful!");
    } catch (error) {
      alert("Failed to logout: " + error.message);
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
           
           {isEditing !== '' ? (
            <TouchableOpacity 
              style={styles.btn} 
              onPress={editarDados}
              disabled={!nome || !idade || !cargo}>

              <Text style={styles.textBtn}>Editar</Text>

            </TouchableOpacity>
           ):(
            <TouchableOpacity 
              style={styles.btn} 
              onPress={registraDados}
              disabled={!nome || !idade || !cargo}>

              <Text style={styles.textBtn}>Adicionar</Text>

            </TouchableOpacity>
           )}
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
        renderItem={({ item }) => <UserList data={item} editar={(item)=> editUser(item)}/>} 
      > 
      </FlatList>

      <TouchableOpacity 
        style={styles.btnSair} 
        onPress={logOutUser}>
          <Text style={styles.textSair}>Sair</Text>
      </TouchableOpacity>
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
  btnSair: {
    backgroundColor: 'red',
    margin: 14,
    padding: 8,
    alignSelf: 'flex-start',
    borderRadius: 4,
    width: 150,
    height: 40,
  },
  textSair:{
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
});
