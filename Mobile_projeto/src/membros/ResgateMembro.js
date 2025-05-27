import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Background, Btn, BtnTxt, Input, Titulo, Imagem } from "./styles";

export default function ResgateMembro() {
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [experiencia, setExperiencia] = useState('');

   
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
                        onChangeText={(text) => {
                            console.log("Nome:", text); // Depuração
                            setNome(text);
                        }}
                    />
                    <Input 
                        placeholder="Contato (Telefone ou Email)"
                        value={contato}
                        onChangeText={(text) => {
                            console.log("Contato:", text); // Depuração
                            setContato(text);
                        }}
                        keyboardType="email-address"
                    />
                    <Input 
                        placeholder="Experiência com resgates (opcional)"
                        value={experiencia}
                        onChangeText={(text) => {
                            console.log("Experiência:", text); // Depuração
                            setExperiencia(text);
                        }}
                    />

                    <Btn>
                        <BtnTxt>Enviar Cadastro</BtnTxt>
                    </Btn>
                </Background>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
