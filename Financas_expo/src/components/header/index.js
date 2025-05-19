import React from "react";
import Icon from "react-native-vector-icons/Feather";

import { Container, Title, BtnMenu } from "./styles";

import { useNavigation } from "@react-navigation/native";

export default function Header({title}){

    const navigation = useNavigation();

    return(
        <Container>
          <BtnMenu onPress={()=> navigation.openDrawer()}> 
            <Icon name='menu' size={35} color='#121212'/>        
        </BtnMenu>

            {title && (
                <Title>{title}</Title>
            )} 

            
         
        </Container>
    )
}