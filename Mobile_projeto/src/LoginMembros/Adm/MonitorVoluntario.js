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
  TextoTipo3,
  TextoMotivo3,
  TextoUser3
} from "./styles";
import Icone from "@expo/vector-icons/Feather";
import { FlatList, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MonitoraVoluntario() {
  const navigation = useNavigation();

  // Simulação de voluntários
  const [monitorados, setMonitorados] = useState([
    { id: "1", user: "Juliana", situacao: "Ativo", tempo: "2 anos", horas: 140 },
    { id: "2", user: "Marcos", situacao: "Inativo", tempo: "8 meses", horas: 80 },
    { id: "3", user: "Clara", situacao: "Ativo", tempo: "1 ano", horas: 160 }
  ]);

  const destaques = monitorados.filter((v) => v.horas >= 100);

  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
  };

  // Função auxiliar para retornar a cor da situação
  const corSituacao = (situacao) => {
    switch (situacao) {
      case "Ativo":
        return "#2e7d32"; // verde
      case "Inativo":
        return "#d32f2f"; // vermelho
      default:
        return "#000"; // padrão
    }
  };

  return (
    <UsuariosContainer>
      {/* Cabeçalho */}
      <AreaHeader>
        <TouchableOpacity onPress={navegarPara("Usuarios")}>
          <Icone name="arrow-left" size={25} />
        </TouchableOpacity>
        <UsuariosTitulo style={{ marginTop: -3 }}>Usuários Voluntários</UsuariosTitulo>
      </AreaHeader>

      {/* Tabela com cabeçalho */}
      <Tabela2>
        <Linha2 style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextoUser3 style={{ fontWeight: "bold", marginLeft: 8 }}>Nome</TextoUser3>
          <TextoTipo3 style={{ fontWeight: "bold", marginLeft: -10 }}>Situação</TextoTipo3>
          <TextoMotivo3 style={{ fontWeight: "bold", marginLeft: -10 }}>Tempo</TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold", marginLeft: -10 }}>Info</TextoMotivo3>
        </Linha2>

        <FlatList
          data={monitorados}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20, fontStyle: "italic" }}>
              Nenhum voluntário encontrado.
            </Text>
          }
          renderItem={({ item }) => (
            <Linha2 style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextoUser>{item.user}</TextoUser>
              <TextoTipo style={{color: corSituacao(item.situacao)}}>{item.situacao}</TextoTipo>
              <TextoMotivo>{item.tempo}</TextoMotivo>

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
          destaques.map((vol) => (
            <Linha2 key={vol.id}>
              <TextoUser>{vol.user}</TextoUser>
              <TextoMotivo> • Horas trabalhadas: </TextoMotivo>
              <TextoUser>{vol.horas}h</TextoUser>
            </Linha2>
          ))
        ) : (
          <Text style={{ padding: 10, fontStyle: "italic", textAlign: "center" }}>
            Nenhum destaque no momento.
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
