import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function App() {

  const navegacao = useNavigation();
  const noticias = [
    {
      categoria: 'Política',
      titulo: 'Reforma Tributária é aprovada no Congresso',
      resumo: 'A nova reforma promete simplificar impostos e atrair investimentos para o país.',
    },
    {
      categoria: 'Economia',
      titulo: 'Bolsa de Valores atinge recorde histórico',
      resumo: 'O índice Ibovespa superou os 130 mil pontos, impulsionado por empresas de tecnologia.',
    },
    {
      categoria: 'Esportes',
      titulo: 'Time blablabla vence campeonato nacional',
      resumo: 'Em uma partida emocionante, o Time X garantiu seu título com um gol nos acréscimos.',
    },
    {
      categoria: 'Entretenimento',
      titulo: 'Filme blablabla lidera bilheterias pela terceira semana',
      resumo: 'A aventura épica conquistou o público com efeitos visuais impressionantes.',
    },
    {
      categoria: 'Tecnologia',
      titulo: 'Lançamento do novo smartphone XRE impressiona',
      resumo: 'O aparelho traz inovações como câmera de 300 MP e bateria de longa duração.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Notícias</Text>
      {noticias.map((noticia, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.categoria}>{noticia.categoria}</Text>
          <Text style={styles.tituloNoticia}>{noticia.titulo}</Text>
          <Text style={styles.resumo}>{noticia.resumo}</Text>
         
        </View>
      ))}
      <TouchableOpacity 
          style={styles.card2} 
          onPress={() => navegacao.navigate('SaibaMais')}>
          <Text style={styles.cardText}>Saiba mais</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
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
});

