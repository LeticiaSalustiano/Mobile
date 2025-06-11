import React, { useState } from "react";
import { HomeContainer, HomeTitulo, HomeSubtitulo, BtnArea, Btn, BtnTxt, Tabela, Linha, Texto, Texto2, Texto3, Botao, BotaoArea, Subtitulo } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Alert } from "react-native";
import Icone from '@expo/vector-icons/Feather';

export default function HomeAdm() {
  const navigation = useNavigation();
  const nomeAdm = "Administrador"; // Pode ser buscado do login real

  const [solicitacoes, setSolicitacoes] = useState ([
    { id: '1', user: 'Leticia', email: 'leticia@gmail.com', tipoCadastro: 'Adm' },
    { id: '2', user: 'Lucas', email: 'lucas@gmail.com', tipoCadastro: 'Resgate' },
    { id: '3', user: 'Teste', email: 'teste@gmail.com', tipoCadastro: 'Voluntário' }
  ]);
  
  
  function removerUsuario(id) {
      Alert.alert(
        "Remover usuário",
        "Deseja realmente remover este usuário?",
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

  return (
    <HomeContainer>
    <Icone name="user" size={70} color="#14c5ec" style={{ marginBottom: 12, marginTop: 13, alignSelf: 'center' }} />
      <HomeTitulo>Bem-vindo de volta, {nomeAdm}!</HomeTitulo>
      <HomeSubtitulo>Use a sua tela para gerenciar o sistema.</HomeSubtitulo>

      <Subtitulo>Solicitações</Subtitulo>

      {/* Tabela das solicitações dos usuários */}
      <Tabela>
        <FlatList
          data={solicitacoes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Linha>
              <Texto numberOfLines={1} ellipsizeMode="tail">{item.user}</Texto>
              <Texto2 numberOfLines={1} ellipsizeMode="tail">| {item.email}</Texto2>
              <Texto3 numberOfLines={1} ellipsizeMode="tail">| {item.tipoCadastro}</Texto3>

              <BotaoArea>
                {/* Botão Excluir */}
                <Botao activeOpacity={0.7} onPress={() => removerUsuario(item.id)}>
                  <Icone name="trash" size={20} color={'#FF0000'}/>
                </Botao>
                {/* Botão Adicionar */}
                <Botao activeOpacity={0.7}>
                  <Icone name="check" size={20} color={'#32CD32'}/>
                </Botao>
              </BotaoArea>
            </Linha>
          )}
        />
      </Tabela>

      {/* Área de botões de navegação */}
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
