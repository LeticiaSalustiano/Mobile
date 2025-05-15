import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Finlandia() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Home')}>
         <Ionicons name="arrow-back" size={28} color="#003580" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Explorando a Finlândia 🇫🇮</Text>

      {/* Mapa */}
      <View style={styles.mapaContainer}>
        <MapView
            style={styles.mapa}
            mapType='hybrid'
            showsTraffic={true}
            zoomEnabled={true}
          initialRegion={{
            latitude: 60.1699, 
            longitude: 24.9384,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        
          }}
        /> 
      </View>

      {/* Coordenadas */}
      <Text style={styles.coords}>
        🌍 Latitude: 60.1699 | 🗺️ Longitude: 24.9384
      </Text>

    <View style={styles.juntar}>
      <Text style={styles.info}>
        A Finlândia é conhecida por suas paisagens geladas, auroras boreais mágicas e pelo famoso Papai Noel!
      </Text>

      <Image 
        source={{ uri: "https://s4.static.brasilescola.uol.com.br/be/2021/10/bandeira-da-finlandia.jpg" }} 
        style={styles.bandeira}
      />
    </View>

    <View style={styles.curiosidades}>
        <Text style={styles.curiosidade}>❄️ Curiosidade: A Finlândia tem cerca de 188 mil lagos!</Text>
        <Text style={styles.curiosidade}>🔥 Curiosidade: Há mais saunas do que carros no país!</Text>
        <Text style={styles.curiosidade}>🦌 Curiosidade: As renas são parte essencial da cultura finlandesa!</Text>
      </View>

      {/* Botão para explorar mais */}
      <TouchableOpacity style={styles.botaoExplorar}>
        <Text style={styles.botaoTexto}>Descubra mais sobre a Finlândia</Text>
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
    left: 18,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#003580',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 15,
    marginLeft: 28,
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
    color: '#003580',
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
    backgroundColor: '#003580',
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
