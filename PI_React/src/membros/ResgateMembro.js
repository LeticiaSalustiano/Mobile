import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, TouchableOpacity, View } from "react-native";
import { Background, Btn, BtnTxt, Input, Titulo } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { isValidEmail, isValidTelefone } from "./Cadastro/validacao";
import Icone from '@expo/vector-icons/Feather';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../conexao/config';

export default function ApoioMembro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  const navigation = useNavigation();

  const handleCadastro = async () => {
    // 🔒 Validações
    if (!nome || !email || !telefone || !experiencia || !senha || !confirmarSenha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Erro', 'E-mail inválido.');
      return;
    }

    if (!isValidTelefone(telefone)) {
      Alert.alert('Erro', 'Telefone inválido. Use o formato (XX) XXXXX-XXXX.');
      return;
    }

    if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, 'usuarios', uid), {
        nome,
        email,
        telefone,
        tipo: 'voluntario',
        experiencia
      });

      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.goBack(); // ou redirecionar para outra tela
    } catch (error) {
      console.error(error);
      Alert.alert('Erro ao cadastrar', error.message);
    }
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
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          placeholder="Experiência"
          value={experiencia}
          onChangeText={setExperiencia}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Input
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Icone name={mostrarSenha ? 'eye-off' : 'eye'} size={20} color={"#888"} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Input
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry={!mostrarConfirmar}
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={() => setMostrarConfirmar(!mostrarConfirmar)}>
            <Icone name={mostrarConfirmar ? 'eye-off' : 'eye'} size={20} color={"#888"} />
          </TouchableOpacity>
        </View>

        <Btn onPress={handleCadastro}>
          <BtnTxt>Enviar Cadastro</BtnTxt>
        </Btn>
      </Background>
    </KeyboardAvoidingView>
  );
}
