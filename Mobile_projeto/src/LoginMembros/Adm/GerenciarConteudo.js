import React from "react";
import { ConteudoContainer, ConteudoTitulo, ConteudoTexto } from "./styles";

export default function ConteudoAdm() {
  return (
    <ConteudoContainer>
      <ConteudoTitulo>Gerenciar Conteúdo</ConteudoTitulo>
      <ConteudoTexto>
        Aqui você pode editar e atualizar textos, imagens e outras informações do aplicativo SafePet.
      </ConteudoTexto>
      {/* Futuramente pode adicionar formulários ou editores */}
    </ConteudoContainer>
  );
}
