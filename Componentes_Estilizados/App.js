import { StyleSheet, Text, View } from 'react-native';
//import styled from 'styled-components/native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Componentes Estilizados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
