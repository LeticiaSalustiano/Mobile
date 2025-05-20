import React, { useState } from "react";

import { Background, Btn, BtnTxt, Input, Titulo, Imagem } from "./styles";

export default function ApoioMembro() {
    const [nome, setNome] = useState('');
    const [contato, setContato] = useState('');
    const [habilidades, setHabilidades] = useState('');

    return (
       <Background>
            <Imagem source={require('../assets/pet-friendly.png')} />
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
    );
}

