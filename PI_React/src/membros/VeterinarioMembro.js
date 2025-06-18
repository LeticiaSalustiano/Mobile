import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Background, Btn, BtnTxt, Input, Titulo } from "./styles";
import { db } from "../conexao/firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default function VeterinarioMembro() {
    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [email, setEmail] = useState('');
    const [experiencia, setExperiencia] = useState('');

    const validarEEnviar = async () => {
        const nomeValido = nome.trim().length >= 3;
        const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const contatoValido = telefoneRegex.test(contato.trim());
        const emailValido = emailRegex.test(email.trim());
        const experienciaValida = experiencia.trim() === "" || experiencia.trim().length >= 5;

        if (!nomeValido) {
            Alert.alert("Erro", "Nome deve ter pelo menos 3 caracteres.");
            return;
        }

        if (!contatoValido) {
            Alert.alert("Erro", "Contato deve ser um telefone válido.");
            return;
        }

        if (!emailValido) {
            Alert.alert("Erro", "Email inválido.");
            return;
        }

        if (!experienciaValida) {
            Alert.alert("Erro", "Descreva melhor sua experiência (mínimo 5 caracteres) ou deixe em branco.");
            return;
        }

        try {
            await addDoc(collection(db, "users"), {
                nome: nome.trim(),
                contato: contato.trim(),
                email: email.trim(),
                experiencia: experiencia.trim(),
                tipo: "Veterinario",
                aprovado: false,
                dataCadastro: new Date()
            });

            Alert.alert("Sucesso", "Cadastro enviado com sucesso!");
            setNome('');
            setContato('');
            setEmail('');
            setExperiencia('');
            navigation.navigate("Inicial", { email: email.trim() });

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
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Background>
                    <Titulo>Quero ser um membro veterinário!</Titulo>

                    <Input
                        placeholder="Nome completo"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <Input
                        placeholder="Contato (Seu telefone)"
                        value={contato}
                        onChangeText={setContato}
                        keyboardType="phone-pad"
                    />
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Input
                        placeholder="Experiências ou especializações (opcional)"
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

