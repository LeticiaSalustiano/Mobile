import { Component, setState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: -23.5475, 
        longitude: -46.6361, 
        latitudeDelta: 0.0922, 
        longitudeDelta: 0.0421    
      },
      descricao: '',
      titulo: '',
      markers:[
        {key:0, coords:{latitude: -23.5475, longitude: -46.6361}},
        {key:1, coords:{latitude: -22.9028, longitude: -43.2075 }},
        {key:2, coords:{latitude: -12.9711, longitude: -38.5108}},
        {key:3, coords:{latitude: -19.9208, longitude: -43.9378}},
        {key:4, coords:{latitude: -3.7172, longitude: -38.5431}},
        {key:5, coords:{latitude: -25.4278, longitude: -49.2731 }},
        {key:6, coords:{latitude: -3.1019, longitude: -60.0250}}
      ]
    };

    this.trocarCidade = this.trocarCidade.bind(this);
    this.latitudeClicada = this.latitudeClicada.bind(this);
  }

  latitudeClicada(e){
    alert('Latitude:  ' + e.nativeEvent.coordinate.latitude + '  Longitude: ' + e.nativeEvent.coordinate.longitude)

     let state = this.state;
      state.markers.push({
      key:state.markers.length,
      coords:{
        latitude:e.nativeEvent.coordinate.latitude,
        longitude:e.nativeEvent.coordinate.longitude
      }
    });
    this.setState(state);
  }

  trocarCidade(latitude, longitude, descricao, titulo){
    this.setState({
      region: {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421    
      },
      descricao: descricao,
      titulo: titulo
    });
    state.region = region;
    this.setState(state);
  }

  render(){
    const { region, descricao, titulo, markers } = this.state;

    

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Top 7 principais cidades do Brasil</Text>
        <MapView 
           style={styles.mapa} 
           region={region}
           mapType='hybrid'
           showsTraffic={true}
           onPress={
            this.latitudeClicada }
        >
        {markers.map((marker)=>{
          return(
            <Marker 
            key={marker.key}
            coordinate={marker.coords}
            title={titulo}
            description={`${region.latitude}, ${region.longitude}`} // Correção: exibe coordenadas corretamente
            image={require('./assets/pin3.png')}/>
          );
        })}

      </MapView>

        <Text>{region.latitude} | {region.longitude}</Text>

        <Text style={styles.descricao}>{descricao}</Text>

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={() => this.trocarCidade(-23.5475, -46.6361, 'São Paulo é o centro financeiro do Brasil, com uma cultura vibrante e inúmeras atrações turísticas.', 'São Paulo')}> 
            <Text style={styles.textoBotao}>São Paulo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => this.trocarCidade(-22.9028, -43.2075, 'Rio de Janeiro é famoso por suas praias e pelo icônico Cristo Redentor.', 'Rio de Janeiro')}>
            <Text style={styles.textoBotao}>Rio de Janeiro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => this.trocarCidade(-12.9711, -38.5108, 'Salvador é berço da cultura afro-brasileira e possui o famoso Pelourinho.', 'Salvador')}>
            <Text style={styles.textoBotao}>Salvador</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={() => this.trocarCidade(-19.9208, -43.9378, 'Belo Horizonte é conhecida por sua gastronomia e suas belas montanhas.', 'Belo Horizonte')}>
            <Text style={styles.textoBotao}>Belo Horizonte</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => this.trocarCidade(-3.7172, -38.5431, 'Fortaleza tem algumas das praias mais paradisíacas do Brasil, como Jericoacoara.', 'Fortaleza')}>
            <Text style={styles.textoBotao}>Fortaleza</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => this.trocarCidade(-25.4278, -49.2731, 'Curitiba é referência em urbanismo e sustentabilidade, com parques e transporte eficiente.', 'Curitiba')}>
            <Text style={styles.textoBotao}>Curitiba</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao} onPress={() => this.trocarCidade(-3.1019, -60.0250, 'Manaus é porta de entrada para a Floresta Amazônica e abriga o famoso Teatro Amazonas.', 'Amazonas')}>
            <Text style={styles.textoBotao}>Manaus</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  titulo: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 23,
    color: '#333',
    marginTop: 30,
  },
  mapa: {
    width: '95%',
    height: 400,
    borderRadius: 10,
    marginTop: -20
  },
  descricao: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#444',
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'center',
    marginTop: -10,
  },
  botao: {
    margin: 10,
    padding: 12,
    backgroundColor: '#FF6347',
    borderRadius: 5,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 3,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  }
});
