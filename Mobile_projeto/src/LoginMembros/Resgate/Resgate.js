import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Background, Header, Tabela, Linha, Texto, BtnArea, Btn, BtnTxt, Area, } from "./styles";

const Resgate = () => {

    const navigation = useNavigation();

    return (
    <Background>
           <Header>Seja bem Vindo!</Header>
           <Texto>Seu nome</Texto>

        <Area>

          <BtnArea>
              <Btn onPress={() => navigation.navigate("Solicitacoes")}>
                <BtnTxt>Chamados</BtnTxt>
              </Btn>

              <Btn onPress={() => navigation.navigate("Andamento")}>
                <BtnTxt>Tabela</BtnTxt>
              </Btn>
         </BtnArea>
       </Area>
    </Background>
    );
};

export default Resgate;

