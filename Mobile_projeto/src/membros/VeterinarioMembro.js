import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Background, Btn, BtnTxt, Input, Titulo, Imagem } from "./styles";

export default function VeterinarioMembro() {
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [crm, setCrm] = useState('');

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={{ flex: 1 }}
           >
         <Background>
                <Titulo>Quero ser um membro Veterinário!</Titulo>
       
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
                    placeholder="CRM Veterinário"
                    value={crm}
                    onChangeText={setCrm}
                />
            <Btn>
                <BtnTxt>Enviar Cadastro</BtnTxt>
            </Btn>
          </Background>
          </KeyboardAvoidingView>
    );
}

