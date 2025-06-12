import React, { useState } from "react";
import {
  HomeContainer, HomeTitulo, HomeSubtitulo, BtnArea, Btn, BtnTxt,
  Tabela, Linha, Texto, Texto2, Texto3, Botao, BotaoArea, Subtitulo
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Alert } from "react-native";
import Icone from '@expo/vector-icons/Feather';

export default function HomeAdm() {
  const navigation = useNavigation();
  const nomeAdm = "Administrador";

  const [solicitacoes, setSolicitacoes] = useState([
    { id: '1', user: 'Teste', email: 'teste@gmail.com', tipoCadastro: 'Voluntário' }
  ]);

  const [usuarios, setUsuarios] = useState([]);

  function removerUsuario(id) {
    Alert.alert(
      "Remover usuário",
      "Deseja realmente remover esta solicitação?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Remover",
          style: "destructive",
          onPress: () => setSolicitacoes(prev => prev.filter(u => u.id !== id))
        }
      ]
    );
  }

  function aceitarUsuario(id) {
    const usuarioAceito = solicitacoes.find(u => u.id === id);
    if (usuarioAceito) {
      setUsuarios(prev => [...prev, usuarioAceito]);
      setSolicitacoes(prev => prev.filter(u => u.id !== id));
    }
  }

  return (
    <HomeContainer>
      <Icone name="user" size={70} color="#14c5ec" style={{ marginBottom: 12, marginTop: 13, alignSelf: 'center' }} />
      <HomeTitulo>Bem-vindo de volta, {nomeAdm}!</HomeTitulo>
      <HomeSubtitulo>Use a sua tela para gerenciar o sistema.</HomeSubtitulo>

      <Subtitulo>Solicitações</Subtitulo>

      <Tabela>
        <FlatList
          data={solicitacoes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Linha>
              <Texto numberOfLines={1}>{item.user}</Texto>
              <Texto2 numberOfLines={1}>| {item.email}</Texto2>
              <Texto3 numberOfLines={1}>| {item.tipoCadastro}</Texto3>

              <BotaoArea>
                <Botao onPress={() => removerUsuario(item.id)}>
                  <Icone name="trash" size={20} color={'#FF0000'} />
                </Botao>
                <Botao onPress={() => aceitarUsuario(item.id)}>
                  <Icone name="check" size={20} color={'#32CD32'} />
                </Botao>
              </BotaoArea>
            </Linha>
          )}
        />
      </Tabela>

      <BtnArea>
        <Btn onPress={() => navigation.navigate("Usuarios", { admin: nomeAdm, usuarios })}>
          <BtnTxt>Usuários</BtnTxt>
        </Btn>

        <Btn onPress={() => navigation.navigate("Conteudo", { admin: nomeAdm })}>
          <BtnTxt>Financeiro</BtnTxt>
        </Btn>
      </BtnArea>
    </HomeContainer>
  );
}
