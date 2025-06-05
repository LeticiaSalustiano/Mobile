import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Background,
  Btn,
  BtnTxt,
  Container,
  Texto,
  Titulo
} from "./styles"; // Agora sem importar Header!
import { Area } from "../Resgate/styles";

const dadosHoras = [
  { id: '1', user: '', dia:'seg', data: '09/06', horas: '09:00 / 13:00' },
  { id: '2', user: '', dia:'ter', data: '10/06', horas: '10:00 / 14:00' },
  { id: '3', user: '', dia:'quar', data: '11/06', horas: '11:00 / 15:00' },
  { id: '4', user: '', dia:'qui', data: '12/06', horas: '12:00 / 16:00' },
  { id: '4', user: '', dia:'sex', data: '13/06', horas: '13:00 / 17:00' },
];

const Funcionarios = () => {
  const navigation = useNavigation();
  const nomeUsuario = "João da ONG";

  return (
    <Background>
      <Titulo>Seja bem-vindo!</Titulo>
      <Texto>{nomeUsuario}</Texto>

      <Container>
        <Texto style={{ marginBottom: 10 }}>Horas Trabalhadas:</Texto>

      <FlatList
          data={dadosHoras}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Texto>- {item.dia}: {item.horas}</Texto>
          )}
          contentContainerStyle={{ marginBottom: 15 }}
        />

        <Btn onPress={() => navigation.navigate("Horas")}>
          <BtnTxt>Ver Detalhes das Horas</BtnTxt>
        </Btn>

        <Btn onPress={() => navigation.navigate("Funcao")}>
          <BtnTxt>Ver Funções Diárias</BtnTxt>
        </Btn>
      </Container>
    </Background>
  );
};

export default Funcionarios;
