import React, { useState } from "react";

import { Background, Btn, BtnTxt, Input, Titulo, Imagem } from "./styles";

export default function ResgateMembro() {
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [experiencia, setExperiencia] = useState('');

    return (
        <Background>
            <Imagem source={require('../assets/pet-friendly.png')} />
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
            />
            <Input 
                placeholder="Experiência com resgates (opcional)"
                value={experiencia}
                onChangeText={setExperiencia}
            />

            <Btn>
                <BtnTxt>Enviar Cadastro</BtnTxt>
            </Btn>
        </Background>
    );
}

