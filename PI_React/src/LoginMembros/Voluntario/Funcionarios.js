import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icone } from "@expo/vector-icons";
import {
  Background,
  Btn,
  BtnTxt,
  Container,
  Texto,
  Titulo,
  Subtitulo,
  Perfil,
  BotaoSair
} from "./styles";
import { signOut } from "firebase/auth";
import { Alert } from "react-native";

const Funcionarios = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const nomeUsuario = route.params?.nome || "Usuário";
  const emailUsuario = route.params?.email || "sem@email.com";

  // Função para deslogar
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }catch(error) {
      console.log("Erro ao deslogar:", error);
      Alert.alert("Erro", "Não foi possivel sair da conta");
    }
  }

  return (
    <Background>
      <BotaoSair activeOpacity={0.7} onPress={handleLogout}>
        <Icone name="x" size={25} color={'#000'}></Icone>
      </BotaoSair>   
    
      <Perfil>
        <Icone name="user" size={80} color="#14c5ec"/>
      </Perfil>

      <Titulo>Bem-vinda de volta, {nomeUsuario}!</Titulo>
      <Subtitulo>Obrigado por fazer parte da nossa missão!</Subtitulo>

      <Container>
        <Texto>O que você gostaria de acessar hoje?</Texto>
        <Btn onPress={() => navigation.navigate("Horas", { email: emailUsuario })} activeOpacity={0.7}>
          <BtnTxt>📅 Ver Detalhes das Horas</BtnTxt>
        </Btn>
        <Btn onPress={() => navigation.navigate("Funcao", { email: emailUsuario })} activeOpacity={0.7}>
          <BtnTxt>🛠️ Ver Funções Diárias</BtnTxt>
        </Btn>
      </Container>
    </Background>
  );
};

export default Funcionarios;
