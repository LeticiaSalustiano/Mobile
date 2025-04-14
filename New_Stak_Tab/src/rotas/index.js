import React from "react";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";

import IconesEXP from '@expo/vector-icons/Feather';
import StackRota from './stackRota';

import Sobre from '../paginas/Sobre';
import Contato from '../paginas/Contato/Index';

import CustomDrawer from '../components/CustomDrawer';

//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
    <Drawer.Navigator
    drawerContent={CustomDrawer}
    screenOptions={{
      headerShown:false,
      drawerStyle:{
        backgroundColor: '#121212'
      },
      drawerActiveBackgroundColor:'#3b3dbf', 
      drawerActiveTintColor: '#fff',
      drawerInactiveBackgroundColor: '#ccc',
      drawerInactiveTintColor: '#000'
    }}>
      <Drawer.Screen
      name="HomeStack"
      component={StackRota}
      />
      <Drawer.Screen
      name="Sobre"
      component={Sobre}
      />
      <Drawer.Screen
      name="Contato"
      component={Contato}
      />
    </Drawer.Navigator>
  );
}

/*export default function Rotas() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: { backgroundColor: "#f5f5f5" }, 
        }}
      >
        <Tab.Screen
          name="StackRota"
          component={StackRota} 
          options={{
            tabBarIcon: ({ color, size }) => 
            <IconesEXP name="home" color={color} size={size}></IconesEXP>
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => 
            <IconesEXP name="info" color={color} size={size}></IconesEXP>
          }}
        />

        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            tabBarIcon: ({ color, size }) => 
            <IconesEXP name="phone-call" color={color} size={size}></IconesEXP>
          }}
        />
        
      </Tab.Navigator>*/
