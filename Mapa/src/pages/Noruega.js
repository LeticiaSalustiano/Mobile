import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Noruega() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botaoVoltar} onPress={() => navigation.navigate("Home")}>
        <Ionicons name="arrow-back" size={28} color="#D7152A" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Explorando a Noruega 🇳🇴</Text>

      <View style={styles.mapaContainer}>
        <MapView
          style={styles.mapa}
          initialRegion={{
            latitude: 59.9139,
            longitude: 10.7522,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

      <Text style={styles.coords}>📍 Latitude: 59.9139 | 🗺️ Longitude: 10.7522</Text>

      <View style={styles.juntar}>
        <Text style={styles.info}>
          A Noruega é famosa pelos seus fiordes espetaculares, auroras boreais e qualidade de vida excepcional.
        </Text>
        <Image 
          source={{ uri: "https://media.istockphoto.com/id/592265338/pt/v%C3%ADdeo/norway-flag-loopable.jpg?s=640x640&k=20&c=gKBvjXlW3k97pFkvy8DLY7o9KmvEYZXJ1oL_kUcc6UM=" }} 
          style={styles.bandeira}
        />
      </View>

      <View style={styles.curiosidades}>
        <Text style={styles.curiosidade}>❄️ Curiosidade: A Noruega inventou o queijo marrom (Brunost).</Text>
        <Text style={styles.curiosidade}>🌍 Curiosidade: O país tem uma das estradas mais bonitas do mundo!</Text>
        <Text style={styles.curiosidade}>🚢 Curiosidade: Os vikings originaram-se da Noruega.</Text>
      </View>

      <TouchableOpacity style={styles.botaoExplorar}>
        <Text style={styles.botaoTexto}>Descubra mais sobre a Noruega</Text>
      </TouchableOpacity> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  botaoVoltar: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  titulo: {
    color: "#D7152A", // Vermelho da bandeira
    fontWeight: 'bold',
    fontSize: 26, 
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
    color: "#0047AB", // Azul da bandeira
    paddingHorizontal: 20,
    marginTop: 7,
    marginLeft: -20,
  },
  curiosidade: {
    fontSize: 16,
    color: "#D7152A",
    fontStyle: "italic",
    marginTop: 10,
  },
  curiosidades: {
    marginTop: -15,
    marginLeft: 10,
  },
  coords: {
    fontSize: 13,
    color: "#777",
    marginTop: 10,
  },
  botaoExplorar: {
    marginTop: 30,
    backgroundColor: "#0047AB",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

