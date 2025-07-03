import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import {
  Background,
  Container,
  Titulo,
  Input,
  Btn,
  BtnTxt,
  Imagem,
} from "./style";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../conexao/config";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const colecoes = ["voluntarios", "resgatadores", "veterinario", "adm"];

  const handleLogin = async () => {
    setErroEmail(false);
    setLoading(true);
  
    if (!email) {
      setErroEmail(true);
      Alert.alert("Erro", "Preencha o campo de email.");
      setLoading(false);
      return;
    }
  
    try {
      let usuarioEncontrado = null;
  
      for (const colecao of colecoes) {
        const q = query(
          collection(db, colecao),
          where("email", "==", email)
        );
        const snapshot = await getDocs(q);
  
        if (!snapshot.empty) {
          const dados = snapshot.docs[0].data();
  
          // Se for o email do adm especial, não precisa ser aprovado
          if (email === "leticiasalustiano07@gmail.com" && dados.tipo === "adm") {
            usuarioEncontrado = dados;
            break;
          }
  
          // Para os demais, precisa ser aprovado
          if (dados.aprovado) {
            usuarioEncontrado = dados;
            break;
          }
        }
      }
  
      if (!usuarioEncontrado) {
        Alert.alert(
          "Erro",
          "Email não encontrado ou cadastro ainda não aprovado."
        );
        setLoading(false);
        return;
      }
  
      // Redireciona conforme o tipo
      switch (usuarioEncontrado.tipo) {
        case "adm":
          navigation.reset({ index: 0, routes: [{ name: "Adm" }] });
          break;
        case "voluntario":
          navigation.reset({ index: 0, routes: [{ name: "Funcionarios" }] });
          break;
        case "resgate":
          navigation.reset({ index: 0, routes: [{ name: "Resgate" }] });
          break;
        case "veterinario":
          navigation.reset({ index: 0, routes: [{ name: "Inicial" }] });
          break;
        default:
          Alert.alert("Erro", "Tipo de usuário desconhecido.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      Alert.alert("Erro", "Não foi possível fazer login.");
    }
  
    setLoading(false);
  };
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Background>
        <Container>
          <Imagem source={require("../assets/pet-friendly.png")} />
          <Titulo>Faça seu login para verificar funções</Titulo>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Email</Text>
            <Input
              style={[styles.input, erroEmail && styles.inputErro]}
              placeholder="Digite seu email"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <Btn activeOpacity={0.7} onPress={handleLogin}>
            <BtnTxt>{loading ? "Entrando..." : "Entrar"}</BtnTxt>
          </Btn>
        </Container>
      </Background>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor: "#030303",
    backgroundColor: "#f0f8ff",
  },
  inputErro: {
    borderColor: "red",
  },
  erroTexto: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
});
