import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./Home";
import Sobre from "./Sobre";
import Cadastro from "./Cadastro";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

function App() {
    return (
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
            }}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Sobre" component={Sobre} />
            <Drawer.Screen name="Cadastro" component={Cadastro} />
        </Drawer.Navigator>
    );
}


export default App;
