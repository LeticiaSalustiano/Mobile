import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{

  constructor(props){
    super(props);
    this.state = { 
      feed: this.props.data
    };
  }

  like = () => {
    this.setState(prevState => ({
      feed: {
        ...prevState.feed,
        likeada: !prevState.feed.likeada,
        likers: prevState.feed.likers ? prevState.feed.likers - 1 : prevState.feed.likers + 1
      }
    }));
  };

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={{ uri: this.state.feed.imgperfil }} style={styles.imgPerfil}></Image>
          <Text style={styles.nomePerfil}>{this.state.feed.nome}</Text>
        </View>

        <Image source={{ uri: this.state.feed.imgPublicacao }} style={styles.imgPost}></Image>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.alinha} onPress={this.like}>
            <Image  
               source={this.state.feed.likeada 
               ? require('../img/likeada.png') 
               : require('../img/like.png')} 
               style={styles.icon} >
            </Image>
            <Image 
             source={require('../img/send.png')}
             style={styles.send}/>
          </TouchableOpacity>      
      </View>
      <Text style={styles.likes}>{this.state.feed.likers} curtidas</Text>

      <Text style={styles.descricao}>
        <Text style={styles.nomePerfil}>{this.state.feed.nome}</Text>
        {this.state.feed.descricao}
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  imgPerfil: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nomePerfil: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  imgPost: {
    width: '100%',
    height: 300,
  },
  footer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  }, 
  alinha: {
    flexDirection: 'row',
  },
  icon: {
    width: 27,
    height: 27,
    marginRight: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginTop: -5,
    marginLeft: 10,
  },
  send:{
    width: 23,
    height: 23
  },
  descricao: {
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
  },
})

export default Lista;