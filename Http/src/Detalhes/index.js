import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export default function Detalhes(props) {

  return (
    <View style={styles.container}>
        <View style={styles.modalcontainer}>
            <TouchableOpacity style={styles.btnfechar}>
                <Text style={styles.textofechar}>Fechar</Text>
            </TouchableOpacity>
            <Text style={styles.textotitulo}>Título</Text>
            <Text style={styles.textosinopse}>Sínopse: </Text>
            <Text style={styles.textodetalhes}>Texto</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRigth: 10,
  },
  
  modalcontainer: {
    width: '90%',
    height: '80%',
    backgroundColor: '#191919',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,

  },

  btnfechar: {
    backgroundColor: '#E53935',
    padding: 10,
    borderRadius: 5,
    margin: 6,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    //alignSelf: 'flex-end',
  },

  textofechar: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },

  textotitulo: {
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },

  textosinopse: {
    fontSize: 19,
    color: '#B0B0B0',
    marginBottom: 10,
    marginLeft: 15,
  },

  textodetalhes: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 15,
    marginBottom: 10,
  },
  
});