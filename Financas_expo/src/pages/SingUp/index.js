import React, { useContext, useState } from "react";
import { Platform, ActivityIndicator } from "react-native";

import { Background, Container, InputArea, TextoInput, SubmitBtn, SubmitTxt } from "../../style";

import { AuthContext } from "../../contexts/auth";

export default function SingUp(){

    const { singUp, loadingAuth } = useContext( AuthContext )
    const[nome, setNome] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

     function handleSignUp(){
        singUp(nome,email,password);
     }

    return(
        <Background>
            <Container behavior={Platform.OS==='ios'?'padding':'padding'}>
               <InputArea>
                  <TextoInput
                  value={nome}
                  onChangeText={(text)=> setNome(text)}
                  placeholder="Seu nome"/>
               </InputArea>
               <InputArea>
                  <TextoInput
                  value={email}
                  onChangeText={(text)=> setEmail(text)}
                  placeholder="Email"/>
               </InputArea>
               <InputArea>
                  <TextoInput
                  value={password}
                  onChangeText={(text)=> setPassword(text)}
                  placeholder="Senha"
                  secureTextEntry={true}/>
               </InputArea>

               <SubmitBtn activeOpacity={0.5} onPress={handleSignUp}>
                    {loadingAuth ? (
                     <ActivityIndicator size={20} color={'#f5f5f5'}></ActivityIndicator>
                    ): (
                     <SubmitTxt>Cadastrar</SubmitTxt>
                    )}
               </SubmitBtn>

            </Container>
        </Background>
    )
}