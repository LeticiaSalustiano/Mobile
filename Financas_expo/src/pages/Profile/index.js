import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Message, Name, NewLink, NewText, LogoutBtn, LogoutTxt } from "./styles";
import Header from "../../components/header";
import { AuthContext } from "../../contexts/auth";

export default function Profile(){

    const { user, signOut } = useContext(AuthContext);

    const navigation = useNavigation();

    return(
        <Container>
           <Header title='Meu Perfil'/>
              <Message>Bem vindo de volta!</Message>
              <Name>{user && user.name}</Name>

              <NewLink onPress={()=> navigation.navigate('Registrando')}>
                 <NewText>Registrar gastos</NewText>
              </NewLink>

              <LogoutBtn onPress={()=> signOut()}>
                 <LogoutTxt>Sair</LogoutTxt>
              </LogoutBtn>
        </Container>
    )
}