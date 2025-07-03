import React, { useEffect, useState, useCallback } from "react";
import {
  HomeContainer,
  HomeTitulo,
  HomeSubtitulo,
  BtnArea,
  Btn,
  BtnTxt,
  Tabela,
  Linha,
  Texto,
  Texto2,
  Texto3,
  Botao,
  BotaoArea,
  Subtitulo,
  BotaoSair,
  Perfil,
  Texto5
} from "./styles";
import { FlatList, Alert, View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Icone from "@expo/vector-icons/Feather";

import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../conexao/config";

export default function HomeAdm() {
  const navigation = useNavigation();
  const nomeAdm = "Letícia";

  const [solicitacoes, setSolicitacoes] = useState([]);

  // Buscar solicitações pendentes em múltiplas coleções
  useFocusEffect(
    useCallback(() => {
      const carregarSolicitacoes = async () => {
        try {
          const colecoes = ["usuarios", "resgatadores", "veterinario"];
          let todasSolicitacoes = [];

          for (const col of colecoes) {
            const q = query(collection(db, col), where("aprovado", "==", false));
            const querySnapshot = await getDocs(q);
            const lista = querySnapshot.docs.map((docItem) => ({
              id: docItem.id,
              colecao: col,
              ...docItem.data(),
            }));

            todasSolicitacoes = [...todasSolicitacoes, ...lista];
          }

          setSolicitacoes(todasSolicitacoes);
        } catch (error) {
          console.error("Erro ao buscar solicitações:", error);
        }
      };

      carregarSolicitacoes();
    }, [])
  );

  // Aprovar usuário na coleção correta
  const aceitarUsuario = async (id, colecao) => {
    try {
      const ref = doc(db, colecao, id);
      await updateDoc(ref, { aprovado: true });

      setSolicitacoes((prev) => prev.filter((u) => u.id !== id));
      Alert.alert("Sucesso", "Usuário aprovado!");
    } catch (error) {
      console.error("Erro ao aprovar:", error);
      Alert.alert("Erro", "Não foi possível aprovar.");
    }
  };

  // Remover usuário da coleção correta
  const removerUsuario = (id, colecao) => {
    Alert.alert("Remover usuário", "Deseja realmente remover esta solicitação?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Remover",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteDoc(doc(db, colecao, id));
            setSolicitacoes((prev) => prev.filter((u) => u.id !== id));
            Alert.alert("Removido", "Usuário excluído com sucesso!");
          } catch (error) {
            console.error("Erro ao remover:", error);
            Alert.alert("Erro", "Não foi possível remover.");
          }
        },
      },
    ]);
  };

  return (
    <HomeContainer>
      <BotaoSair activeOpacity={0.7}>
        <Icone name="x" size={25} color={"#000"} />
      </BotaoSair>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Perfil>
          <Icone name="user" size={80} color="#14c5ec" />
        </Perfil>
      </View>
      <HomeTitulo>Bem-vinda de volta, {nomeAdm}!</HomeTitulo>
      <HomeSubtitulo>Use a sua tela para gerenciar o sistema.</HomeSubtitulo>

      <Subtitulo>Solicitações</Subtitulo>

      <Tabela>
        <FlatList
          data={solicitacoes}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Texto5 style={{ textAlign: "center", marginTop: 20, fontStyle: "italic", justifyContent: 'center'}}>
              Nenhuma solicitação pendente.
            </Texto5>
          }
          renderItem={({ item }) => (
            <Linha>
              <Texto numberOfLines={1}>{item.nome}</Texto>
              <Texto2 numberOfLines={1}>| {item.email}</Texto2>
              <Texto3 numberOfLines={1}>| {item.tipo || "Sem tipo"}</Texto3>

              <BotaoArea>
                <Botao onPress={() => removerUsuario(item.id, item.colecao)} activeOpacity={0.7}>
                  <Icone name="trash" size={20} color={"#FF0000"} />
                </Botao>
                <Botao onPress={() => aceitarUsuario(item.id, item.colecao)} activeOpacity={0.7}>
                  <Icone name="check" size={20} color={"#32CD32"} />
                </Botao>
              </BotaoArea>
            </Linha>
          )}
        />
      </Tabela>

      <BtnArea>
        <Btn onPress={() => navigation.navigate("Usuarios", { admin: nomeAdm })} activeOpacity={0.7}>
          <BtnTxt>Usuários</BtnTxt>
        </Btn>
        <Btn onPress={() => navigation.navigate("Conteudo", { admin: nomeAdm })} activeOpacity={0.7}>
          <BtnTxt>Financeiro</BtnTxt>
        </Btn>
      </BtnArea>
    </HomeContainer>
  );
}
