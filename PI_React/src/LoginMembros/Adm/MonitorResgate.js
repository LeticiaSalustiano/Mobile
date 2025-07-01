import React, { useState, useEffect } from "react";
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
import { FlatList, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function MonitoraResgate() {
  const navigation = useNavigation();
  const [monitorados, setMonitorados] = useState([]);

  /*const carregarAgentes = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("tipo", "==", "Resgatador"),
        where("aprovado", "==", true)
      );

      const snapshot = await getDocs(q);
      const lista = [];

      snapshot.forEach((doc) => {
        const dados = doc.data();
        lista.push({
          id: doc.id,
          user: dados.nome || "Sem nome",
          situacao: dados.situacao || "Disponível",
          quantidade: dados.quantidade || 0, // total de resgates feitos
          solicita: dados.solicita || 0 // número de solicitações em aberto
        });
      });

      setMonitorados(lista);
    } catch (error) {
      console.error("Erro ao buscar agentes de resgate:", error);
    }
  };

  useEffect(() => {
    carregarAgentes();
  }, []);

  const destaques = monitorados.filter((agente) => agente.quantidade >= 5);

  const corSituacao = (situacao) => {
    switch (situacao) {
      case "Disponível":
        return "#2e7d32";
      case "Em rota":
        return "#d32f2f";
      case "Retornando":
        return "#f9a825";
      default:
        return "#000";
    }
  };

  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
  };
*/
  return (
    <UsuariosContainer>
      <AreaHeader>
        <TouchableOpacity onPress={navegarPara("Usuarios")}>
          <Icone name="arrow-left" size={25} />
        </TouchableOpacity>
        <UsuariosTitulo style={{ marginTop: -3 }}>Usuários Resgate</UsuariosTitulo>
      </AreaHeader>

      <Tabela2>
        <Linha2 style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextoUser3 style={{ fontWeight: "bold" }}>Nome</TextoUser3>
          <TextoTipo3 style={{ fontWeight: "bold" }}>Situação</TextoTipo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Rsgt</TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Slctd</TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Info</TextoMotivo3>
        </Linha2>

        <FlatList
          data={monitorados}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20, fontStyle: "italic" }}>
              Nenhum agente de resgate aprovado encontrado.
            </Text>
          }
          renderItem={({ item }) => (
            <Linha2 style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextoUser numberOfLines={1}>{item.user}</TextoUser>
              <TextoTipo style={{ color: corSituacao(item.situacao), marginLeft: -19 }}>
                {item.situacao}
              </TextoTipo>
              <TextoMotivo style={{ marginLeft: -20 }}>{item.quantidade}</TextoMotivo>
              <TextoMotivo style={{ marginRight: 9 }}>{item.solicita}</TextoMotivo>

              <TouchableOpacity onPress={() => alert(`Mais detalhes de ${item.user}`)} style={{ marginLeft: -10 }}>
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
