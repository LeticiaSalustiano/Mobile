import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';

const BtnAnimado = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [btnColor, setBtnColor] = useState('#4B0082');
  const [isModalVisible, setModalVisible] = useState(false);
  const [alertTextColor, setAlertTextColor] = useState('#4CAF50');
  const [alertMessage, setAlertMessage] = useState('');

  function Login() {
    if (email === 'leticiasalustiano07@gmail.com' && password === '0000') {
      setAlertTextColor('#4CAF50'); 
      setAlertMessage('Login realizado com sucesso!');
      setModalVisible(true);
    } else {
      setBtnColor('gray'); 
      setAlertTextColor('#FF6347'); 
      setAlertMessage('Credenciais inválidas!');
      setModalVisible(true);
    }
  }

  function closeModal() {
    setModalVisible(false);
    setBtnColor('#4B0082'); 
  }

  
  return (
    <View style={styles.container}>
      <Animatable.Text 
        style={styles.titulo}
        animation="bounceIn"
        iterationCount={3}
        duration={5000}
      >
        Faça seu login!
      </Animatable.Text>

      <TextInput
        placeholder="Digite seu Email: "
        keyboardType="email-address"
        style={styles.email}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Digite sua Senha: "
        secureTextEntry
        style={styles.senha}
        value={password}
        onChangeText={setPass}
      />

      <BtnAnimado 
        style={[styles.btnArea, { backgroundColor: btnColor }]}
        animation="bounceIn"
        iterationCount={1}
        duration={5000}
        onPress={Login}
      >
        <Text style={styles.btn}>Entrar</Text>
      </BtnAnimado>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <Animatable.View style={styles.modalView} animation="zoomIn">
            <Animatable.Text 
              style={[styles.alertText, { color: alertTextColor }]} 
              animation="pulse"
              iterationCount="infinite"
            >
              {alertMessage}
            </Animatable.Text>
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>OK</Text>
            </Pressable>
          </Animatable.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5ff',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 40,
    marginTop: 100,
    color: '#4B0082',
  },
  email: {
    width: '90%',
    height: 50,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingLeft: 15,
    marginTop: 40,
    backgroundColor: '#F8F8FF', 
    borderColor: '#000',
  },
  senha: {
    width: '90%',
    height: 50,
    borderWidth: 1.5,
    borderRadius: 12,
    paddingLeft: 15,
    marginTop: 18,
    backgroundColor: '#F8F8FF', 
    borderColor: '#000',
  },
  btnArea: {
    width: 130,
    borderRadius: 7,
    padding: 12,
    marginTop: 50,
    marginRight: 26,
    shadowColor: '#000',
    elevation: 20,
    alignSelf: 'flex-end',
  },
  btn: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 350,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  alertText: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#4B0082',
    borderRadius: 5,
    padding: 10,
    width: 100,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

