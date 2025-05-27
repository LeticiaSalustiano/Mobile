import React from "react";

import { Background, Titulo, Texto, Btn, BtnTxt, Imagem, BtnArea } from "../../styles";
import { useNavigation } from "@react-navigation/native";

export default function Home() {

    const navegacao = useNavigation();
    
    return(
        <Background>
            <Imagem source={require('../assets/pet-friendly.png')} />
            <Titulo>Bem Vindo(a) ao SafePet</Titulo>
            <Texto>Aqui contribuimos com a saude e a vida dos nossos pets e apoiamos a causa.</Texto>
        <BtnArea>      
           <Btn onPress={() => navegacao.navigate('Login')}>
              <BtnTxt>Login</BtnTxt>
           </Btn> 

           <Btn onPress={() => navegacao.navigate('Cadastre-se')}>
               <BtnTxt>Faça parte</BtnTxt>
           </Btn>
        </BtnArea>
        </Background>
    );
}

