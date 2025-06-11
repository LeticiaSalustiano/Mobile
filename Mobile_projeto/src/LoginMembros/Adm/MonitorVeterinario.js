import React, { useState } from "react";
import { TouchableOpacity, FlatList, View, Text } from "react-native";
import {
  Area,
  AreaHeader,
  UsuariosContainer,
  UsuariosTitulo,
  Tabela2,
  Linha2,
  TextoUser,
  TextoTipo,
  TextoMotivo,
  TextoUser2,
  TextoTipo2,
  TextoMotivo2,
  Textoquan
} from "./styles";
import Icone from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function MonitoraVeterinario() {
  const navigation = useNavigation();

  const [monitorados, setMonitorados] = useState([
    { id: "1", user: "Dr. João", situacao: "Em cirurgia", quantidade: 5, solicitado: 3 },
    { id: "2", user: "Dra. Ana", situacao: "Disponível", quantidade: 8, solicitado: 1 },
    { id: "3", user: "Dr. Pedro", situacao: "Em consulta", quantidade: 6, solicitado: 2 }
  ]);

  const destaques = monitorados.filter((vet) => vet.quantidade >= 6);

  // Função auxiliar para retornar a cor da situação
  const corSituacao = (situacao) => {
    switch (situacao) {
      case "Disponível":
        return "#2e7d32"; // verde
      case "Em cirurgia":
        return "#d32f2f"; // vermelho
      case "Em consulta":
        return "#f9a825"; // amarelo
      default:
        return "#000"; // padrão
    }
  };

  return (
    <UsuariosContainer>
      {/* Cabeçalho */}
      <AreaHeader>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icone name="arrow-left" size={25} />
        </TouchableOpacity>
        <UsuariosTitulo style={{ marginTop: -3 }}>Usuarios Veterinário</UsuariosTitulo>
      </AreaHeader>

      {/* Tabela com cabeçalho */}
      <Tabela2>
        <Linha2>
          <TextoUser style={{ fontWeight: "bold" }}>Nome |</TextoUser>
          <TextoTipo2 style={{ fontWeight: "bold" }}>Situação |</TextoTipo2>
          <TextoMotivo style={{ fontWeight: "bold" }}>Qtd | Solicitado</TextoMotivo>
          <View style={{ width: 30 }} /> {/* Espaço para ícone */}
        </Linha2>

        <FlatList
          data={monitorados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Linha2>
              <TextoUser2 numberOfLines={1} ellipsizeMode="tail">{item.user}</TextoUser2>
              <TextoTipo2 style={{ color: corSituacao(item.situacao), marginLeft: -50 }}>{item.situacao}</TextoTipo2>
              <TextoMotivo2>{item.quantidade} </TextoMotivo2>
              <Textoquan>{item.solicitado}</Textoquan>

              {/* Botão de detalhes */}
              <TouchableOpacity onPress={() => alert(`Mais detalhes de ${item.user}`)}>
                <Icone name="info" size={20} color="#14c5ec" />
              </TouchableOpacity>
            </Linha2>
          )}
        />
      </Tabela2>

      {/* Destaques do mês */}
      <Tabela2>
        <UsuariosTitulo style={{ marginTop: 20 }}>Destaques do Mês</UsuariosTitulo>
        {destaques.length > 0 ? (
          destaques.map((vet) => (
            <Linha2 key={vet.id}>
              <TextoUser>{vet.user}</TextoUser>
              <TextoMotivo>• Pets tratados: {vet.quantidade}</TextoMotivo>
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
