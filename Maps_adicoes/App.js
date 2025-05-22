import { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

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
        {key:0, coords:{latitude: -23.5475, longitude: -46.6361}, titulo: 'São Paulo', descricao: 'Centro financeiro do Brasil.'},
        {key:1, coords:{latitude: -22.9035, longitude: -43.2096}, titulo: 'Rio de Janeiro', descricao: 'Famoso pelo Cristo Redentor.'},
        {key:2, coords:{latitude: -12.9711, longitude: -38.5108}, titulo: 'Salvador', descricao: 'Berço da cultura afro-brasileira.'},
        {key:3, coords:{latitude: -19.9208, longitude: -43.9378}, titulo: 'Belo Horizonte', descricao: 'Conhecida por sua gastronomia.'},
        {key:4, coords:{latitude: -3.7172, longitude: -38.5431}, titulo: 'Fortaleza', descricao: 'Praias paradisíacas.'},
        {key:5, coords:{latitude: -25.4278, longitude: -49.2731}, titulo: 'Curitiba', descricao: 'Referência em urbanismo.'},
        {key:6, coords:{latitude: -3.1019, longitude: -60.0250}, titulo: 'Manaus', descricao: 'Entrada da Floresta Amazônica.'},
        {key:7, coords:{latitude: -8.0476, longitude: -34.8770}, titulo: 'Recife', descricao: 'Conhecida como a "Veneza Brasileira".'}  
      ],
      modalVisible: false,
      tempLatitude: null,
      tempLongitude: null,
      tempTitulo: '',
      tempDescricao: ''
    };

    this.trocarCidade = this.trocarCidade.bind(this);
    this.latitudeClicada = this.latitudeClicada.bind(this);
    this.salvarMarcador = this.salvarMarcador.bind(this);
    this.mapRef = null; // Referência para o MapView
  }

  latitudeClicada(e) {
    if (!e.nativeEvent || !e.nativeEvent.coordinate) {
      console.warn('Evento inválido, sem coordenadas.');
      return;
    }

    this.setState({
      modalVisible: true,
      tempLatitude: e.nativeEvent.coordinate.latitude,
      tempLongitude: e.nativeEvent.coordinate.longitude,
      tempTitulo: '',
      tempDescricao: ''
    });
  }

  salvarMarcador() {
    const { tempLatitude, tempLongitude, tempTitulo, tempDescricao } = this.state;

    this.setState((prevState) => ({
      markers: [
        ...prevState.markers,
        {
          key: prevState.markers.length,
          coords: {
            latitude: tempLatitude,
            longitude: tempLongitude
          },
          titulo: tempTitulo || `Lat: ${tempLatitude}, Lon: ${tempLongitude}`,
          descricao: tempDescricao || `Coordenadas: ${tempLatitude}, ${tempLongitude}`
        }
      ],
      modalVisible: false
    }));
  }

  trocarCidade(latitude, longitude, descricao, titulo) {
    this.setState({
      region: {
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421    
      },
      descricao,
      titulo,
      selectedDestination: { latitude, longitude } // Salva o destino escolhido
    });
  
    // Animação para a nova região no mapa
    this.mapRef.animateToRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }, 1500);
  }
  
  render(){
    const { region, markers, modalVisible, tempTitulo, tempDescricao } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Seu app do Maps</Text>
        <MapView
           ref={(ref) => { this.mapRef = ref; }}
           style={styles.mapa}
           region={region}
           showsUserLocation
           loadingEnabled
           mapType='hybrid'
           showsTraffic={true}
           onPress={this.latitudeClicada}
>
      {markers.map((marker) => (
        <Marker 
           key={marker.key}
           coordinate={marker.coords}
           title={marker.titulo}
           description={marker.descricao}
           image={require('./assets/pin3.png')}
        />
  ))}

      {this.state.destLocation && (
       <MapViewDirections
           origin={this.state.region} 
           destination={this.state.destLocation} 
           apikey='AIzaSyBj5M9TPhBuQSQbohgB1uDZCAkf1UKriYo'
           strokeWidth={5}
           strokeColor="#FF6347"
           onReady={result =>{
        this.mapRef.fitToCoordinates(result.coordinates, {
          edgePadding:{
            right:50,
            left:50,
            top:50,
            bottom:80
          }
        })
      }}
    />
  )}
</MapView>

        {/* SCROLLVIEW COM AS CIDADES DA BAIXADA PARA TRAÇAR ROTAS */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.box}>
          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={()=> {
              this.setState({destLocation: {
                latitude:-23.959261,
                longitude:-46.3319156
              }})
            }}>
              <Text style={styles.localText}>Santos</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={()=> {
              this.setState({destLocation: {
                latitude:-23.9947943,
                longitude:-46.2570896
              }})
            }}>
              <Text style={styles.localText}>Guarujá</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={()=> {
              this.setState({destLocation: {
                latitude:-23.9603404,
                longitude:-46.3970159
              }})
            }}>
              <Text style={styles.localText}>São Vicente</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={()=> {
              this.setState({destLocation: {
                latitude:-24.0031566,
                longitude:-46.4179811
              }})
            }}>
              <Text style={styles.localText}>P. Grande</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.localView}>
            <TouchableOpacity style={styles.localBtn} onPress={()=> {
              this.setState({destLocation: {
                latitude:-23.891885,
                longitude:-46.4249356
              }})
            }}>
              <Text style={styles.localText}>Cubatão</Text>
            </TouchableOpacity>
          </View>          
        </ScrollView>

        {/*Cidades do Brasil */}
        <ScrollView contentContainerStyle={styles.botoesContainer}>
          {markers.map((marker, index) => (
            index % 2 === 0 ? (
              <View key={index} style={styles.botoesRow}>
                <TouchableOpacity style={styles.botao} onPress={() => this.trocarCidade(marker.coords.latitude, marker.coords.longitude, marker.descricao, marker.titulo)}>
                  <Text style={styles.textoBotao}>{marker.titulo}</Text>
                </TouchableOpacity>
                {markers[index + 1] && (
                  <TouchableOpacity style={styles.botao} onPress={() => this.trocarCidade(markers[index + 1].coords.latitude, markers[index + 1].coords.longitude, markers[index + 1].descricao, markers[index + 1].titulo)}>
                    <Text style={styles.textoBotao}>{markers[index + 1].titulo}</Text>
                  </TouchableOpacity>
                )}
              </View>
            ) : null
          ))}

          <Text style={styles.descricao}>{region.latitude} | {region.longitude}</Text>
        </ScrollView>

             <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.modalContainer}>
                 <View style={styles.modalView}>
                   <Text style={styles.modalTitulo}>Adicionar um Marcador</Text>
                    <TextInput style={styles.input} placeholder="Título" value={tempTitulo} onChangeText={(text) => this.setState({ tempTitulo: text })} />
                    <TextInput style={styles.input} placeholder="Descrição" value={tempDescricao} onChangeText={(text) => this.setState({ tempDescricao: text })} />
                  <View style={styles.modalButtons}>
                    <TouchableOpacity style={styles.cancelar} onPress={() => this.setState({ modalVisible: false })} >
                      <Text style={styles.Txt}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.salvar} onPress={this.salvarMarcador} >
                      <Text style={styles.Txt}>Salvar</Text>
                   </TouchableOpacity>
                  </View>
                 </View>
                </View>
             </Modal>
                </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4ff',
    alignItems: 'center',
  },
  titulo: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 23,
    color: '#333',
    margin: 20,
  },
  mapa: {
    width: '100%',
    height: 430,
    borderRadius: 10,
  },
  botoesContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 70,
  },
  botoesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
  botao: {
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#FF6347',
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.5)', 
  }, 
  modalView: { 
    width: 300, 
    padding: 20, 
    backgroundColor: 'white', 
    borderRadius: 10, 
    alignItems: 'center', 
  }, 
  modalTitulo: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 10, 
  }, 
  input: { 
    width: '100%', 
    padding: 10, 
    marginVertical: 5, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 5, 
  }, 
  modalButtons: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', marginTop: 10, 
  }, 
  cancelar: { 
    backgroundColor: '#FF6347', 
    width: '32%', 
    height: 36, 
    borderRadius: 3, 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  salvar: {
   marginRight: 80, 
   backgroundColor: '#FF6347', 
   width: '32%', 
   borderRadius: 3, 
   alignItems: 'center', 
   justifyContent: 'center', 
  }, 
  Txt: { 
    color: '#fff', 
    fontWeight: 'bold', 
  },
  box: {
    position: 'absolute',
    top: 500,
  },
  localView: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  localBtn: {
    backgroundColor: '#FF6347',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  localText: {
    color: 'white',
    width: 75,
    textAlign:'center'
  },
  descricao: {
    marginTop: 10,
    fontWeight: 'bold'
  }
});