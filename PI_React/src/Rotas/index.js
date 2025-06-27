import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useContext } from "react";

export default function Rotas() {
    const{signed, loading} = useContext();

    if(loading) {
        return(
            <View>
                <ActivityIndicator size="large" color={'#131313'}/>
            </View>
        );
    }
}