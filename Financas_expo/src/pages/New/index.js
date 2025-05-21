import React from "react";
import Header from "../../components/header";

import { SafeAreaView } from "react-native";

import { Background } from "./styles";

export default function New(){
    return(
        <Background>
           <Header title='Registrando'></Header>
           <SafeAreaView style={{marginTop: 14, alignItems:'center'}}>
                
           </SafeAreaView>
        </Background>
    )
}