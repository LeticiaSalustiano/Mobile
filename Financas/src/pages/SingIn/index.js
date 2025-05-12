import React from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Import dos Styles:
import { Background, Container, Logo, InputArea, TextoInput, SubmitBtn, SubmitTxt, Link, LinkTxt } from "../routes/style";

export default function SingIn(){

    const navigation = useNavigation();

    return(
        <Background>
            <Container behavior={Platform.OS==='ios'?'padding':'padding'}>
                <Logo
                source={require('../../assets/Logo.png')}/>

                <InputArea>
                    <TextoInput
                    placeholder="Digite seu Email"/>
                </InputArea>

                <InputArea>
                    <TextoInput          
                    placeholder="Digite sua Senha"/>
                </InputArea>

                <SubmitBtn activeOpacity={0.5}>
                    <SubmitTxt>Acessar</SubmitTxt>
                </SubmitBtn>

                <Link onPress={()=> navigation.navigate('SingUp')}>
                    <LinkTxt>Criar uma nova conta!</LinkTxt>
                </Link>

            </Container>
        </Background>
    )
}


