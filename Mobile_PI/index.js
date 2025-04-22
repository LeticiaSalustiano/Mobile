import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from './src/Home';
import Sobre from './src/Sobre';
import Cadastro from './src/Cadastro';



import CustomDrawer from './src/CustomDrawer';
const Drawer = createDrawerNavigator();

export default function App() {
    return(
        <Drawer.Navigator
        drawerContent={CustomDrawer}
        screenOptions={{
            drawerStyle: {
                backgroundColor: "#bbeef9"
            },
            drawerActiveBackgroundColor: "#14c5ec",
            drawerActiveTintColor: "#000",
            drawerInactiveBackgroundColor: '#edfbfe',
            drawerInactiveTintColor: '#000'
        }}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Sobre" component={Sobre}/>
            <Drawer.Screen name="Cadastro" component={Cadastro}/>
        </Drawer.Navigator>
    );
}