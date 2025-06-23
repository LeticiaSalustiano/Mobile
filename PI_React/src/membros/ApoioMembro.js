import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform } from "react-native";
import { Background, Btn, BtnTxt, Input, Titulo } from "./styles";
import { db } from "../conexao/firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";

import { useNavigation } from "@react-navigation/native";

export default function ApoioMembro() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [email, setEmail] = useState('');
    const [habilidades, setHabilidades] = useState('');

    const validarEEnviar = async () => {
        const nomeValido = nome.trim().length >= 3;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
        const contatoValido = emailRegex.test(contato) || telefoneRegex.test(contato);
        const habilidadesValida = habilidades.trim() === "" || habilidades.trim().length >= 5;
    
        if (!nomeValido) {
            Alert.alert("Erro", "Nome deve ter pelo menos 3 caracteres.");
            return;
        }
    
        if (!contatoValido) {
            Alert.alert("Erro", "Informe um email ou telefone válido.");
            return;
        }
    
        if (!habilidadesValida) {
            Alert.alert("Erro", "Descreva melhor suas habilidades (mínimo 5 caracteres) ou deixe em branco.");
            return;
        }
    
        try {
            await addDoc(collection(db, "users"), {
                nome: nome.trim(),
                email: email.trim(), 
                contato: contato.trim(),
                habilidades: habilidades.trim(),
                tipo: "Voluntario",
                aprovado: false,
                dataCadastro: new Date()
            });
    
            Alert.alert("Sucesso", "Cadastro enviado com sucesso!");
            setNome('');
            setContato('');
            setEmail('');
            setHabilidades('');
            navigation.navigate("SafePet", { email: email.trim() });

        } catch (error) {
            console.error("Erro ao salvar no Firebase:", error);
            Alert.alert("Erro", "Não foi possível enviar o cadastro.");
        }
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
                    placeholder="Contato (Telefone)"
                    value={contato}
                    onChangeText={setContato}
                />
                <Input
                    placeholder="Email (Email)"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Input
                    placeholder="Habilidades (opcional)"
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
