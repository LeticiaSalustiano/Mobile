import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login/login'; // caminho correto pro seu Login
import Funcionarios from './src/Voluntario/funcionarios';
//import Resgate from './src/Resgate';
//import Inicial from './src/Inicial';
//import Adm from './src/Adm';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Funcionarios" component={Funcionarios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
