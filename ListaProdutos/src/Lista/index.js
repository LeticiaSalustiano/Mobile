import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Lista = ({ cart, setCart, navigation }) => {
  const products = [
    { id: '1', name: 'Café', price: 'R$ 04,00' },
    { id: '2', name: 'Pão de queijo', price: 'R$ 03,50' },
    { id: '3', name: 'Pão na chapa', price: 'R$ 07,00' },
    { id: '4', name: 'Água', price: 'R$ 03,00' },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
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
      <TouchableOpacity onPress={() => navigation.navigate('Carrinho')} style={{ marginBottom: 30, alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 16, color: 'blue' }}>Visualizar Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 16,
    flex: 1,
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  addButton: {
    marginLeft: 10,
  },
});

export default Lista;

