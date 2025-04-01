import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native';

export default function App() {
  const [mesa, setMesa] = useState([]);
  const [nome, setNome] = useState("");
  const maxima = 10;

  const adicionar = () => {
    if (!nome.trim()) {
      Alert.alert('Nome inválido!');
      return;
    }
    if (mesa.length < maxima) {
      setMesa([...mesa, nome]);
      setNome("");
    } else {
      Alert.alert('Mesa lotada!');
    }
  };

  const remover = (nome) => {
    setMesa(mesa.filter((pessoa) => pessoa !== nome));
  };

  return (
    <FlatList
      style={styles.container}
      data={mesa}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <View>
          <Text style={styles.nome}>Gerenciador de Mesa</Text>
          <Image
             style={styles.img}
          source={
             mesa.length === 2
              ? require('./src/2Pessoas.png')
           : mesa.length === 3
             ? require('./src/3Pessoas.png')
           : require('./src/Round Table.png') // Imagem padrão para outros casos
  }
/>

          <View style={styles.card}>
            <Text style={styles.texto}>Adicionar pessoas:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome"
              value={nome}
              onChangeText={setNome}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={adicionar}
              disabled={mesa.length >= maxima}
            >
              <Text style={styles.txtBtn}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.txt}>{item}</Text>
          <TouchableOpacity style={styles.btn2} onPress={() => remover(item)}>
            <Text style={styles.txtBtn}>Remover</Text>
          </TouchableOpacity>
        </View>
      )}
      ListFooterComponent={
        <View style={styles.lista}>
          <Text style={styles.texto2}>Adicionados:</Text>
          {mesa.length === 0 ? (
            <Text>Ninguém foi adicionado ainda.</Text>
          ) : (
            mesa.map((item, index) => (
              <Text key={index} style={styles.ultimo}>
                {item}
              </Text>
            ))
          )}
          <Text style={styles.footer}>
            Total: {mesa.length}/{maxima}
          </Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5ff',
    padding: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20,
    textAlign: 'center',
    color: '#4B0082',
  },
  img: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    margin: 20,
  },
  texto: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'flex-start',
    color: '#4B0082',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#f0f0ff',
    paddingLeft: 10,
    color: '#333',
  },
  btn: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  btn2: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'flex-end',
    marginLeft: 110,
  },

  txtBtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  txt: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
  },

  listItem: {
    width: 332,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 5,
    marginLeft: 20,
  },
  lista: {
    marginTop: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  texto2: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'flex-start',
    color: '#4B0082',
  },
  ultimo: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    fontSize: 16,
    color: '#4B0082',
    textAlign: 'center',
  },
});





