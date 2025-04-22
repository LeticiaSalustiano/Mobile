import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class Cartao extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text2}>
          {this.props.noticia}
        </Text>
        <Image source={{ uri: this.props.imagem }} style={styles.img} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20
  },

  text2: {
    fontFamily: 'arial',
    fontSize: 25,
    color: 'black',
    margin: 20,
    marginTop: 20,
  },

  img: {
    borderRadius: 5,
    width: 300,
    height: 250,
    marginTop: 30
  }
});

export default Cartao;

  