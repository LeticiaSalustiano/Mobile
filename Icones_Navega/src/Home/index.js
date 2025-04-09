/*import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {

    const navegacao = useNavigation();
    const data = new Date();
    const dataFormatada = data.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
 
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.titulo}>Bem-vindo ao Portal de Notícias</Text>
  
        <Text style={styles.subtitulo}>Opções:</Text>
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navegacao.navigate('Noticia')}>
          <Text style={styles.cardText}>Últimas Notícias</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navegacao.navigate('Contato')}>
          <Text style={styles.cardText}>Entre em Contato</Text>
        </TouchableOpacity>
  
        <View style={styles.destaques}>
          <Text style={styles.subtitulo}>Destaques do Dia:</Text>
          <View style={styles.card2}>
            <Text style={styles.cardText}>🚀 Economia cresce 2% no último trimestre!</Text>
          </View>
          <View style={styles.card2}>
            <Text style={styles.cardText}>⚽ Time X vence clássico e avança na tabela!</Text>
          </View>
          <View style={styles.card2}>
            <Text style={styles.cardText}>🎥 Novo filme Y quebra recordes de bilheteria!</Text>
          </View>
        </View>

        <Text style={styles.data}>{dataFormatada}</Text>
      </ScrollView>
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
    subtitulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#555',
      marginVertical: 10,
    },
    card: {
      backgroundColor: '#4B0082',
      padding: 15,
      borderRadius: 8,
      marginBottom: 15,
      alignItems: 'center',
    },
    card2: {
      backgroundColor: 'gray',
      padding: 15,
      borderRadius: 8,
      marginBottom: 15,
      alignItems: 'center',
    },
    cardText: {
      fontSize: 16,
      color: '#FFF',
      fontWeight: 'bold',
    },
    destaques: {
      marginTop: 20,
    },
    data: {
      alignSelf: 'center',
      marginTop: '12%',
    },
  });*/

  //Parte 2

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navegacao = useNavigation();

  function chamarSaibaMais(){
    navegacao.navigate('SaibaMais')
  }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Home</Text>
         <Button
         title='Ir para Saiba Mais'
         onPress={chamarSaibaMais}></Button>
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
  