import {  useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './src/firebaseConnection';
import { Ionicons } from '@expo/vector-icons';
import FormUsers from './src/FormUsers';

export default function App() {

  const[email, setEmail] = useState("")
  const[senha, setSenha] = useState("")
  const[hidePass, setHidePass] = useState(true)
  const[authUser, setAuthUser] = useState(null)
  const[loading, setLoading] = useState(true)

  useEffect(()=> {
    const unsub = onAuthStateChanged(auth, (user)=>{
      if(user){
        setAuthUser({
          email: user.email,
          uid: user.uid
        })
        return;
      }
    })
    setAuthUser(null);
    setLoading(false)
  }, [])

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
      setAuthUser({
        email: user.user.email,
        uid: user.user.uid
      })
    })
    .catch((err) => {
      console.log(err)
    })
  
  // Limpar os campos do input
  setEmail('');
  setSenha('');
}

async function logOutUser() {
  await signOut(auth)
  setAuthUser(null);
 }

   if(authUser){
    return(
      <View style={styles.container}>
        <FormUsers></FormUsers>
      </View>
    )
   }

  return (
    <View style={styles.container}>
      {loading && 
      <Text
        style={{fontSize: 20, color: '#000', margin: 8}}>
      Carregando Informações...</Text>}

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


     <TouchableOpacity 
     style={[styles.btn, {backgroundColor: 'red'}]} 
     onPress={logOutUser}>
      <Text style={styles.txtBtn}>Sair</Text>
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  texto: {
    padding: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  txt: {
    fontWeight: 'bold',
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
    marginTop: 10,
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
    width: 370,
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtBtn: {
    color: '#fff', 
  }, 
})
