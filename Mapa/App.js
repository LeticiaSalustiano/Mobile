import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Suica from './src/pages/Suica';
import Noruega from './src/pages/Noruega';
import Canada from './src/pages/Canada';
import Finlandia from './src/pages/Finlandia';
import Alemanha from './src/pages/Alemanha';
import Australia from './src/pages/Australia';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🌎 Viagem pelo Mundo</Text>

      <MapView
        style={styles.mapa}
        initialRegion={{
          latitude: -23.9549098,
          longitude: -46.3868863,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      <Text style={styles.subtitulo}>Escolha um destino:</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
        {[
          { name: 'Suíça', screen: 'Suica', image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Zermatt_-_View_of_Matterhorn.jpg' },
          { name: 'Noruega', screen: 'Noruega', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Fjords_Norway.jpg' },
          { name: 'Canadá', screen: 'Canada', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Moraine_Lake_Canada.jpg' },
          { name: 'Finlândia', screen: 'Finlandia', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Northern_Lights_in_Finland.jpg' },
          { name: 'Alemanha', screen: 'Alemanha', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Neuschwanstein_Castle.jpg' },
          { name: 'Austrália', screen: 'Australia', image: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Sydney_Opera_House.jpg' },
        ].map((pais) => (
          <TouchableOpacity key={pais.name} style={styles.card} onPress={() => navigation.navigate(pais.screen)}>
            <Image source={{ uri: pais.image }} style={styles.imagemPais} />
            <Text style={styles.cardTexto}>{pais.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.botaoExplorar}>
        <Text style={styles.botaoTexto}>Explorar mais destinos</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Suica" component={Suica} />
        <Stack.Screen name="Noruega" component={Noruega} />
        <Stack.Screen name="Canada" component={Canada} />
        <Stack.Screen name="Finlandia" component={Finlandia} />
        <Stack.Screen name="Alemanha" component={Alemanha} />
        <Stack.Screen name="Australia" component={Australia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    paddingTop: 40,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#004d92',
  },
  subtitulo: {
    fontSize: 18,
    marginTop: 20,
    color: '#555',
    textAlign: 'center',
  },
  mapa: {
    marginTop: 20,
    width: 350,
    height: 200,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  scroll: {
    marginTop: 20,
  },
  card: {
    width: 180,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  imagemPais: {
    width: '100%',
    height: '80%',
  },
  cardTexto: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
    color: '#333',
  },
  botaoExplorar: {
    marginTop: 30,
    backgroundColor: '#004d92',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

