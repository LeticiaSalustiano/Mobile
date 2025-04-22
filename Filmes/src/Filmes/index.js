import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Detalhes from '../Detalhes';

export default function Filmes({ data }) {

 const [modalVisibilidade, setModalVisibilidade] = useState(false);

  return (
<View>
    <View style={styles.card}>
      <Text style={styles.title}>{data.nome}</Text>
      <Image 
      source={{uri: data.foto}}
      style={styles.imagem}
      ></Image>
    </View>
    <View style={styles.areaBotao}>
        <TouchableOpacity style={styles.botao} onPress={()=>setModalVisibilidade(true)}>
            <Text style={styles.botaoTexto}>Ver mais</Text>
        </TouchableOpacity>
    </View>
  <View>
      <Modal visible={modalVisibilidade} animationType='slide' transparent={true}>
         <Detalhes filme={data} fecharModal={()=>setModalVisibilidade(false)}></Detalhes>
      </Modal>
  </View>
</View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 5,
    elevation: 2,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
  },

  imagem: {
    width: 350, 
    height: 200, 
    borderRadius: 10,
    zIndex: 2,
  },

  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -75,
    marginBottom: 15,
  },

  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    padding: 3,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
