import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import { UsuariosContainer, UsuariosTitulo, UsuarioItem, UsuarioNome, UsuarioTipo, BtnRemover, BtnRemoverTxt } from "./styles";

export default function UsuariosAdm() {
  // Dados simulados de usuários
  const [usuarios, setUsuarios] = useState([
    { id: '1', nome: "João Silva", tipo: "Voluntário" },
    { id: '2', nome: "Maria Souza", tipo: "Veterinário" },
    { id: '3', nome: "Carlos Pereira", tipo: "Resgate" },
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
          onPress: () => setUsuarios(prev => prev.filter(u => u.id !== id)) 
        }
      ]
    );
  }

  return (
    <UsuariosContainer>
      <UsuariosTitulo>Gerenciar Usuários</UsuariosTitulo>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UsuarioItem>
            <UsuarioNome>{item.nome}</UsuarioNome>
            <UsuarioTipo>{item.tipo}</UsuarioTipo>
            <BtnRemover onPress={() => removerUsuario(item.id)}>
              <BtnRemoverTxt>Remover</BtnRemoverTxt>
            </BtnRemover>
          </UsuarioItem>
        )}
      />
    </UsuariosContainer>
  );
}
