import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Detalhes() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Pagina Detalhes</Text>       
      </View>
        
    );
}

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
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
