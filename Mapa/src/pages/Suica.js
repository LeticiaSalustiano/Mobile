import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Suica() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Home')}>
         <Ionicons name="arrow-back" size={28} color="#ff4500" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Explorando a Suíça 🇨🇭</Text>

      {/* Mapa */}
      <View style={styles.mapaContainer}>
        <MapView
          style={styles.mapa}
          initialRegion={{
            latitude: 46.94809, 
            longitude: 7.44744,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> 
      </View>

      {/* Coordenadas */}
      <Text style={styles.coords}>
        🌍 Latitude: 46.94809 | 🗺️ Longitude: 7.44744
      </Text>

    <View style={styles.juntar}>
      <Text style={styles.info}>
        A Suíça é famosa pelos seus Alpes deslumbrantes, chocolates irresistíveis e qualidade de vida excepcional.
      </Text>

      <Image 
        source={{ uri: "https://media.istockphoto.com/id/182790941/pt/foto/bandeira-da-su%C3%AD%C3%A7a.jpg?s=612x612&w=0&k=20&c=pSBiQsvf3bqDKRHlhD49FomckJZtNhTnWoAN77MBAKI=" }} 
        style={styles.bandeira}
      />
    </View>

    <View style={styles.curiosidades}>
        <Text style={styles.curiosidade}>🌍 Curiosidade: Sabia que na Suíça existem mais bancos do que dentistas?</Text>
        <Text style={styles.curiosidade}>🏔️ Curiosidade: O país tem 208 montanhas acima de 3.000 metros!</Text>
        <Text style={styles.curiosidade}>🔔 Curiosidade: Os sinos das vacas são tradição na Suíça!</Text>
      </View>

      {/* Botão para explorar mais */}
      <TouchableOpacity style={styles.botaoExplorar}>
        <Text style={styles.botaoTexto}>Descubra mais sobre a Suíça</Text>
      </TouchableOpacity> 
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Fundo elegante
    alignItems: 'center',
    padding: 20,
  },
  botaoVoltar: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 15,
  },
  bandeira: {
    width: 120,
    height: 100,
    borderRadius: 8,
    marginBottom: 15,
    marginLeft: 30,
  },
  mapaContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    overflow: 'hidden', // Evita sombras quebradas
  },
  mapa: {
    marginTop: 30,
    width: 350,
    height: 250,
    borderRadius: 10,
  },
  juntar: {
    flexDirection: 'row-reverse',
    padding: 30,
    marginTop: 15,
  },
  info: {
    textAlign: 'center',
    fontSize: 18,
    color: '#444',
    paddingHorizontal: 20,
    marginTop: 7,
    marginLeft: -16,
  },
  curiosidade: {
    fontSize: 16,
    color: '#ff4500',
    fontStyle: 'italic',
    marginTop: 10,
  },
  curiosidades: {
    marginTop: -15,
  },
  coords: {
    fontSize: 13,
    color: '#777',
    marginTop: 10,
  },
  botaoExplorar: {
    marginTop: 30,
    backgroundColor: '#ff4500',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

