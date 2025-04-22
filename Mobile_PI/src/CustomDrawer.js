import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomDrawer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Personalizado</Text>
      {props.state.routes.map((route, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => props.navigation.navigate(route.name)}
        >
          <Text style={styles.buttonText}>{route.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#14c5ec',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
