import React, { useMemo } from "react";

import { Container, Label, Balance } from "./styles";

export default function BalanceItem({data}){

    const valorFormatdo = new Intl.NumberFormat('pt-Br',{
        style: 'currency',
        currency: 'BRL',
    }).format(data.saldo);

    const labelName = useMemo(()=> {
        if(data.tag === 'saldo'){
            return{
                label: 'Saldo atual',
                color: '3b3dbf'
            }
        }else if(data.tag === 'receita'){
            return{
                label: 'Entradas diárias',
                color: '00b94a'
            } 
        }else {
            return{
                label: 'Saídas diárias',
                color: 'ef463a'
            } 
        }
    }, [data]);

    return(
        <Container bg={labelName.color}>
            <Label> {labelName.label} </Label>
            <Balance>{valorFormatdo}</Balance>
        </Container>
    )
}