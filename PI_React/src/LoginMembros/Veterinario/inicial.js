import React, { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Background,
  Header,
  Tabela,
  Linha,
  Texto,
  BtnArea,
  Btn,
  BtnTxt,
  Subtitulo,
  BotaoSair
} from "./styles";
import Icone from '@expo/vector-icons/Feather';
import { signOut } from "firebase/auth";
import { Alert } from "react-native";

const horariosIniciais = [
  { id: "1", horario: "09:00 AM - 28/05/2025", status: "Disponível" },
  { id: "2", horario: "10:00 AM - 29/05/2025", status: "Ocupado" },
  { id: "3", horario: "11:30 AM - 29/05/2025", status: "Disponível" },
  { id: "4", horario: "14:00 PM - 30/05/2025", status: "Ocupado" },
  { id: "5", horario: "15:30 PM - 30/05/2025", status: "Disponível" },
  { id: "6", horario: "16:30 PM - 01/06/2025", status: "Ocupado" },
  { id: "7", horario: "08:30 AM - 02/06/2025", status: "Disponível" },
  { id: "8", horario: "13:00 PM - 02/06/2025", status: "Ocupado" },
  { id: "9", horario: "17:00 PM - 03/06/2025", status: "Disponível" },
];

const Inicial = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const nomeUsuario = route.params?.nome || "Usuário";
  const emailUsuario = route.params?.email || "sem@email.com";

  const [mostrarDisponiveis, setMostrarDisponiveis] = useState(false);

  const horariosFiltrados = mostrarDisponiveis
    ? horariosIniciais.filter((item) => item.status === "Disponível")
    : horariosIniciais;

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
      
      <Header style={{marginTop: -25}}>Bem vindo de volta</Header>
      <Subtitulo>{nomeUsuario}!</Subtitulo>
      <Header>Horários Consultas</Header>

      <BtnArea>
        <Btn onPress={() => setMostrarDisponiveis(!mostrarDisponiveis)} activeOpacity={0.7}>
          <BtnTxt>{mostrarDisponiveis ? "Mostrar Todos" : "Ver Disponíveis"}</BtnTxt>
        </Btn>
      </BtnArea>

      <Tabela>
        <FlatList
          data={horariosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Linha>
              <Texto>{item.horario}</Texto>
              <Texto style={{ color: item.status === "Disponível" ? "green" : "red" }}>
                {item.status}
              </Texto>
            </Linha>
          )}
        />
      </Tabela>

      <BtnArea>
        <Btn onPress={() => navigation.navigate("Consultas", { email: emailUsuario })} activeOpacity={0.7}>
          <BtnTxt>Consultas</BtnTxt>
        </Btn>
        <Btn onPress={() => navigation.navigate("Agendamento", { email: emailUsuario })} activeOpacity={0.7}>
          <BtnTxt>Agendar</BtnTxt>
        </Btn>
      </BtnArea>
    </Background>
  );
};

export default Inicial;

