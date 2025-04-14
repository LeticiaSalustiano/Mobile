import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../paginas/Home";
import Detalhes from "../paginas/Detalhes";

const Stack = createNativeStackNavigator();

export default function StackRota() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: "Página Inicial" }}
      />
      <Stack.Screen 
        name="Detalhes" 
        component={Detalhes} 
        options={{ title: "Detalhes" }}
      />
    </Stack.Navigator>
  );
}



