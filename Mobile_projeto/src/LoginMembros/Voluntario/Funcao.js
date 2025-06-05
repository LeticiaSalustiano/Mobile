import React from "react";
import { Background, Texto, Titulo } from "./styles";
import { View, TouchableOpacity } from "react-native";
import Icone from '@expo/vector-icons/Feather';

const Funcao = () => {
    return(
       <Background>
         <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginRight: 10}} onPress={() => navigation.goBack()}>
                <Icone name="arrow-left" size={25}></Icone>
            </TouchableOpacity>

              <Header>Funções diárias</Header>
         </View>
       </Background>
    );
}

export default Funcao;