import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Text } from "react-native";
import { Background, Container, Titulo, Input, Btn, BtnTxt, Imagem } from "./style";
import { StyleSheet } from "react-native";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroEmail, setErroEmail] = useState(false);
    const [erroSenha, setErroSenha] = useState(false);

    const validarLogin = () => {
        let valid = true;

        if (!email.trim()) {
            setErroEmail(true);
            valid = false;
        } else {
            setErroEmail(false);
        }
    
        if (!senha.trim()) {
            setErroSenha(true);
            valid = false;
        } else {
            setErroSenha(false);
        }
    
        if (!valid) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }
    
        Alert.alert("Sucesso", "Login realizado com sucesso!");
        // Opcional: limpar campos após login
        // setEmail('');
        // setSenha('');
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
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    {erroEmail && <Text style={styles.erroTexto}>Por favor, insira um email válido.</Text>}

                    <Input
                        style={[styles.input, erroSenha && styles.inputErro]}
                        placeholder="Digite sua senha"
                        secureTextEntry
                        onChangeText={setSenha}
                        value={senha}
                    />
                    {erroSenha && <Text style={styles.erroTexto}>Por favor, insira sua senha.</Text>}

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
        marginBottom: 5,
        backgroundColor: "#f0f8ff"
    },
    inputErro: {
        borderColor: "red",
    },
    erroTexto: {
        color: "red",
        marginBottom: 10,
        fontSize: 14,
    },
});

