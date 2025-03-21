import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import Cartao from './src/Noticia/noticia.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titulo: 'Brasil Notícias',
      imagem: 'https://cdn.pixabay.com/video/2022/03/27/112034-692839342_tiny.jpg',
      noticia: 'Notícias',
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar(titulo, imagem, noticia) {
    this.setState({ titulo, imagem, noticia });
  }

  render() {
    return (

   <View style={styles.container}>
      <View style={styles.view}>
        <Text style={{color: 'white', margin: 20, fontSize: 25}}>Brasil Notícias</Text>
        </View>
        <Button title='Ver Notícia' onPress={() => this.entrar('Notícia 1', 'https://imagens.ebc.com.br/AYxGxkogz-1PWAls2_l1vtoGkXI=/1170x700/smart/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/_ja_2165_0.jpg?itok=ZXtrpUXD', 'Incêndio no Pantanal')} />
        <Text style={styles.text}></Text>
        <Button title='Ver Notícia' onPress={() => this.entrar('Notícia 2', 'https://services.meteored.com/img/article/desmatamento-na-amazonia-cresce-pelo-5-mes-seguido-com-o-para-liderando-o-ranking-de-degradacao-1732733824825_512.png', 'Desmatamento na Amazônia')} />
        <Text style={styles.text}></Text>
        <Button title='Ver Notícia' onPress={() => this.entrar('Notícia 3', 'https://wwfbrnew.awsassets.panda.org/img/original/certaf.jpg', 'Crise de Água no Brasil')} />


        <ScrollView style={styles.noticia}>
          <Cartao
            noticia={this.state.noticia}
            imagem={this.state.imagem}
            altura={250}
            largura={300}
          />
        </ScrollView>
        <View style={{backgroundColor: '#666', width: 393, height: 30, alignItems: 'center' }}>
          <Text style={{ color: 'white', margin: 5}}>blablabla@gmail.com</Text>
          </View>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
     
  },

  view:{
    alignItems: 'center',
    margin: 70,
    marginTop: -30,
    backgroundColor: '#666',
    height: 70,
    width: 400
  },

  titulo:{
    margin: 50, 
    fontSize: 30
  },

  text:{
    marginTop: 1,      
  },

  noticia:{
    marginTop: 5
  },

});

export default App