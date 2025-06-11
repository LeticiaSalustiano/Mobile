//implementar pendencias da página (melhore)

import React, { useState } from "react";
import { FlatList } from "react-native";
import { UsuariosContainer, UsuariosTitulo, UsuariosTitulo2, AreaBtn, Button, TxtBtn, UsuarioSubtitulo, Tabela2, Linha2, TextoUser, TextoTipo, TextoMotivo } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icone from '@expo/vector-icons/Feather';

export default function UsuariosAdm() {
   const navigation = useNavigation();

   const [principais, setPrincipais] = useState ([
    { id: '1', user: 'Letícia', tipo: 'Adm', email: 'leticiasalustiano07@gmail.com', motivo: 'Maior quantidade horas'},
    { id: '2', user: 'Lucas', tipo: 'Resgate', email: 'lucas@gmail.com', motivo: 'Maior quantidade resgates'},
    { id: '3', user: 'Teste', tipo: 'Voluntário', email: 'Teste@gmail.com', motivo: 'Melhor avaliação'}
  ]);


  return (
    <UsuariosContainer>
      
      <UsuariosTitulo>Gerenciar Usuários</UsuariosTitulo>
       <UsuarioSubtitulo>Aqui você monitora seus Agentes </UsuarioSubtitulo>
          <AreaBtn>
            <Button onPress={navigation.navigate("MonitoraVoluntario")}>
              <TxtBtn>Voluntários</TxtBtn>
            </Button>

            <Button onPress={navigation.navigate("MonitoraResgate")}>
              <TxtBtn>Resgates</TxtBtn>
            </Button>

            <Button onPress={navigation.navigate("MonitoraVeterinario")}>
              <TxtBtn>Veterinários</TxtBtn>
            </Button>
          </AreaBtn>

          <UsuariosTitulo2>Príncipais Agentes do Mês</UsuariosTitulo2>

          <Tabela2>
            <FlatList
              data={principais}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Linha2>
                  <TextoUser numberOfLines={1} ellipsizeMode="tail">{item.user} </TextoUser>
                  <TextoTipo numberOfLines={1} ellipsizeMode="tail">| {item.tipo} </TextoTipo>
                  <TextoMotivo numberOfLines={1} ellipsizeMode="tail">| {item.motivo} </TextoMotivo>
                </Linha2>
              )}
            />
      </Tabela2>
    </UsuariosContainer>
  );
}
