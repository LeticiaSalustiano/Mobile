import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Sobre from './Sobre';
import Cadastro from './Cadastro';
import Resgate from './Resgate';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
      <Drawer.Screen name="Resgate" component={Resgate} />
    </Drawer.Navigator>
  );
}
