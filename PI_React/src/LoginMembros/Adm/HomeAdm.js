import React, { useEffect, useState } from "react";
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
  Perfil
} from "./styles";

import { FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icone from '@expo/vector-icons/Feather';
import { signOut } from "firebase/auth";

import { db } from "../../conexao/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { View } from "react-native";

export default function HomeAdm() {
  const navigation = useNavigation();
  const nomeAdm = "Letícia";

  const [solicitacoes, setSolicitacoes] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  // Buscar usuários com aprovado == false
  const carregarSolicitacoes = async () => {
    try {
      const q = query(collection(db, "users"), where("aprovado", "==", false));
      const querySnapshot = await getDocs(q);
  
      console.log("Total de solicitações encontradas:", querySnapshot.size); // 👈
  
      const lista = [];
      querySnapshot.forEach((docItem) => {
        lista.push({ id: docItem.id, ...docItem.data() });
      });
  
      setSolicitacoes(lista);
    } catch (error) {
      console.error("Erro ao buscar solicitações:", error);
    }
  };

  // Atualizar para aprovado: true
  const aceitarUsuario = async (id) => {
    try {
      const ref = doc(db, "users", id);
      await updateDoc(ref, { aprovado: true });

      setUsuarios(prev => [...prev, solicitacoes.find(u => u.id === id)]);
      setSolicitacoes(prev => prev.filter(u => u.id !== id));
      Alert.alert("Sucesso", "Usuário aprovado!");
    } catch (error) {
      console.error("Erro ao aprovar:", error);
      Alert.alert("Erro", "Não foi possível aprovar.");
    }
  };

  // Remover do Firestore
  const removerUsuario = async (id) => {
    Alert.alert(
      "Remover usuário",
      "Deseja realmente remover esta solicitação?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: async () => {
            try {
              await deleteDoc(doc(db, "users", id));
              setSolicitacoes(prev => prev.filter(u => u.id !== id));
              Alert.alert("Removido", "Usuário excluído com sucesso!");
            } catch (error) {
              console.error("Erro ao remover:", error);
              Alert.alert("Erro", "Não foi possível remover.");
            }
          }
        }
      ]
    );
  };

  useEffect(() => {
    carregarSolicitacoes();
  }, []);

  // Função para deslogar
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }catch(error) {
      console.log("Erro ao deslogar:", error);
      Alert.alert("Erro", "Não foi possivel sair da conta");
    }
  }

  return (
    <HomeContainer>
      <BotaoSair activeOpacity={0.7} onPress={handleLogout}>
        <Icone name="x" size={25} color={'#000'}></Icone>
      </BotaoSair>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
          renderItem={({ item }) => (
            <Linha>
              <Texto numberOfLines={1}>{item.nome}</Texto>
              <Texto2 numberOfLines={1}>| {item.email}</Texto2>
              <Texto3 numberOfLines={1}>| {item.tipo || "Sem tipo"}</Texto3>

              <BotaoArea>
                <Botao onPress={() => removerUsuario(item.id)} activeOpacity={0.7}>
                  <Icone name="trash" size={20} color={'#FF0000'} />
                </Botao>
                <Botao onPress={() => aceitarUsuario(item.id)} activeOpacity={0.7}>
                  <Icone name="check" size={20} color={'#32CD32'} />
                </Botao>
              </BotaoArea>
            </Linha>
          )}
        />
      </Tabela>

      <BtnArea>
        <Btn onPress={() => navigation.navigate("Usuarios", { admin: nomeAdm, usuarios })} activeOpacity={0.7}>
          <BtnTxt>Usuários</BtnTxt>
        </Btn>
        <Btn onPress={() => navigation.navigate("Conteudo", { admin: nomeAdm })} activeOpacity={0.7}>
          <BtnTxt>Financeiro</BtnTxt>
        </Btn>
      </BtnArea>
    </HomeContainer>
  );
}
