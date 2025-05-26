import React, { useMemo } from "react";
import { Container, TipoText, Tipo, IconView, ValorText } from "./styles"; 
import  Icon  from "react-native-vector-icons/Feather";

export default function HistoricoList({data}){

    const valorFormatdo = new Intl.NumberFormat('pt-Br',{
        style: 'currency',
        currency: 'BRL',
    }).format(data.value);
 
    return(
        <Container>
           <Tipo>
             <IconView tipo={data.type}>
                <Icon name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} size={20} color= '#fff'></Icon>
                <TipoText>{data.type}</TipoText>
             </IconView>
           </Tipo>

           <ValorText>
              {valorFormatdo}
           </ValorText>
        </Container>
    )
}