//Nesta página eu quero fazer com que o adm faça o monitoramento dos Voluntarios

import React, {useState} from "react";
import { Area, AreaHeader, UsuariosContainer, UsuariosTitulo, Tabela2, Linha2, TextoMotivo, TextoTipo, TextoUser } from "./styles";
import Icone from '@expo/vector-icons/Feather';
import { FlatList } from "react-native";

   export default function MonitoraVoluntario(){
     
    //situacao é se o voluntario está ativo ou não, e tempo é o tempo que ele está na Ong (quantidade de anos ou meses)
    const [monitorados, setMonitorados] = useState ([
        {id: '1', user: '', situacao: '', tempo: ''},
        {id: '2', user: '', situacao: '', tempo: ''},
        {id: '3', user: '', situacao: '', tempo: ''}
    ]);

    return (
        <UsuariosContainer>
         <AreaHeader>
         {/*Fazer um botão para que volte a pagina anterior GerenciarUsuarios.js*/}
            <Icone name="arrow-left" size={25}/>
           <UsuariosTitulo style={{marginTop: -3}}> Usuarios Voluntario</UsuariosTitulo>
         </AreaHeader>

         {/*Fazer uma tabela com as legendas (EX. 'nome, situação, tempo), em cima e os dados da const embaixo para que apareçam para o Adm*/}
         <Tabela2>
            <FlatList
               data={monitorados}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => (
              <Linha2>
                <TextoUser numberOfLines={1} ellipsizeMode="tail">{item.user} </TextoUser>
                <TextoTipo numberOfLines={1} ellipsizeMode="tail">| {item.situacao} </TextoTipo>
                <TextoMotivo numberOfLines={1} ellipsizeMode="tail">| {item.tempo} </TextoMotivo>
               </Linha2>
             )}
            />
         </Tabela2>

         {/*Fazer outra tabela para visualizar os voluntários destaques do mês e o total de horas trabalhadas e implementar pendências*/}
        </UsuariosContainer>
    );
}