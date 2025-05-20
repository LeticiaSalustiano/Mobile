import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './home';
import Sobre from './sobre';
import Tipo from './tipo';
import ResgateMembro from '../membros/ResgateMembro';
import VeterinarioMembro from '../membros/VeterinarioMembro';
import ApoioMembro from '../membros/ApoioMembro';

const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Safe Pet" component={Home} />
      <Drawer.Screen name="Saiba Mais" component={Sobre} />
      <Drawer.Screen name="Cadastre-se" component={Tipo} />
      <Drawer.Screen name="ResgateMembro" component={ResgateMembro} />
      <Drawer.Screen name="VeterinarioMembro" component={VeterinarioMembro} />
      <Drawer.Screen name="ApoioMembro" component={ApoioMembro} />
    </Drawer.Navigator>
  );
}
