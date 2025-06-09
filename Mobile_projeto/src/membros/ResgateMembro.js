import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Background, Btn, BtnTxt, Input, Titulo } from "./styles";

export default function ResgateMembro() {
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [experiencia, setExperiencia] = useState('');

    const validarEEnviar = () => {
        if (!nome.trim() || !contato.trim()) {
            Alert.alert("Erro", "Por favor, preencha o nome e o contato.");
            return;
        }
        Alert.alert("Sucesso", "Cadastro enviado com sucesso!");
        setNome('');
        setContato('');
        setExperiencia('');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Background>
                    <Titulo>Quero ser um membro resgatador!</Titulo>

                    <Input
                        placeholder="Nome completo"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <Input
                        placeholder="Contato (Telefone ou Email)"
                        value={contato}
                        onChangeText={setContato}
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder="Experiência com resgates (opcional)"
                        value={experiencia}
                        onChangeText={setExperiencia}
                    />

                    <Btn onPress={validarEEnviar}>
                        <BtnTxt>Enviar Cadastro</BtnTxt>
                    </Btn>
                </Background>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

