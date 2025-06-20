import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Text } from "react-native";
import { Background, Container, Titulo, Input, Btn, BtnTxt, Imagem } from "./style";
import { StyleSheet } from "react-native";

import { db } from "../conexao/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  const validarLogin = async () => {
    if (!email.trim()) {
      setErroEmail(true);
      Alert.alert("Erro", "Por favor, insira um email válido.");
      return;
    }
    setErroEmail(false);
    setLoading(true);

    try {
      // Buscar usuário no Firestore pelo email e aprovado == true
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email.trim()), where("aprovado", "==", true));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert("Erro", "Usuário não encontrado ou não aprovado.");
      } else {
        // Considera o primeiro documento (email único)
        const docSnap = querySnapshot.docs[0];
        const userData = docSnap.data();

        // Navegar conforme o tipo
        switch (userData.tipo) {
          case "Voluntário":
            navigation.navigate("Funcionarios", { userData });
            break;
          case "Resgatador":
            navigation.navigate("Resgate", { userData });
            break;
          case "Veterinário":
            navigation.navigate("Inicial", { userData });
            break;
          case "Adm":
            navigation.navigate("HomeAdm", { userData });
            break;
          default:
            Alert.alert("Erro", "Tipo de usuário desconhecido.");
        }
      }
    } catch (error) {
      console.log("Erro no login:", error);
      Alert.alert("Erro", "Falha ao buscar usuário.");
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

          <Input
            style={[styles.input, erroEmail && styles.inputErro]}
            placeholder="Digite seu email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {erroEmail && <Text style={styles.erroTexto}>Por favor, insira um email válido.</Text>}

          <Btn onPress={validarLogin} disabled={loading}>
            <BtnTxt>{loading ? "Carregando..." : "Entrar"}</BtnTxt>
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
    marginBottom: 5,
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
