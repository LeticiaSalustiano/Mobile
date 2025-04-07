import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Páginas/Home/index';
import Noticias from './src/Páginas/Noticias/index';
import Contato from './src/Páginas/Contato/index';


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
            name="Notícia" 
            component={Noticias} 
            options={{
            title: 'Tela Notícias',
        }}
         />

         <Pilha.Screen 
          name='Contato' 
          component={Contato}
          options={{
          title:'Tela Contato',
        }}
          ></Pilha.Screen>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}

