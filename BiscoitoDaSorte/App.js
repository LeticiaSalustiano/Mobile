import { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

   class App extends Component {
     constructor(props) {
      super(props);
      this.state = {
          frase: '',
          img: require('./src/biscoito.png'),
          btnReiniciar: false, 
    };

      this.frases = [
        'Siga os bons e aprenda com eles.',  
        'O bom-senso vale mais do que muito conhecimento.',  
        'O riso é a menor distância entre duas pessoas.',  
        'Deixe de lado as preocupações e seja feliz.', 
        'Realize o óbvio, pense no improvável e conquiste o impossível.', 
        'Acredite em milagres, mas não dependa deles.', 
        'A maior barreira para o sucesso é o medo do fracasso.' 
  ];
     this.quebraBiscoito = this.quebraBiscoito.bind(this);
     this.reiniciar = this.reiniciar.bind(this); 
};

     quebraBiscoito() {
       let nAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
       frase: ' "' + this.frases[nAleatorio] + '" ',
       img: require('./src/biscoitoAberto.png'),
       btnReiniciar: true, 
    });
  }

  reiniciar() {
    this.setState({
      frase: '',
      img: require('./src/biscoito.png'),
      btnReiniciar: false, 
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.frase}>{this.state.frase}</Text>
        <TouchableOpacity style={styles.btn} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
        {this.state.btnReiniciar && ( 
          <TouchableOpacity style={styles.btn2} onPress={this.reiniciar}>
            <View style={styles.btnArea2}>
              <Text style={styles.btnTexto2}>Reiniciar</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    width: 240,
    height: 240
  },

  frase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  btn: {
    width: 230,
    height: 50,
    borderRadius: 25,
    borderColor: '#dd7b22',
    borderWidth: 2,
  },

  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',   
  },

  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },

  btn2: {
    marginTop: 10,
    width: 230,
    height: 50,
    borderRadius: 25,
    borderColor: '#dd7b22',
    borderWidth: 2,
  },

  btnArea2: {   
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',   
  },

  btnTexto2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App
