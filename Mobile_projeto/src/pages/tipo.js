import React from "react";
import { StyleSheet, Text, } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Btn, BtnTxt, BtnArea, Background } from "../../styles";

export default function Tipo() {
    const navegacao = useNavigation();

    return(
        <Background>
            <Text style={styles.titulo}>Escolha sua opção desejada</Text>
         <BtnArea>
             <Btn onPress={() => navegacao.navigate('ResgateMembro')}>
               <BtnTxt>Resgate</BtnTxt>
             </Btn>

             <Btn >
               <BtnTxt>Apoio</BtnTxt>
             </Btn>

             <Btn>
               <BtnTxt>Veterinário</BtnTxt>
             </Btn>
         </BtnArea>  
        </Background>
    );
}

const styles = StyleSheet.create({

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: -200
    },
    
});