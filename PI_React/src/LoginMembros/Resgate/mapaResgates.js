// MapaResgates.js
import React, { useRef, useState } from 'react';
import { View, Text, Alert, Modal, TextInput, TouchableOpacity, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_API_KEY = 'AIzaSyASKvn465hXe_LvPkxAFxam51XlTmcYt64';

const MapaResgates = () => {
  const [petCalls, setPetCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);
  const [showRoute, setShowRoute] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({ endereco: '', descricao: '', contato: '' });
  const [loading, setLoading] = useState(false);
  const mapRef = useRef(null);

  const [userLocation] = useState({
    latitude: -23.9387864,
    longitude: -46.3372885,
  });

  const geocodeEndereco = async (endereco) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(endereco)}&key=${GOOGLE_API_KEY}`
      );
      const data = await response.json();
      setLoading(false);
      if (data.status === 'OK') return data.results[0].geometry.location;
      Alert.alert('Erro ao localizar endereço', data.status);
    } catch {
      setLoading(false);
      Alert.alert('Erro', 'Não foi possível converter o endereço.');
    }
    return null;
  };

  const enviarDenuncia = async () => {
    if (!form.descricao.trim() || !form.endereco.trim()) {
      Alert.alert('Preencha todos os campos obrigatórios.');
      return;
    }

    const location = await geocodeEndereco(form.endereco);
    if (!location) return;

    const novoChamado = {
      id: Date.now(),
      latitude: location.lat,
      longitude: location.lng,
      descricao: form.descricao,
      contato: form.contato,
    };

    setPetCalls([...petCalls, novoChamado]);
    setForm({ endereco: '', descricao: '', contato: '' });
    setModalVisible(false);
    Alert.alert('Chamado enviado com sucesso!');
  };

  const abrirChamado = (call) => {
    setSelectedCall(call);
    Alert.alert(
      'Chamado de Resgate',
      `${call.descricao}\n${call.contato ? `Contato: ${call.contato}` : ''}`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Resgatar', onPress: () => setShowRoute(true) },
      ]
    );
  };

  return (
    <View style={{ height: 400, borderRadius: 10, overflow: 'hidden', marginBottom: 10 }}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
        showsTraffic
        mapType="hybrid"
      >
        {petCalls.map((call) => (
          <Marker
            key={call.id}
            coordinate={{ latitude: call.latitude, longitude: call.longitude }}
            title="Pet abandonado"
            description="Clique para ver detalhes"
            pinColor="red"
            onPress={() => abrirChamado(call)}
          />
        ))}

        {showRoute && selectedCall && (
          <MapViewDirections
            origin={userLocation}
            destination={{
              latitude: selectedCall.latitude,
              longitude: selectedCall.longitude,
            }}
            apikey={GOOGLE_API_KEY}
            strokeWidth={5}
            strokeColor="#14C5EC"
            onReady={(result) => {
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: { top: 50, bottom: 80, left: 50, right: 50 },
                animated: true,
              });
            }}
          />
        )}

        <Circle
          center={userLocation}
          radius={30}
          strokeColor="rgba(0, 122, 255, 0.8)"
          fillColor="rgba(0, 122, 255, 0.3)"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#14C5EC',
    padding: 10,
    borderRadius: 8,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MapaResgates;
