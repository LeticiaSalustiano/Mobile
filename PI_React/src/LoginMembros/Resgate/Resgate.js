import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Background, Header, Texto, BtnArea, Btn, BtnTxt, StatusResumo, BotaoSair, Perfil, BotaoMapa } from "./styles";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Icone from '@expo/vector-icons/Feather';
import { View } from "react-native";

const Resgate = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const nomeUsuario = route.params?.nome || "Usuário";
  const emailUsuario = route.params?.email || "sem email";
  const [chamadosEmAndamento, setChamadosEmAndamento] = useState(3);

  // Função de navegação
  function voltarLogin() {
    navigation.navigate("Login");
  }
  function verMapa() {
    navigation.navigate('Mapa');
  }
  return (
    <Background>
      <BotaoSair activeOpacity={0.7} onPress={voltarLogin}>
        <Icone name="x" size={28} color={'#000'}></Icone>
      </BotaoSair>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Perfil>
          <Icone name="user" size={80} color="#14c5ec"/>
        </Perfil>
      </View>

      <Header>Seja bem-vindo, {nomeUsuario}!</Header>
      <Texto>Monitoramento de Resgates da ONG</Texto>

      <StatusResumo>
        <Texto>📋 Resgates em andamento: {chamadosEmAndamento}</Texto>
      </StatusResumo>

      <BtnArea>
        <Btn onPress={() => navigation.navigate("Solicitacoes")} activeOpacity={0.7}>
          <Icone>
            <MaterialIcons name="assignment" size={25} color="#fff" />
          </Icone>
          <BtnTxt>Chamados</BtnTxt>
        </Btn>
        <Btn onPress={() => navigation.navigate("Andamento")} activeOpacity={0.7}>
          <Icone>
            <FontAwesome5 name="table" size={25} color="#fff" />
          </Icone>
          <BtnTxt>Andamento</BtnTxt>
        </Btn>
      </BtnArea>
      <BotaoMapa activeOpacity={0.7} >
        <Icone name="map" size={25} color="#fff"/>
        <BtnTxt>Mapa</BtnTxt>
      </BotaoMapa>
    </Background>
  );
};

export default Resgate;
