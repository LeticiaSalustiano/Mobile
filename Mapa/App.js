import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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
      <Text style={styles.titulo}>Os 6 melhores países do mundo</Text>

      <MapView
        style={{ width: 350, height: 350 }}
        initialRegion={{
          latitude: -23.9549098,
          longitude: -46.3868863,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

    <View style={styles.area}>
      <View style={styles.lugares}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Suica')}>
          <Text style={styles.btnTxt}>Suíça</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Noruega')}>
          <Text style={styles.btnTxt}>Noruega</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lugares2}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Canada')}>
          <Text style={styles.btnTxt}>Canadá</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Finlandia')}>
          <Text style={styles.btnTxt}>Finlândia</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lugares3}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Alemanha')}>
          <Text style={styles.btnTxt}>Alemanha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Australia')}>
          <Text style={styles.btnTxt}>Austrália</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    backgroundColor: '#f0f4ff',
    alignItems: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    padding: 30,
    fontSize: 20,
    marginTop: 30,
  },
  area: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 30,

  },
  lugares: {
    flexDirection: 'row',
    marginTop: 50,
  },
  lugares2: {
    flexDirection: 'row', 
    padding: 31,
  },
  lugares3: {
    padding: 1,
    flexDirection: 'row', 
  },
  btn: {
    width: 120,
    height: 40,
    marginRight: 30,
    marginLeft: 25,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  btnTxt: {
    color: '#f3f3f3',
    fontWeight: 'bold',
  },
});
