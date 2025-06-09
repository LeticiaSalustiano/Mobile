import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { Background, Btn, BtnTxt, Input, Titulo } from "./styles";

export default function ApoioMembro() {
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [habilidades, setHabilidades] = useState('');

    const validarEEnviar = () => {
        if (!nome.trim() || !contato.trim()) {
            Alert.alert("Erro", "Por favor, preencha o nome e o contato.");
            return;
        }
        Alert.alert("Sucesso", "Cadastro enviado com sucesso!");
        setNome('');
        setContato('');
        setHabilidades('');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <Background>
                <Titulo>Quero ser um membro Voluntário!</Titulo>

                <Input
                    placeholder="Nome completo"
                    value={nome}
                    onChangeText={setNome}
                />
                <Input
                    placeholder="Contato (Telefone ou Email)"
                    value={contato}
                    onChangeText={setContato}
                />
                <Input
                    placeholder="Habilidades (ex: redes sociais, eventos, suporte administrativo)"
                    value={habilidades}
                    onChangeText={setHabilidades}
                />

                <Btn onPress={validarEEnviar}>
                    <BtnTxt>Enviar Cadastro</BtnTxt>
                </Btn>
            </Background>
        </KeyboardAvoidingView>
    );
}

