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
  TextoUser2,
  TextoTipo2,
  TextoMotivo2,
  Textoquan
} from "./styles";
import Icone from "@expo/vector-icons/Feather";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../conexao/firebaseConfig";

export default function MonitoraVeterinario() {
  const navigation = useNavigation();
  const [monitorados, setMonitorados] = useState([]);

  const carregarVeterinarios = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("tipo", "==", "Veterinario"),
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
          quantidade: dados.quantidade || 0, // total de atendimentos
          solicitado: dados.solicitado || 0 // solicitações pendentes
        });
      });

      setMonitorados(lista);
    } catch (error) {
      console.error("Erro ao buscar veterinários:", error);
    }
  };

  useEffect(() => {
    carregarVeterinarios();
  }, []);

  const destaques = monitorados.filter((vet) => vet.quantidade >= 6);

  const corSituacao = (situacao) => {
    switch (situacao) {
      case "Disponível":
        return "#2e7d32";
      case "Em cirurgia":
        return "#d32f2f";
      case "Em consulta":
        return "#f9a825";
      default:
        return "#000";
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
        <UsuariosTitulo style={{ marginTop: -3 }}>Usuários Veterinário</UsuariosTitulo>
      </AreaHeader>

      {/* Tabela com cabeçalho */}
      <Tabela2>
        <Linha2>
          <TextoUser style={{ fontWeight: "bold", marginLeft: 8 }}>Nome</TextoUser>
          <TextoTipo2 style={{ fontWeight: "bold", marginLeft: -20 }}>Situação</TextoTipo2>
          <TextoMotivo style={{ fontWeight: "bold", marginLeft: -25 }}>Qtd</TextoMotivo>
          <Textoquan style={{ fontWeight: "bold" }}>Slctd</Textoquan>
          <View style={{ width: 30 }} />
        </Linha2>

        <FlatList
          data={monitorados}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20, fontStyle: "italic" }}>
              Nenhum veterinário aprovado encontrado.
            </Text>
          }
          renderItem={({ item }) => (
            <Linha2>
              <TextoUser2 numberOfLines={1} ellipsizeMode="tail">{item.user}</TextoUser2>
              <TextoTipo2 style={{ color: corSituacao(item.situacao), marginLeft: -65 }}>{item.situacao}</TextoTipo2>
              <TextoMotivo2 style={{ marginLeft: -20 }}>{item.quantidade}</TextoMotivo2>
              <Textoquan style={{ marginLeft: 4 }}>{item.solicitado}</Textoquan>

              {/* Botão de detalhes */}
              <TouchableOpacity onPress={() => alert(`Mais detalhes de ${item.user}`)} style={{ marginLeft: -10 }}>
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
              <TextoMotivo> • Pets tratados: {vet.quantidade}</TextoMotivo>
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

