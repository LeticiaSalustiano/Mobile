import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";


const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
       <AppDrawer.Navigator 
           screenOptions={{
            headerShown: false,
            drawerStyle:{
                backgroundColor: "#fff",
                paddingTop: 20
            },
            drawerActiveBackgroundColor: "#3b3dbf",
            drawerActiveTintColor: "#fff",

            drawerInactiveBackgroundColor: "#0ff2ff",
            drawerInactiveTintColor: "#121212",
           }}>
            
           <AppDrawer.Screen
             name="Minhas movimentações"
             component={Home}/>

            <AppDrawer.Screen
             name="Registrando"
             component={New}/>
       </AppDrawer.Navigator>
    )
}

export default AppRoutes;