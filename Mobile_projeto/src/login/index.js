import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { Background, Container, Titulo, Input, Btn, BtnTxt, Imagem } from "./style";
import Icon from "@react-native-vector-icons/fontawesome6";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const validarLogin = () => {
        if (!email.trim() || !senha.trim()) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        // Aqui você pode adicionar a lógica para autenticação
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={{ flex: 1 }}
        >
            <Background>
                <Container>
                    <Imagem source={require('../assets/pet-friendly.png')} />
                    <Titulo>Login</Titulo>

                    <Input 
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Input 
                        placeholder="Senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                    />

                    <Btn onPress={validarLogin}>
                        <BtnTxt>Entrar</BtnTxt>
                    </Btn>
                </Container>
            </Background>
        </KeyboardAvoidingView>
    );
}

