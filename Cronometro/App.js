import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

   class App extends Component {
     constructor(props) {
      super(props);
      this.state = {
        numero: 0,
        botao: 'INICIAR',
        ultimo: null
    };
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);

    this.timer = null;
  }

 iniciar(){
  if(this.timer != null){
     clearInterval(this.timer);
     this.timer = null;
     this.setState({botao: 'VAI'});
  } else{
      this.timer = setInterval(() => {
      this.setState({ numero: this.state.numero + 0.1 });
    }, 100);
    
    this.setState({botao: 'PARAR'})
  }
}

limpar() {
  clearInterval(this.timer);
  this.timer = null;
  this.setState({ 
    ultimo: this.state.numero,
    numero: 0, 
    botao: 'INICIAR' 
  });
 }



 render() {
  return (
    <View style={styles.container}>
      <Image source={require('./src/cronometro.png')}></Image>
      <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
      <View style={styles.area}>
        <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
          <Text style={styles.texto}>{this.state.botao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.texto}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaUltimo}>
          <Text style={styles.textoUltimo}>
            {this.state.ultimo > 0 ? 'Último tempo ' + this.state.ultimo.toFixed(2)  + 's' : ''}
            </Text>
      </View>
    </View>
   );
  }
}
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timer: {
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: -160,
  },

  area: {
   marginTop: 90,
   flexDirection: 'row',
   height: 40,
  },

  btn: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 17,
    borderRadius: 10,
  },

  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },

  areaUltimo: {
    marginTop: 50, 
  },

  textoUltimo: {
    fontSize: 30,
    fontStyle: 'italic',
    color: '#fff'
  },

});

export default App;
