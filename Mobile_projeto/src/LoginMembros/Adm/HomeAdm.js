import React from "react";
import { HomeContainer, HomeTitulo, HomeSubtitulo } from "./styles";

export default function HomeAdm() {
  const nomeAdm = "Administrador"; // Você pode buscar isso do login real

  return (
    <HomeContainer>
      <HomeTitulo>Bem-vindo de volta, {nomeAdm}!</HomeTitulo>
      <HomeSubtitulo>Use o menu ao lado para gerenciar o sistema.</HomeSubtitulo>
    </HomeContainer>
  );
}
