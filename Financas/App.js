import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
       <AuthProvider>
          <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content"></StatusBar>
          <Routes></Routes>
       </AuthProvider>
    </NavigationContainer>
  );
}

