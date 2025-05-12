import React, { useContext } from "react";
import { Platform } from "react-native";

import { Background, Container, InputArea, TextoInput, SubmitBtn, SubmitTxt } from "../routes/style";

import { AuthContext } from "../../contexts/auth";

export default function SingUp(){

    const { user } = useContext( AuthContext )

     function handleSignUp(){
        console.log(user);
     }

    return(
        <Background>
            <Container behavior={Platform.OS==='ios'?'padding':'padding'}>
               <InputArea>
                  <TextoInput
                    placeholder="Seu nome"/>
               </InputArea>
               <InputArea>
                  <TextoInput
                    placeholder="Email"/>
               </InputArea>
               <InputArea>
                  <TextoInput
                    placeholder="Senha"/>
               </InputArea>

               <SubmitBtn activeOpacity={0.5} onPress={handleSignUp}>
                    <SubmitTxt>Cadastrar</SubmitTxt>
               </SubmitBtn>

            </Container>
        </Background>
    )
}