import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navegacao = useNavigation();

  return (
    <View style={styles.container}> 
      <Button 
        title="Ir para Notícias"
        onPress={() => navegacao.navigate('Notícia')}
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
