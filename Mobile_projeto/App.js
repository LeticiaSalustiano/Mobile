import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/pages/rotas';
import './config/firebaseConfig';

export default function App() {
  return (
    <NavigationContainer>
      <Rotas></Rotas>
    </NavigationContainer>
  );
}
