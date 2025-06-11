//Nesta página eu quero fazer com que o adm faça o monitoramento dos Resgates

import React, {useState} from "react";
import { Area, AreaHeader, UsuariosContainer, UsuariosTitulo, Tabela2, Linha2, TextoUser, TextoTipo, TextoMotivo } from "./styles";
import Icone from '@expo/vector-icons/Feather';
import { FlatList } from "react-native";

   export default function MonitoraResgate(){
     
    //situacao é se o veterinario está em rota ou não, e quantidade é a quantidade de resgates que ele fez no dia e quantas vezes ele solicitou um veterinário

    const [monitorados, setMonitorados] = useState ([
        {id: '1', user: '', situacao: '', quantidade: '', solicita: ''},
        {id: '2', user: '', situacao: '', quantidade: '', solicita: ''},
        {id: '3', user: '', situacao: '', quantidade: '', solicita: ''}
    ]);

    return (
        <UsuariosContainer>
         <AreaHeader>
         {/*Fazer um botão para que volte a pagina anterior GerenciarUsuarios.js*/}
            <Icone name="arrow-left" size={25}/>
           <UsuariosTitulo style={{marginTop: -3}}> Usuarios Voluntario</UsuariosTitulo>
         </AreaHeader>

         {/*Fazer uma tabela com as legendas (EX. 'nome, situação, quantidade, etc), em cima e os dados da const embaixo para que apareçam para o Adm*/}
         <Tabela2>
            <FlatList
               data={monitorados}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => (
              <Linha2>
                <TextoUser numberOfLines={1} ellipsizeMode="tail">{item.user} </TextoUser>
                <TextoTipo numberOfLines={1} ellipsizeMode="tail">| {item.situacao} </TextoTipo>
                <TextoMotivo numberOfLines={1} ellipsizeMode="tail">| {item.quantidade} Resgates</TextoMotivo>
                <TextoMotivo numberOfLines={1} ellipsizeMode="tail">| {item.solicita} </TextoMotivo>
               </Linha2>
             )}
            />
         </Tabela2>

         {/*Fazer outra tabela para visualizar os Agentes destaques do mês junto com a quantidade de resgates e implementar pendências*/}
        </UsuariosContainer>
    );
}