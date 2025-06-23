import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Background, Header, Texto, BtnArea, Btn, BtnTxt, Area, StatusResumo } from "./styles";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Icone from '@expo/vector-icons/Feather';
import { TouchableOpacity } from "react-native";

const Resgate = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const nomeUsuario = route.params?.nome || "Usuário";
  const emailUsuario = route.params?.email || "sem email";

  const [chamadosEmAndamento, setChamadosEmAndamento] = useState(3);

  return (
    <Background>
      <TouchableOpacity style={{alignSelf: 'flex-end'}}>
        <Icone name="x" size={25}></Icone>
      </TouchableOpacity> 

      <Icone
        name="user"
        size={64}
        color="#14c5ec"
        style={{ marginBottom: 10, marginTop: 13, alignSelf: 'center' }}
      />
      <Header>Seja bem-vindo, {nomeUsuario}!</Header>
      <Texto>Monitoramento de Resgates da ONG</Texto>

      <StatusResumo>
        <Texto>📋 Resgates em andamento: {chamadosEmAndamento}</Texto>
      </StatusResumo>

      <Area>
        <BtnArea>
          <Btn onPress={() => navigation.navigate("Solicitacoes")} activeOpacity={0.7}>
            <Icone>
              <MaterialIcons name="assignment" size={22} color="#fff" />
            </Icone>
            <BtnTxt>Chamados</BtnTxt>
          </Btn>

          <Btn onPress={() => navigation.navigate("Andamento")} activeOpacity={0.7}>
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
