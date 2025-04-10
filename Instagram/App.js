
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Lista from './src/Lista';
import Stories from './src/Stories';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'Matheus Solier', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://th.bing.com/th/id/R.d3d48291fe85db780aef82b4f4e28b35?rik=E9g7ulZeW02IlQ&riu=http%3a%2f%2fwww.tuproyectodevida.pe%2fwp-content%2fuploads%2f2023%2f01%2fcarrera-programador-sistemas-1200x628.jpg&ehk=1Hwsf2I9m1syLOfcbdHZ8wN%2bValaqz%2fbLS5PaO0r10Y%3d&risl=&pid=ImgRaw&r=0', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 0
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://th.bing.com/th/id/OIP.M_yJaqMwu3ClBklx-hL1cgHaE8?w=600&h=400&rs=1&pid=ImgDetMain', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '5', 
          nome: 'Guilherme Moreira', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 0
        },
        {
          id: '6', 
          nome: 'Breno Lucca', 
          descricao: 'Mais uma vez aqui fazendo o que amo', 
          imgperfil: 'https://sujeitoprogramador.com/wp-content/uploads/2024/12/thumb-POST-FACUL.jpg', 
          imgPublicacao: 'https://sujeitoprogramador.com/wp-content/uploads/2024/12/thumb-POST-FACUL.jpg',
          likeada: false, 
          likers: 0
        },
        {
          id: '7', 
          nome: 'Gabrielly Fonseca', 
          descricao: 'Mood do dia', 
          imgperfil: 'https://th.bing.com/th/id/R.78822499bb91fb12ead8ce166114fddc?rik=ygL9pLi6oMhuQA&riu=http%3a%2f%2foxygenacademy.es%2fwp-content%2fuploads%2f2022%2f09%2fsalario-programador-junior-1.jpg&ehk=LQTia3nyhuTDXEDfh%2bOxKInUii3cLPuxkKwzVi3%2bd%2b8%3d&risl=&pid=ImgRaw&r=0', 
          imgPublicacao: 'https://sujeitoprogramador.com/wp-content/uploads/2023/08/thumb-vfree.jpg',
          likeada: false, 
          likers: 0
        },
      ]
     };
 
  }

  render() {
    return (
    <View style={styles.container}>  
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
          source={require('./src/img/logo.png')}
          style={styles.logo}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
          source={require('./src/img/send.png')}
          style={styles.send}
          />
        </TouchableOpacity>
      </View>

      <Stories data={this.state.feed} />
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={this.state.feed}
      renderItem={ ({item}) => <Lista data={item} /> }
      />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  send:{
    width: 23,
    height: 23
  }

});

export default App;