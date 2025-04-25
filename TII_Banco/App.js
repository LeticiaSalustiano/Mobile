import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './src/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function App() {

  const[email, setEmail] = useState("")
  const[senha, setSenha] = useState("")

  const[authUser, setAuthUser] = useState(null)

  async function criarUser(){
    const user = await createUserWithEmailAndPassword(auth, email, senha)
    console.log(user);
  }


  //async function loginUser(){
  // const user = await signInWithEmailAndPassword(auth, email, senha)
  // console.log(user);
  // console.log("Usuário Logado");
  //}

   function loginUser(){
    signInWithEmailAndPassword(auth, email, senha).then((user)=> {
      console.log(user);
      console.log("Usuário Logado");
    })
    .catch((err) => {console.log(err)})
  
  }

  return (
    <View style={styles.container}>
      <Text>Usuário Logado: </Text>

     {/*<FormUsers></FormUsers>*/}

     <Text style={styles.txt}>Email: </Text>
     <TextInput 
     style={styles.login} 
     placeholder='Digite seu email...' 
     value={email}
     onChangeText={(texto)=> setEmail(texto)}
/>

     <Text style={styles.txt}>Senha: </Text>
     <TextInput 
     style={styles.login} 
     placeholder='Digite sua senha...' 
     value={senha}
     onChangeText={(texto)=> setSenha(texto)}
     secureTextEntry={true}
     />

     <TouchableOpacity 
     style={styles.btn} 
     onPress={criarUser}>
      <Text style={styles.txtBtn}>Criar conta</Text>
     </TouchableOpacity>
     <TouchableOpacity 
     style={styles.btn} 
     onPress={loginUser}>
      <Text style={styles.txtBtn}>Login</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  txt: {
    marginLeft: 15,
    fontSize: 18,
    color: '#000',
  },
  login: {
    borderWidth: 1,
    margin: 15,
  },
  btn: {
     backgroundColor: '#000',
     margin: 15,
     padding: 8,
     width: 200,
     alignItems: 'center',
     alignSelf: 'center',
  },
  txtBtn: {
     color: '#fff',
     
  },
})
