import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Modal} from 'react-native';
import Entrar from './src/Entrar'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
         visibModal: false
    };   
     this.Entrar = this.Entrar.bind(this);
     this.Sair = this.Sair.bind(this);
 }

Entrar(){
  this.setState ({visibModal: true})
}

Sair(estado){
  this.setState ({visibModal: estado})
}

 render(){
  return(
    <View style={estilos.container}>
      <Button title='Entrar' onPress={this.Entrar}></Button>
      <Modal 
      transparent={true}
      visible={this.state.visibModal}
      animationType='fade'
      >
       <View style={{margin: 15, flex:1, alignItems: 'center', justifyContent: 'center'}}>
       <Entrar fechar={()=> this.Sair(false)}></Entrar>
       </View>
      </Modal>
    </View>
  );
 }
}


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    alignItems: 'center'
  },

});

export default App;