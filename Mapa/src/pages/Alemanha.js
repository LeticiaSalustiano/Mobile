import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Alemanha() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate('Home')}>
         <Ionicons name="arrow-back" size={28} color="#d00" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Explorando a Alemanha 🇩🇪</Text>

      {/* Mapa */}
      <View style={styles.mapaContainer}>
        <MapView
          style={styles.mapa}
            mapType='hybrid'
            showsTraffic={true}
            zoomEnabled={true}
          initialRegion={{
            latitude: 52.5200, 
            longitude: 13.4050,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} 
          />
          
        
      </View>

      {/* Coordenadas */}
      <Text style={styles.coords}>
        🌍 Latitude: 52.5200 | 🗺️ Longitude: 13.4050
      </Text>

    <View style={styles.juntar}>
      <Text style={styles.info}>
        A Alemanha é famosa por sua história rica, arquitetura impressionante e festivais tradicionais, como a Oktoberfest!
      </Text>

      <Image 
        source={{ uri: "https://todabandeira.com.br/wp-content/uploads/2023/08/bandeira-da-alemanha.jpg" }} 
        style={styles.bandeira}
      />
    </View>

    <View style={styles.curiosidades}>
        <Text style={styles.curiosidade}>🍻 Curiosidade: A Alemanha tem mais de 1.500 tipos de cerveja!</Text>
        <Text style={styles.curiosidade}>🏰 Curiosidade: O país tem mais de 20.000 castelos!</Text>
        <Text style={styles.curiosidade}>🚗 Curiosidade: As autobahns alemãs têm trechos sem limite de velocidade!</Text>
      </View>

      {/* Botão para explorar mais */}
      <TouchableOpacity style={styles.botaoExplorar}>
        <Text style={styles.botaoTexto}>Descubra mais sobre a Alemanha</Text>
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
    fontSize: 26,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 16,
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
    color: '#d00',
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
    backgroundColor: '#d00',
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
