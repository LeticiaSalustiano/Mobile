import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconesEXP from '@expo/vector-icons/Feather'

import Home from './src/paginas/Home/index.js';
import Sobre from './src/paginas/Sobre/index.js';
import Contato from './src/paginas/Contato/index.js';

const Tab = createBottomTabNavigator();

export default function Rotas() {
  return (
      <Tab.Navigator
      screenOptions={{
        headerShouwn: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
      name='Home'
      component={Home}
      options={{
        tabBarIcon:({color, size})=> {
          return <IconesEXP name="home" color={color} size={size}></IconesEXP>
        }
      }}>
      </Tab.Screen>
      <Tab.Screen
      name='Sobre'
      component={Sobre}
      options={{
        tabBarIcon:({color, size})=> {
          return <IconesEXP name="sobre" color={color} size={size}></IconesEXP>
        }
      }}>
      </Tab.Screen>
      <Tab.Screen
      name='Contato'
      component={Contato}
      options={{
        tabBarIcon:({color, size})=> {
          return <IconesEXP name="contato" color={color} size={size}></IconesEXP>
        }
      }}>
      </Tab.Screen>
      </Tab.Navigator>
   
  );
}




