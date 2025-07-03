import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import { Background, Btn, BtnTxt, Input, Titulo } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { isValidEmail, isValidTelefone } from "./Cadastro/validacao";
import Icone from "@expo/vector-icons/Feather";

import { db } from "../conexao/config";
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function ApoioMembro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  const navigation = useNavigation();

  const handleCadastro = async () => {
    if (!nome || !email || !telefone || !senha || !confirmarSenha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert("Erro", "Email inválido.");
      return;
    }

    if (!isValidTelefone(telefone)) {
      Alert.alert("Erro", "Telefone inválido. Use o formato (XX) XXXXX-XXXX.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    try {
      await addDoc(collection(db, "veterinario"), {
        nome,
        email,
        telefone,
        tipo: "veterinario",
        aprovado: false,
        criadoEm: new Date(),
      });

      Alert.alert("Sucesso", "Cadastro enviado! Aguarde a aprovação.");

      // Limpar campos
      setNome("");
      setEmail("");
      setTelefone("");
      setSenha("");
      setConfirmarSenha("");

      navigation.goBack();
    } catch (error) {
      console.error("Erro ao cadastrar veterinário:", error);
      Alert.alert("Erro", "Não foi possível realizar o cadastro.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Background>
        <Titulo>Quero ser um membro Veterinário!</Titulo>

        <Input placeholder="Nome completo" value={nome} onChangeText={setNome} />
        <Input placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
        <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <Input
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Icone name={mostrarSenha ? "eye-off" : "eye"} size={20} color={"#888"} />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <Input
            placeholder="Confirmar senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry={!mostrarConfirmar}
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={() => setMostrarConfirmar(!mostrarConfirmar)}>
            <Icone name={mostrarConfirmar ? "eye-off" : "eye"} size={20} color={"#888"} />
          </TouchableOpacity>
        </View>

        <Btn onPress={handleCadastro}>
          <BtnTxt>Enviar Cadastro</BtnTxt>
        </Btn>
      </Background>
    </KeyboardAvoidingView>
  );
}
