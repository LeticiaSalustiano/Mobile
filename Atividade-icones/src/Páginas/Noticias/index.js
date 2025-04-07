import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Noticias() {
  const navegacao = useNavigation();

  return (
    <View style={styles.container}>
      <Button 
        title="Ir para Contato" 
        onPress={() => navegacao.navigate('Contato')} 
      />
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
