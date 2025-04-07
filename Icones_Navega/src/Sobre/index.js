import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {

    const navegacao = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Button title='Ir para Contato'
      onPress={()=> navegacao.navigate('Contato')}
      ></Button>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});