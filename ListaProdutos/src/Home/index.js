import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Feather';

const Carrinho = ({ cart, setCart }) => {
  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const calcularTotal = () => {
    return cart
      .reduce((acc, item) => {
        const valor = parseFloat(item.price.replace('R$', '').replace(',', '.')) || 0;
        return acc + valor * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Carrinho de Compras</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

        <View style={{flexDirection: 'column'}}>
          <View style={styles.item}>
            <Text style={styles.name}>{item.quantity} {item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.quantity}></Text>
       
          <View style={{flexDirection: 'row', marginTop: -10}}>
        
            <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.iconButton}>
              <Icon name="minus-circle" size={24} color="blue" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.iconButton}>
              <Icon name="plus-circle" size={24} color="blue" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.iconButton}>
              <Icon name="x-circle" size={24} color="red" />
            </TouchableOpacity>
          </View>
          </View>
        </View>
        )}
      />
      <Text style={styles.total}>Total: R$ {calcularTotal()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  header: { 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: { 
    fontSize: 16, 
    flex: 1, 
    fontWeight: 'bold'
  },
  price: { 
    fontSize: 14, 
    color: 'green' 
  },
  quantity: { 
    fontSize: 16, 
    marginHorizontal: 10 
  },
  iconButton: { 
    marginHorizontal: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'right',
  },
});

export default Carrinho;
