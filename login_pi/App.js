import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { db } from './src/firebaseConfig';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Faça seu cadastro</Text>
      <View style={{margin: 10}}>
        <Text style={{fontWeight: 'bold'}}>Email</Text>
        <TextInput style={styles.input} placeholder='Digite seu email'/>
      </View>
      <View style={{margin: 10}}>
        <Text style={{fontWeight: 'bold'}}>Senha</Text>
        <TextInput style={styles.input} placeholder='Digite seu senha'/>
      </View>
      <TouchableOpacity style={styles.botao} activeOpacity={0.7}>
        <Text style={{color: '#000', fontSize: 15}}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbeef9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 20
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#FFF'
  },
  botao: {
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#14c5ec',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
