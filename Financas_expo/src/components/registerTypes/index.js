import { useState } from "react";
import { RegisterContainer, RegisterTypeBotao, RegisterLabel } from "./styles";
import Icone from '@expo/vector-icons/Feather';

export default function RegisterTypes({type, sendTypeChanged}) {
    const[typeCheck, setTypeCheck] = useState(type);

    function changeType(nome) {
        if(nome === 'receita') {
            setTypeCheck('receita');
            sendTypeChanged('receita');
        }else {
            setTypeCheck('despesa');
            sendTypeChanged('despesa');
        }
    }
    return(
        <RegisterContainer>
            <RegisterTypeBotao 
                activeOpacity={0.5} 
                checked={typeCheck === 'receita' ? true : false} 
                onPress={()=> changeType('receita')}
            >
                <Icone name="arrow-up" size={25}/> 
                <RegisterLabel>Receita</RegisterLabel>
            </RegisterTypeBotao>
            <RegisterTypeBotao 
                activeOpacity={0.5} 
                checked={typeCheck === 'despesa' ? true : false}
                onPress={()=> changeType('despesa')}
            >
                <Icone name="arrow-down" size={25}/>
                <RegisterLabel>Despesa</RegisterLabel>
            </RegisterTypeBotao>
        </RegisterContainer>
    );
}