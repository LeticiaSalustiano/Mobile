import { use, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './src/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const[email, setEmail] = useState("")
  const[senha, setSenha] = useState("")
  const[hidePass, setHidePass] = useState(true)

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
<View style={styles.inputContainer}>
  <TextInput 
    style={styles.input} 
    placeholder="Digite sua senha..." 
    value={senha} 
    onChangeText={(texto) => setSenha(texto)}
    secureTextEntry={hidePass}
  />
  
  <TouchableOpacity 
    onPress={() => setHidePass(!hidePass)}
    style={styles.iconContainer}>
    <Ionicons name={hidePass ? 'eye' : 'eye-off'} size={24} color="black" />
  </TouchableOpacity>
</View>

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
 inputContainer: {
    width: '92%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginLeft: 15,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
  },
  iconContainer: {
    padding: 4, 
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
