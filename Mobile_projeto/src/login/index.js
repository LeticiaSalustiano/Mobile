import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { Background, Container, Titulo, Input, Btn, BtnTxt, Imagem } from "./style";
import { StyleSheet } from "react-native";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroEmail, setErroEmail] = useState(false);
    const [erroSenha, setErroSenha] = useState(false);


    const validarLogin = () => {
        if (!email.trim()) {
            setErroEmail(true);
        } else {
            setErroEmail(false);
        }
    
        if (!senha.trim()) {
            setErroSenha(true);
        } else {
            setErroSenha(false);
        }
    
        if (!email.trim() || !senha.trim()) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }
    
        Alert.alert("Sucesso", "Login realizado com sucesso!");
    };    

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={{ flex: 1 }}
        >
            <Background>
                <Container>
                    <Imagem source={require('../assets/pet-friendly.png')} />
                    <Titulo>Faça seu login para verificar funções</Titulo>

                    <Input
                        style={[styles.input, erroEmail && styles.inputErro]}
                        placeholder="Digite seu email"
                        onChangeText={setEmail}
                        value={email}
                    />

                    <Input
                        style={[styles.input, erroSenha && styles.inputErro]}
                        placeholder="Digite sua senha"
                        secureTextEntry
                        onChangeText={setSenha}
                        value={senha}
                    />

                    <Btn onPress={validarLogin}>
                        <BtnTxt>Entrar</BtnTxt>
                    </Btn>
                </Container>
            </Background>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderColor: "#030303",
        marginBottom: 10,
        backgroundColor: "#f0f8ff"
    },
    inputErro: {
        borderColor: "red",
    },
});


