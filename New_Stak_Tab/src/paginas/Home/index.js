import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navegacao = useNavigation();

  function chamaDetalhe(){
    navegacao.navigate('Detalhes')
 
  }

    return (
      <View style={styles.container}>
        <TextInput placeholder='Digite seu nome'></TextInput>
        <Text style={styles.titulo}>Home</Text>
         <Button
         title='Ir para Detalhes'
         onPress={chamaDetalhe}></Button>
         <Button
         title='Abrir Drawer'
         onPress={()=> navegacao.openDrawer()}/>
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
  