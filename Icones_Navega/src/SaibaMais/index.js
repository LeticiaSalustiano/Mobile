/*import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {

    const navegacao = useNavigation();
    const noticias = [
        {
          categoria: 'Política',
          titulo: 'Novo projeto de lei aprovado',
          resumo: 'Parlamento aprova medidas para fomentar o crescimento sustentável da economia.',
        },
        {
          categoria: 'Saúde',
          titulo: 'Avanços na medicina',
          resumo: 'Cientistas desenvolvem um tratamento inovador para doenças autoimunes.',
        },
        {
          categoria: 'Meio Ambiente',
          titulo: 'Energia renovável em alta',
          resumo: 'Investimentos em energia solar e eólica crescem 20% neste ano.',
        },
        {
          categoria: 'Educação',
          titulo: 'Novas tecnologias na sala de aula',
          resumo: 'Escolas adotam inteligência artificial para personalizar o ensino.',
        },
        {
          categoria: 'Turismo',
          titulo: 'Destinos mais visitados',
          resumo: 'Ranking revela os lugares mais procurados para férias em 2025.',
        },
        {
          categoria: 'Cultura',
          titulo: 'Exposição internacional chega ao país',
          resumo: 'Museu recebe mostra de arte contemporânea com obras de renome mundial.',
        },
        {
          categoria: 'Ciência',
          titulo: 'Missão espacial histórica',
          resumo: 'Astronautas iniciam exploração de um novo planeta semelhante à Terra.',
        },
      ];      

  return (
    <ScrollView style={styles.container}>
    <Text style={styles.titulo}>Mais Notícias e Informações</Text>
    {noticias.map((noticia, index) => (
      <View key={index} style={styles.card}>
        <Text style={styles.categoria}>{noticia.categoria}</Text>
        <Text style={styles.tituloNoticia}>{noticia.titulo}</Text>
        <Text style={styles.resumo}>{noticia.resumo}</Text> 
      </View>
    ))}   
    <View style={styles.areaTxt}>
    <Text style={styles.data}>Para mais informações entre no site: www.brasilinformations-Br.com.br</Text>
    </View>
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
        marginTop: 10,
      },
      card: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      },
      categoria: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
      },
      tituloNoticia: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1E90FF',
        marginBottom: 5,
      },
      resumo: {
        fontSize: 16,
        color: '#666',
      },
      card2: {
        backgroundColor: '#4B0082',
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
      areaTxt: {
       margin: 23,
       alignItems: 'center',
      },
      data: {
        fontSize: 13,
      },
});*/

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navegacao = useNavigation();

  function chamarSobre(){
    navegacao.navigate('')
  }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Saiba mais</Text>
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

