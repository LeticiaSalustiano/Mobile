import React from "react";
import { StyleSheet, Text, } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Background, BtnArea, Btn, BtnTxt } from "../LoginMembros/styles";

export default function Tipo() {
  const navegacao = useNavigation();
  return(
    <Background>
      <Text style={styles.titulo}>Escolha sua opção desejada</Text>
      <BtnArea>
        <Btn onPress={() => navegacao.navigate('ResgateMembro')} activeOpacity={0.7}>
          <BtnTxt>Resgate</BtnTxt>
        </Btn>
        <Btn onPress={() => navegacao.navigate('ApoioMembro')} activeOpacity={0.7}>
          <BtnTxt>Apoio</BtnTxt>
        </Btn>
        <Btn onPress={() => navegacao.navigate('VeterinarioMembro')} activeOpacity={0.7}>
          <BtnTxt>Veterinário</BtnTxt>
        </Btn>
      </BtnArea>  
    </Background>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: -200,
    textAlign: 'center'
  }, 
});