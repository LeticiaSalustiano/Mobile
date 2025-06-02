import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchedProducts = [
      { id: '1', name: 'Café', price: 'R$ 04,00' },
      { id: '2', name: 'Pão de queijo', price: 'R$ 03,50' },
      { id: '3', name: 'Pão na chapa', price: 'R$ 07,00' },
    ];
    setProducts(fetchedProducts);
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
              <Ionicons name="add-circle-outline" size={24} color="blue" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Produtos"
          component={ProductListScreen}
          options={{
            headerRight: () => (
              <View style={styles.cartContainer}>
                <Ionicons style={{fontSize: 30, marginRig: 90}} name="cart-outline" size={24} color="black" />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  item: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd' 
  },
  name: { 
    fontSize: 16, 
    flex: 1 
  },
  price: { 
    fontSize: 14, 
    color: 'green' 
  },
  addButton: { 
    marginLeft: 10 
  },
  cartContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginRight: 20,
  },
});

export default App;
