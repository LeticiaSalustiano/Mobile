import React, { useMemo } from "react";
import { Container, TipoText, Tipo, IconView, ValorText } from "./styles"; 
import  Icon  from "react-native-vector-icons/Feather";
import { TouchableWithoutFeedback, Alert } from "react-native";

export default function HistoricoList({data, deleteItem}){

    const valorFormatdo = new Intl.NumberFormat('pt-Br',{
        style: 'currency',
        currency: 'BRL',
    }).format(data.value);

    function handleDeleteItem(){
        //alert('Clicou')
        Alert.alert(
            'Atenção',
            'Você tem certeza de que deseja deletar este registro?',
            [{text: 'Cancelar', style: 'cancel'}, 
             {text: 'Confirmar', onPress:()=>deleteItem(data.id)}]
        )
    }
 
    return(
      <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
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
    </TouchableWithoutFeedback>
    )
}