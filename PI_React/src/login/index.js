import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { Background, Container, Titulo, Input, Btn, BtnTxt, Imagem } from "./style";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [erroEmail, setErroEmail] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Background>
        <Container>
          <Imagem source={require("../assets/pet-friendly.png")} />
          <Titulo>Faça seu login para verificar funções</Titulo>

          <View style={{marginTop: 10}}>
            <Text style={{fontWeight: 'bold'}}>Email</Text>
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
          </View>

          <Btn activeOpacity={0.7}>
            <BtnTxt>Entrar</BtnTxt>
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
