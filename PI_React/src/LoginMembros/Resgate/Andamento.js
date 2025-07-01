import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Background, Header, Tabela, Linha, Texto, TextoStatus, BtnArea, Btn, Area, BtnRow, BtnTxt2,  } from "./styles";
import { View, TouchableOpacity, FlatList } from "react-native";
import Feather from '@expo/vector-icons/Feather'; 
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const chamadosIniciais = [
  { id: '1', pet: 'Rex', local: 'Rua A, 123', status: 'A caminho', agente: 'Silva' },
  { id: '2', pet: 'Mia', local: 'Av. Central, 456', status: 'Resgatado', agente: 'Souza' },
  { id: '3', pet: 'Bidu', local: 'Rua B, 789', status: 'Em análise', agente: 'Oliveira' },
];

const Andamento = () => {
  const navigation = useNavigation();
  const [chamados, setChamados] = useState(chamadosIniciais);

  const getStatusIcon = (status) => {
    switch (status) {
      case "Resgatado":
        return <Feather name="check-circle" size={18} color="#2e7d32" />;
      case "A caminho":
        return <MaterialIcons name="local-shipping" size={18} color="#f9a825" />;
      default:
        return <Feather name="clock" size={18} color="red" />;
    }
  };

  const renderChamado = ({ item }) => (
    <Tabela>
      <Linha>
        <MaterialIcons name="pets" size={18} color="#555" />
        <Texto> Pet: {item.pet}</Texto>
      </Linha>
      <Linha>
        <Feather name="map-pin" size={18} color="#555" />
        <Texto> Local: {item.local}</Texto>
      </Linha>
      <Linha>
        {getStatusIcon(item.status)}
        <TextoStatus status={item.status}>Status: {item.status}</TextoStatus>
      </Linha>
      <Linha>
        <Feather name="user" size={18} color="#555" />
        <Texto> Agente: {item.agente}</Texto>
      </Linha>
    </Tabela>
  );

  const atualizarChamados = () => {
    // Aqui você pode simular novos dados ou integrar API
    const novosChamados = [...chamados]; // simulação
    setChamados(novosChamados);
  };

  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
  };

  return (
    <Background>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={{ marginRight: 10 }} onPress={navegarPara("Resgate")}>
          <Feather name="arrow-left" size={25}/>
        </TouchableOpacity>
        <Header>Chamados</Header>
      </View>
      <Texto>Aqui você encontra os estados dos resgates</Texto>
      <Area>
        <FlatList
          data={chamados}
          keyExtractor={(item) => item.id}
          renderItem={renderChamado}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </Area>
      <BtnArea>
        <Btn onPress={atualizarChamados} activeOpacity={0.7}>
          <BtnRow>
            <Feather name="refresh-ccw" size={18} color="#fff" />
            <BtnTxt2>Atualizar</BtnTxt2>
          </BtnRow>
        </Btn>
        <Btn onPress={() => navigation.navigate("Solicitacoes")} activeOpacity={0.7}>
          <BtnRow>
            <Feather name="list" size={18} color="#fff" />
            <BtnTxt2 style={{ marginLeft: 5 }}>Resgates</BtnTxt2>
          </BtnRow>
        </Btn>
      </BtnArea>
    </Background>
  );
};

export default Andamento;