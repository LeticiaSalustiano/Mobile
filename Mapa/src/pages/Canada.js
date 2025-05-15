import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Canada() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Home')}>
         <Ionicons name="arrow-back" size={28} color="#d52d2d" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Explorando o Canadá 🇨🇦</Text>

      {/* Mapa */}
      <View style={styles.mapaContainer}>
        <MapView
            mapType='hybrid'
            showsTraffic={true}
            zoomEnabled={true}
          style={styles.mapa}
          initialRegion={{
            latitude: 45.4215, 
            longitude: -75.6993,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> 
      </View>

      {/* Coordenadas */}
      <Text style={styles.coords}>
        🌍 Latitude: 45.4215 | 🗺️ Longitude: -75.6993
      </Text>

    <View style={styles.juntar}>
      <Text style={styles.info}>
        O Canadá é famoso por suas paisagens naturais impressionantes, esportes de inverno e sua cultura acolhedora.
      </Text>

      <Image 
        source={{ uri: "https://morareviajar.net/wp-content/uploads/2018/07/Bandeira-do-Canad%C3%A1.jpg" }} 
        style={styles.bandeira}
      />
    </View>

    <View style={styles.curiosidades}>
        <Text style={styles.curiosidade}>🍁 Curiosidade: O Canadá produz 85% do xarope de bordo do mundo!</Text>
        <Text style={styles.curiosidade}>🐻 Curiosidade: Você sabia que o urso polar é nativo de algumas regiões canadenses?</Text>
        <Text style={styles.curiosidade}>🏒 Curiosidade: O hóquei no gelo é paixão nacional!</Text>
      </View>

      {/* Botão para explorar mais */}
      <TouchableOpacity style={styles.botaoExplorar}>
        <Text style={styles.botaoTexto}>Descubra mais sobre o Canadá</Text>
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
    color: '#d52d2d',
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
    marginLeft: -16,
  },
  curiosidade: {
    fontSize: 16,
    color: '#d52d2d',
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
    backgroundColor: '#d52d2d',
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
