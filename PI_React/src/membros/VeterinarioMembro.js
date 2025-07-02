import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { Background, Btn, BtnTxt, Input, Titulo } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { isValidEmail, isValidTelefone } from "./Cadastro/validacao";
import Icone from '@expo/vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';

export default function ApoioMembro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [crmvImage, setCrmvImage] = useState(null);
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
   
    const selecionarImagem = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
          if (response.assets && response.assets.length > 0) {
            setCrmvImage(response.assets[0]);
          }
        });
      };
     
      const handleCadastro = () => {
        if (!nome || !email || !telefone || !senha || !confirmarSenha || !crmvImage) {
          Alert.alert('Erro', 'Por favor, preencha todos os campos e envie o CRMV.');
          return;
        }
     
        if (!isValidEmail(email)) {
          Alert.alert('Erro', 'Email inválido.');
          return;
        }
     
        if (!isValidTelefone(telefone)) {
          Alert.alert('Erro', 'Telefone inválido. Use o formato (XX) XXXXX-XXXX.');
          return;
        }
     
        if (senha !== confirmarSenha) {
          Alert.alert('Erro', 'As senhas não coincidem.');
          return;
        }
     
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
        // Aqui você pode enviar os dados para o Firebase
      };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <Background>
                <Titulo>Quero ser um membro Voluntário!</Titulo>

                <Input
                    placeholder="Nome completo"
                    value={nome}
                    onChangeText={setNome}
                />
                <Input
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={setTelefone}
                />
                <Input
                    placeholder="Email (Email)"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                <Input
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={!mostrarSenha}
                style= {{flex: 1}}
                />
                <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}> 
                    <Icone name={mostrarSenha ? 'eye-off' : 'eye'} size={20} color={"#888"}></Icone>
                </TouchableOpacity>
            </View>  

            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                <Input
                placeholder="Confirmar senha"
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry={!mostrarConfirmar}
                style= {{flex: 1}}
                />
                <TouchableOpacity onPress={() => setMostrarConfirmar(!mostrarConfirmar)}> 
                    <Icone name={mostrarConfirmar ? 'eye-off' : 'eye'} size={20} color={"#888"}></Icone>
                </TouchableOpacity>
            </View>  
                <TouchableOpacity style={styles.botaoImagem} onPress={selecionarImagem}>
                    <Text style={styles.textoImagem}>
                            {crmvImage ? 'CRMV Enviado' : 'Enviar imagem do CRMV'}
                    </Text>
                    </TouchableOpacity>
                    
                        {crmvImage && (
                    <Image
                            source={{ uri: crmvImage.uri }}
                            style={{ width: 100, height: 100, marginBottom: 10 }}
                            />
                        )}
            
                <Btn onPress={handleCadastro}>
                    <BtnTxt>Enviar Cadastro</BtnTxt>
                </Btn>
            </Background>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, padding: 20, backgroundColor: '#fff',
    },
    titulo: {
      fontSize: 22, fontWeight: 'bold', marginBottom: 20, alignSelf: 'center',
    },
    input: {
      borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
      padding: 10, marginBottom: 10,
    },
    inputSenha: {
      flexDirection: 'row', alignItems: 'center',
      borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
      paddingHorizontal: 10, marginBottom: 10,
    },
    botaoImagem: {
      backgroundColor: '#eee', padding: 12,
      alignItems: 'center', borderRadius: 8, marginBottom: 10,
    },
    textoImagem: {
      color: '#333',
    },
    botao: {
      backgroundColor: '#2e86de', padding: 15,
      alignItems: 'center', borderRadius: 8,
    },
    textoBotao: {
      color: '#fff', fontWeight: 'bold',
    },
  });
