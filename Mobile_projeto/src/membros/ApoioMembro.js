import React, { useState } from "react";
import {  KeyboardAvoidingView, Platform } from "react-native";
import { Background, Btn, BtnTxt, Input, Titulo, Imagem } from "./styles";

export default function ApoioMembro() {
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [habilidades, setHabilidades] = useState('');

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
            
            <Btn>
                <BtnTxt>Enviar Cadastro</BtnTxt>
            </Btn>
        </Background>
    </KeyboardAvoidingView>
    );
}

