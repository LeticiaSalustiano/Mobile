import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icone } from "@expo/vector-icons";
import {
  Background,
  Btn,
  BtnTxt,
  Container,
  Texto,
  Titulo,
  Subtitulo,
} from "./styles";

const Funcionarios = () => {
  const navigation = useNavigation();
  const nomeUsuario = "Ana";

  return (
    <Background>
      <Icone name="user" size={64} color="#14c5ec" style={{ marginBottom: 7, marginTop: 13 }} />

      <Titulo>Bem-vinda de volta, {nomeUsuario}!</Titulo>
      <Subtitulo style={{ textAlign: "center", marginTop: 10 }}>
        Obrigado por fazer parte da nossa missão! 
      </Subtitulo>

      <Container>
        <Texto style={{ marginBottom: 20, textAlign: "center" }}>
          O que você gostaria de acessar hoje?
        </Texto>

        <Btn onPress={() => navigation.navigate("Horas")}>
          <BtnTxt>📅 Ver Detalhes das Horas</BtnTxt>
        </Btn>

        <Btn onPress={() => navigation.navigate("Funcao")}>
          <BtnTxt>🛠️ Ver Funções Diárias</BtnTxt>
        </Btn>
      </Container>
    </Background>
  );
};

export default Funcionarios;
