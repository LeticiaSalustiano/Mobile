import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppRegistry } from "react-native";
import { name as appName } from "../app.json"; // Verifique se o caminho está correto
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

AppRegistry.registerComponent(appName, () => App);

export default App;
