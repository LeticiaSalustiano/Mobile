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
    if (mesa.includes(nome)) {
      Alert.alert('Essa pessoa já está na mesa!');
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

  const isTableFull = mesa.length >= maxima;

  const getCirclePosition = (index) => {
    // Define as posições dos círculos ao redor da mesa
    const positions = [
      { top: 10, left: 90 },
      { top: 34, left: 17 },
      { top: 34, right: 17 },
      { top: 230, right: 8 },
      { bottom: -53, left: 15 },
      { bottom: -78, right: 90 },
      { bottom: 12, left: -30 },
      { bottom: 10, right: -30 },
      { top: 94, left: -24 },
      { top: 94, right: -24 },
    ];
    return positions[index] || {};
  };

  return (
    <FlatList
      style={styles.container}
      data={mesa}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <View>
          <Text style={styles.nome}>Gerenciador de Mesa</Text>
          <View style={styles.imageWrapper}>
            {/* Imagem da mesa */}
            <Image style={styles.img} source={require('./src/10Pessoas.png')} />
            {/* Renderização dos círculos verdes */}
            {mesa.map((_, index) => (
              <View key={index} style={[styles.greenCircle, getCirclePosition(index)]} />
            ))}
          </View>
          <View style={styles.card}>
            <Text style={styles.texto}>Adicionar pessoas:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome"
              value={nome}
              onChangeText={setNome}
            />
            <TouchableOpacity
              style={[styles.btn, isTableFull && { backgroundColor: 'grey' }]}
              onPress={adicionar}
              disabled={isTableFull}
            >
              <Text style={styles.txtBtn}>{isTableFull ? 'Mesa cheia' : 'Adicionar'}</Text>
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
            <Text style={styles.texto3}>Ninguém foi adicionado ainda.</Text>
          ) : null}
          <Text style={styles.footer}>
            Total: {mesa.length}/{maxima}
          </Text>
        </View>
      }
    />
  );
}

const COLORS = {
  primary: '#4B0082',
  secondary: '#4CAF50',
  danger: '#FF6347',
  background: '#f5f5ff',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 10,
  },
  
  card: {
    backgroundColor: '#ffffff',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 117,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    margin: 30,
  },

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.primary,
  },

  imageWrapper: {
    alignSelf: 'center',
    position: 'relative',
    width: 200,
    height: 200,
  },

  img: {
    alignSelf: 'center',
    margin: 50,
    width: 200,
    height: 200,
    borderRadius: 100, // Circular
  },

  greenCircle: {
    marginTop: 10,
    width: 20,
    height: 20,
    backgroundColor: 'green',
    borderRadius: 10, // Circular
    position: 'absolute', // Sobrepõe a imagem
  },

  texto: {
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'flex-start',
    color: COLORS.primary,
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
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-end',
    marginTop: 20,
  },

  btn2: {
    backgroundColor: COLORS.danger,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'flex-end', // Alinha à direita
    marginLeft: 130,
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
    marginTop: -2,
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
    marginTop: 20,
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
    alignSelf: 'center',
    color: COLORS.primary,
  },

  ultimo: {
    marginTop: 20,
    fontWeight: 'bold',
  },

  footer: {
    marginTop: 20,
    fontSize: 16,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  texto3: {
    marginTop: 15,
    alignSelf: 'center',
  },
});






