import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

//Import dos Styles:
import { Background, Container, Logo, InputArea, TextoInput, SubmitBtn, SubmitTxt, Link, LinkTxt } from "../routes/style";

export default function SingIn(){

    const navigation = useNavigation();

    const {singIn} = useContext(AuthContext);

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    function handleSignIn(){
        //alert('Acessar')
        //console.log(email, password)
        singIn(email, password)
     }


    return(
        <Background>
            <Container behavior={Platform.OS==='ios'?'padding':'padding'}>
                <Logo
                source={require('../../assets/Logo.png')}/>

                <InputArea>
                    <TextoInput
                    value={email}
                    onChangeText={(text)=> setEmail(text)}
                    placeholder="Digite seu Email"/>
                </InputArea>

                <InputArea>
                    <TextoInput 
                    value={password}
                    onChangeText={(text)=> setPassword(text)}         
                    placeholder="Digite sua Senha"/>
                </InputArea>

                <SubmitBtn activeOpacity={0.5} onPress={handleSignIn}>
                    <SubmitTxt>Acessar</SubmitTxt>
                </SubmitBtn>

                <Link onPress={()=> navigation.navigate('SingUp')}>
                    <LinkTxt>Criar uma nova conta!</LinkTxt>
                </Link>

            </Container>
        </Background>
    )
}


