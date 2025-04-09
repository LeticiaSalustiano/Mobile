import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navegacao = useNavigation();

  function chamarSobre(){
    navegacao.navigate('Sobre')
  }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Home</Text>
         <Button
         title='Ir para Sobre'
         onPress={chamarSobre}></Button>
      </View>
        
    );
}

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginBottom: 20,
    },
});
  