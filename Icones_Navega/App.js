/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home/index';
import SaibaMais from './src/SaibaMais/index';
import Contato from './src/Contato/Index';


const Pilha = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator>
         <Pilha.Screen 
            name='Home' 
            component={Home}
            options={{
            title:'Tela inicial',
            headerTintColor:'#000',   
        }}
           ></Pilha.Screen>

         <Pilha.Screen 
          name='Noticia' 
          component={Noticia}
          options={{
          title:'Tela Noticias',          
        }}
          ></Pilha.Screen>

         <Pilha.Screen 
          name='Contato' 
          component={Contato}
          options={{
          title:'Tela Contato',
        }}
          ></Pilha.Screen>
           <Pilha.Screen 
          name='SaibaMais' 
          component={SaibaMais}
          options={{
          title:'Tela Saiba Mais',
        }}
          ></Pilha.Screen>
      </Pilha.Navigator>
    </NavigationContainer>

  );
}*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconesEXP from '@expo/vector-icons/Feather'

import Home from './src/Home/index';
import SaibaMais from './src/SaibaMais/index';
import Contato from './src/Contato/Index';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
      name='SaibaMais'
      component={SaibaMais}
      options={{
        tabBarIcon:({color, size})=> {
          return <IconesEXP name="saibamais" color={color} size={size}></IconesEXP>
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
    </NavigationContainer>

  );
}




