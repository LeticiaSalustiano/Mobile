import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';

const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Sobre" component={Sobre} />
          <Drawer.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Resgate" component={Resgate} /> {/* Tela Resgate não aparece no Drawer */}
    </Drawer.Navigator>
);
  
}