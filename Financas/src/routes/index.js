import React from "react";
import { View } from "react-native";

import AuthRoutes from "./auth.routes";

export default function Routes(){

    const loading = false;
    const signed = false;

    return(
        signed ? 
          <View>Navegar no App</View> 
        : 
          <AuthRoutes></AuthRoutes>
    )
}