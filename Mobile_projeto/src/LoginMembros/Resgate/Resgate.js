
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Background, Header, Texto, BtnArea, Btn, BtnTxt, Area, StatusResumo,  } from "./styles";

import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Icone from '@expo/vector-icons/Feather';

const Resgate = () => {
  const navigation = useNavigation();

  const [nomeAgente, setNomeAgente] = useState("Agente Silva"); // Nome pode vir via props, context ou storage
  const [chamadosEmAndamento, setChamadosEmAndamento] = useState(3); // Pode ser atualizado dinamicamente

  // Simular chamada à API
  useEffect(() => {
    // Ex: fetchChamados().then(data => setChamadosEmAndamento(data.length));
  }, []);

  return (
    <Background>

      <Icone name="user" size={64} color="#14c5ec" style={{ marginBottom: 10, marginTop: 13, alignSelf: 'center' }} />
      <Header>Seja bem-vindo, {nomeAgente}!</Header>
      <Texto>Monitoramento de Resgates da ONG</Texto>

      <StatusResumo>
        <Texto>📋 Resgates em andamento: {chamadosEmAndamento}</Texto>
      </StatusResumo>

      <Area>
        <BtnArea>
          <Btn onPress={() => navigation.navigate("Solicitacoes")}>
            <Icone>
              <MaterialIcons name="assignment" size={22} color="#fff" />
            </Icone>
            <BtnTxt>Chamados</BtnTxt>
          </Btn>

          <Btn onPress={() => navigation.navigate("Andamento")}>
            <Icone>
              <FontAwesome5 name="table" size={20} color="#fff" />
            </Icone>
            <BtnTxt>Andamento</BtnTxt>
          </Btn>
        </BtnArea>
      </Area>
    </Background>
  );
};

export default Resgate;
