import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Feather';

import Lista from './src/Lista';
import Carrinho from './src/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Lista"
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Carrinho')}>
                <View style={styles.cartContainer}>
                  <Icon style={{ marginLeft: 60, marginTop: 4 }} name="shopping-cart" size={27} color="black" />
                  {cart.length > 0 && (
                    <View style={styles.cartBadge}>
                      <Text style={styles.cartBadgeText}>{cart.length}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ),
          })}
        >
          {props => <Lista {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>

        <Stack.Screen name="Carrinho">
          {props => <Carrinho {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    position: 'relative',
    marginRight: 15,
  },
  cartBadge: {
    position: 'absolute',
    top: 1,
    right: -9,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default App;


