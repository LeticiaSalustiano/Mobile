import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";

export default function Home(){

    const { user, signOut } = useContext(AuthContext);

    return(
        <View>
            <Text style={{margin: 5, fontSize: 18, fontWeight: 'bold'}}>Olá {user.name}, Bem vindo de volta!</Text>
            <Button
            title="Sair da conta"
            onPress={()=>signOut()}/>
        </View>
    )
}



