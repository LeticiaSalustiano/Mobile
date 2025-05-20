import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
           
        </Drawer.Navigator>
    );
}


export default App;