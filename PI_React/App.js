import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/pages/rotas';
//import AuthProvider from './src/Context/auth';

export default function App() {
  return (
    <NavigationContainer>
      <Rotas/>
    </NavigationContainer>
  );
}
