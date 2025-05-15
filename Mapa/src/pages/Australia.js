import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Australia() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Home')}>
         <Ionicons name="arrow-back" size={28} color="#002868" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Explorando a Austrália 🇦🇺</Text>

      {/* Mapa */}
      <View style={styles.mapaContainer}>
        <MapView
          style={styles.mapa}
          initialRegion={{
            latitude: -33.8688, 
            longitude: 151.2093,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> 
      </View>

      {/* Coordenadas */}
      <Text style={styles.coords}>
        🌍 Latitude: -33.8688 | 🗺️ Longitude: 151.2093
      </Text>

    <View style={styles.juntar}>
      <Text style={styles.info}>
        A Austrália é famosa por suas paisagens icônicas, vida selvagem única e praias paradisíacas!
      </Text>

      <Image 
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXncWvYcvwsAgksHjZJk4KVgQe71CARuVWtA&s" }} 
        style={styles.bandeira}
      />
    </View>

    <View style={styles.curiosidades}>
        <Text style={styles.curiosidade}>🦘 Curiosidade: Existem mais cangurus do que pessoas na Austrália!</Text>
        <Text style={styles.curiosidade}>🏝️ Curiosidade: A Grande Barreira de Coral é o maior sistema de recifes do mundo!</Text>
        <Text style={styles.curiosidade}>🎭 Curiosidade: O icônico Sydney Opera House levou 14 anos para ser construído!</Text>
      </View>

      {/* Botão para explorar mais */}
      <TouchableOpacity style={styles.botaoExplorar}>
        <Text style={styles.botaoTexto}>Descubra mais sobre a Austrália</Text>
      </TouchableOpacity> 
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', 
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
    color: '#002868',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 30,
  },
  bandeira: {
    width: 120,
    height: 100,
    borderRadius: 8,
    marginBottom: 15,
    marginLeft: 50,
  },
  mapaContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 10,
    overflow: 'hidden',
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
    marginLeft: -25,
  },
  curiosidade: {
    fontSize: 16,
    color: '#002868',
    fontStyle: 'italic',
    marginTop: 10,
  },
  curiosidades: {
    marginTop: -15,
    marginLeft: 10,
  },
  coords: {
    fontSize: 13,
    color: '#777',
    marginTop: 10,
  },
  botaoExplorar: {
    marginTop: 30,
    backgroundColor: '#002868',
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
