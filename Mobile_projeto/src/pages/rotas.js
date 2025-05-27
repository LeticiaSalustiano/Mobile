import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './home';
import Sobre from './sobre';
import Tipo from './tipo';
import ResgateMembro from '../membros/ResgateMembro';
import VeterinarioMembro from '../membros/VeterinarioMembro';
import ApoioMembro from '../membros/ApoioMembro';
import Login from '../login';

const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
         name="Safe Pet" 
         component={Home} />
      <Drawer.Screen 
         name="Saiba Mais" 
         component={Sobre} />
      <Drawer.Screen 
         name="Cadastre-se" 
         component={Tipo} 
         options={{ drawerItemStyle: { display: 'none' } }} />
        <Drawer.Screen 
         name="Login" 
         component={Login} 
         />
      <Drawer.Screen 
         name="ResgateMembro" 
         component={ResgateMembro} 
         options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen 
         name="VeterinarioMembro" 
         component={VeterinarioMembro} 
         options={{ drawerItemStyle: { display: 'none' } }} />
      <Drawer.Screen 
         name="ApoioMembro" 
         component={ApoioMembro} 
         options={{ drawerItemStyle: { display: 'none' } }} />
    </Drawer.Navigator>
  );
}
