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
  TextoTipo3,
  TextoMotivo3,
  TextoUser3
} from "./styles";
import Icone from "@expo/vector-icons/Feather";
import { FlatList, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

;

export default function MonitoraVoluntario() {
  const navigation = useNavigation();
  const [monitorados, setMonitorados] = useState([]);

  /* Buscar voluntários aprovados do Firestore
  const carregarVoluntarios = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("tipo", "==", "Voluntario"),
        where("aprovado", "==", true)
      );

      const snapshot = await getDocs(q);
      const lista = [];

      snapshot.forEach((doc) => {
        const dados = doc.data();
        lista.push({
          id: doc.id,
          user: dados.nome || "Sem nome",
          situacao: dados.situacao || "Ativo",
          diarias: dados.funcoesRalizadas || "",
          horas: dados.horas || 0
        });
      });

      setMonitorados(lista);
    } catch (error) {
      console.error("Erro ao buscar voluntários:", error);
    }
  };

  useEffect(() => {
    carregarVoluntarios();
  }, []);

  const destaques = monitorados.filter((v) => v.horas >= 100);

  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
  };

  const corSituacao = (situacao) => {
    switch (situacao) {
      case "Ativo":
        return "#2e7d32";
      case "Inativo":
        return "#d32f2f";
      default:
        return "#000";
    }
  };*/

  return (
    <UsuariosContainer>
      <AreaHeader>
        <TouchableOpacity onPress={navegarPara("Usuarios")}>
          <Icone name="arrow-left" size={25} />
        </TouchableOpacity>
        <UsuariosTitulo style={{ marginTop: -3 }}>Usuários Voluntários</UsuariosTitulo>
      </AreaHeader>

      <Tabela2>
        <Linha2 style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextoUser3 style={{ fontWeight: "bold", marginLeft: 8 }}>Nome</TextoUser3>
          <TextoTipo3 style={{ fontWeight: "bold", marginLeft: -10 }}>Situação</TextoTipo3>
          <TextoMotivo3 style={{ fontWeight: "bold", marginLeft: -10 }}>Diarias</TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold", marginLeft: -10 }}>Info</TextoMotivo3>
        </Linha2>

        <FlatList
          data={monitorados}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20, fontStyle: "italic" }}>
              Nenhum voluntário aprovado encontrado.
            </Text>
          }
          renderItem={({ item }) => (
            <Linha2 style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextoUser style={{marginLeft: 13}}></TextoUser>
              <TextoTipo style={{ color: corSituacao(item.situacao), marginLeft: -24 }}></TextoTipo>
              <TextoMotivo>{item.funcoesRalizadas}</TextoMotivo>

              <TouchableOpacity onPress={() => alert(`Mais detalhes de ${item.user}`)} style={{ marginLeft: -10 }}>
                <Icone name="info" size={20} color="#14c5ec" />
              </TouchableOpacity>
            </Linha2>
          )}
        />
      </Tabela2>

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

      <Tabela2>
        <UsuariosTitulo style={{ marginTop: 20 }}>Pendências</UsuariosTitulo>
        <Text style={{ padding: 10, fontStyle: "italic", textAlign: "center" }}>
          Nenhuma pendência no momento.
        </Text>
      </Tabela2>
    </UsuariosContainer>
  );
}
