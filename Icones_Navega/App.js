/*import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import IconesEXP from '@expo/vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
           <IconesEXP name='arrow-right-circle' size={60} color={'#ff0000'}></IconesEXP>
      </TouchableOpacity>
      <TouchableOpacity>
           <IconesEXP name='arrow-left-circle' size={60} color={'#ff0000'}></IconesEXP>
      </TouchableOpacity>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home/index';
import Sobre from './src/Sobre/index';
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
            headerTintColor:'#fff',
            headerStyle:{
            backgroundColor:'#121212'
          },          
        }}
           ></Pilha.Screen>

         <Pilha.Screen 
          name='Sobre' 
          component={Sobre}
          options={{
          title:'Tela Sobre',          
        }}
          ></Pilha.Screen>

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

