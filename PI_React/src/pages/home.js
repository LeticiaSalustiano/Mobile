import React from "react";
import { Image } from "react-native";
import { Container, Texto, Titulo, BtnArea, Btn, BtnTxt } from "../LoginMembros/styles";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navegacao = useNavigation();
    return(
        <Container>
            <Image style={{ width: 270, height: 270, alignSelf: 'center', justifyContent: 'center', margin: 10}} source={require('../assets/pet-friendly.png')}/>
            <Titulo>Bem Vindo(a) ao SafePet</Titulo>
            <Texto>Aqui contribuimos com a saúde e a vida dos nossos pets e apoiamos a causa.</Texto>
            <BtnArea>      
                <Btn onPress={() => navegacao.navigate('Login')} activeOpacity={0.7}>
                    <BtnTxt>Login</BtnTxt>
                </Btn> 
                <Btn onPress={() => navegacao.navigate('Cadastre-se')} activeOpacity={0.7}>
                    <BtnTxt>Faça parte</BtnTxt>
                </Btn>
            </BtnArea>
        </Container>
    );
}

