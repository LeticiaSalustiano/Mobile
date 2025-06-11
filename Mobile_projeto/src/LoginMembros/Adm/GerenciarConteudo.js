//Aqui vai ficar a parte das doações dos patrocinadores e colaboradores, com metas de um certo valor e quantidade que resta para atingir, Junto com a imagem de um porquinho com dinheito dentro dele (ou pode ser outro icon) e toda a vez que recebermos um valor ele vai aumentando e que apareça a quantidae embaixo

//Pix: 467.926.528-06 (QRcode)

import React from "react";
import { ConteudoContainer, ConteudoTitulo, ConteudoTexto } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icone from '@expo/vector-icons/Feather';

export default function ConteudoAdm() {
 const navigation = useNavigation();

  return (
    <ConteudoContainer>
      <ConteudoTitulo>Metas e Doções</ConteudoTitulo>
      <ConteudoTexto>   

      </ConteudoTexto>

    </ConteudoContainer>
  );
}
