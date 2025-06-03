import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Background, Header, Tabela, Linha, Texto, BtnArea, Btn, BtnTxt, Area, } from "./styles";
import { View, TouchableOpacity, Text } from "react-native";
import Icone from '@expo/vector-icons/Feather';

const Solicitacoes = () => {

    const navigation = useNavigation();

    return (
    <Background>
         <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight: 5, marginTop: 1}}>
           <Icone name="arrow-left" size={25}></Icone>
        </TouchableOpacity>

      <Header>Chamados</Header>
    </View>
      <Texto>Aqui você encontra os estados dos resgates</Texto>
        <Area>

          <BtnArea>
              <Btn>
                <BtnTxt>Solicitações</BtnTxt>
              </Btn>

              <Btn>
                <BtnTxt>Tabela</BtnTxt>
              </Btn>
         </BtnArea>
       </Area>
    </Background>
    );
};

export default Solicitacoes;
