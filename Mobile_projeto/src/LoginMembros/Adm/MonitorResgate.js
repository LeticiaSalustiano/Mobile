import React, { useState } from "react";
import {
  AreaHeader,
  UsuariosContainer,
  UsuariosTitulo,
  Tabela2,
  Linha2,
  TextoUser,
  TextoTipo,
  TextoMotivo,
  TextoUser3,
  TextoTipo3,
  TextoMotivo3
} from "./styles";
import Icone from "@expo/vector-icons/Feather";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MonitoraResgate() {
  const navigation = useNavigation();

  const [monitorados, setMonitorados] = useState([
    { id: "1", user: "Valentin", situacao: "Em rota", quantidade: 5, solicita: 1 },
    { id: "2", user: "Maria", situacao: "Disponível", quantidade: 8, solicita: 2 },
    { id: "3", user: "julian", situacao: "Retornando", quantidade: 3, solicita: 0 }
  ]);

  const destaques = monitorados.filter((agente) => agente.quantidade >= 5);

  // Função auxiliar para retornar a cor da situação
  const corSituacao = (situacao) => {
    switch (situacao) {
      case "Disponível":
        return "#2e7d32"; // verde
      case "Em rota":
        return "#d32f2f"; // vermelho
      case "Retornando":
        return "#f9a825"; // amarelo
      default:
        return "#000"; // padrão
    }
  };

  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
  };

  return (
    <UsuariosContainer>
      {/* Cabeçalho */}
      <AreaHeader>
        <TouchableOpacity onPress={navegarPara("Usuarios")}>
          <Icone name="arrow-left" size={25} />
        </TouchableOpacity>
        <UsuariosTitulo style={{ marginTop: -3 }}>Usuários Resgate</UsuariosTitulo>
      </AreaHeader>

      {/* Tabela com cabeçalho */}
      <Tabela2>
        <Linha2 style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextoUser3 style={{ fontWeight: "bold" }}>Nome </TextoUser3>
          <TextoTipo3 style={{ fontWeight: "bold" }}>Situação </TextoTipo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Res </TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Sol</TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Info</TextoMotivo3>
        </Linha2>

        <FlatList
          data={monitorados}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20, fontStyle: "italic",  }}>
              Nenhum agente de resgate encontrado.
            </Text>
          }
          renderItem={({ item }) => (
            <Linha2 style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextoUser numberOfLines={1}>{item.user}</TextoUser>
              <TextoTipo style={{ color: corSituacao(item.situacao), marginLeft: -30}}>{item.situacao}</TextoTipo>
              <TextoMotivo style={{marginLeft: -10}}>{item.quantidade}</TextoMotivo>
              <TextoMotivo style={{marginRight: 10}}>{item.solicita}</TextoMotivo>

              {/* Botão de detalhes */}
              <TouchableOpacity onPress={() => alert(`Mais detalhes de ${item.user}`)} style={{ marginLeft: -10}}>
                <Icone name="info" size={20} color="#14c5ec" />
              </TouchableOpacity>
            </Linha2>
          )}
        />
      </Tabela2>

      {/* Destaques do Mês */}
      <Tabela2>
        <UsuariosTitulo style={{ marginTop: 20 }}>Destaques do Mês</UsuariosTitulo>
        {destaques.length > 0 ? (
          destaques.map((agente) => (
            <Linha2 key={agente.id}>
              <TextoUser>{agente.user}</TextoUser>
              <TextoMotivo> • Resgates: {agente.quantidade}</TextoMotivo>
            </Linha2>
          ))
        ) : (
          <Text style={{ padding: 10, fontStyle: "italic", textAlign: "center" }}>
            Nenhum destaque encontrado.
          </Text>
        )}
      </Tabela2>

      {/* Pendências */}
            <Tabela2>
              <UsuariosTitulo style={{ marginTop: 20 }}>Pendências</UsuariosTitulo>
              <Text style={{ padding: 10, fontStyle: "italic", textAlign: "center" }}>
                Nenhuma pendência no momento.
              </Text>
            </Tabela2>
    </UsuariosContainer>
  );
}
