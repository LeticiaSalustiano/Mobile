import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home';
import Sobre from './sobre';
import Tipo from './tipo';
import ResgateMembro from '../membros/ResgateMembro';
import VeterinarioMembro from '../membros/VeterinarioMembro';
import ApoioMembro from '../membros/ApoioMembro';
import Login from '../login';
import Inicial from '../LoginMembros/Veterinário/inicial';
import Consultas from '../LoginMembros/Veterinário/consultas';
import Agendamento from '../LoginMembros/Veterinário/agendamento';
import Resgate from '../LoginMembros/Resgate/Resgate';
import Solicitacoes from '../LoginMembros/Resgate/Solicita';
import Andamento from '../LoginMembros/Resgate/Tabela';
import Horas from '../LoginMembros/Voluntario/Horas';
import Funcao from '../LoginMembros/Voluntario/Funcao';
import Funcionarios from '../LoginMembros/Voluntario/Funcionarios';
import CustomDrawer from '../CustomDrawer';
const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
      <Drawer.Navigator 
         drawerContent={(props)=> <CustomDrawer {...props}/>}
         screenOptions={{
            headerStyle:{
               backgroundColor: '#bbeef9',
            },
            drawerStyle:{
               backgroundColor: "#fff",
            },
            drawerItemStyle: {
                marginVertical: 5,
                borderRadius: 50
            },

            drawerActiveBackgroundColor: "#14c5ec",
            drawerActiveTintColor: "#fff",

            drawerInactiveBackgroundColor: "#fff",
            drawerInactiveTintColor: "#000",
        }}
      >
      <Drawer.Screen 
         name="Tela inicial" 
         component={Home} 
         options={{
            title: "SafePet"
         }}
      />

      <Drawer.Screen 
         name="Saiba Mais" 
         component={Sobre} 
      />

      <Drawer.Screen 
         name="Cadastre-se" 
         component={Tipo} 
         options={{ 
            drawerItemStyle: { 
               display: 'none' 
            } 
         }} 
      />

      <Drawer.Screen 
         name="Login" 
         component={Login} 
         options={{ 
            drawerItemStyle: { 
               display: 'none' 
            } 
         }} 
      />

      <Drawer.Screen 
         name="ResgateMembro" 
         component={ResgateMembro} 
         options={{ 
            title: "Agente",
            drawerItemStyle: { 
               display: 'none' 
            } 
         }} 
      />

      <Drawer.Screen 
         name="VeterinarioMembro" 
         component={VeterinarioMembro} 
         options={{ 
            title: "Agente",
            drawerItemStyle: { 
               display: 'none' 
            } 
         }}    
      />

      <Drawer.Screen 
         name="ApoioMembro" 
         component={ApoioMembro} 
         options={{ 
            title: "Agente",
            drawerItemStyle: { 
               display: 'none' 
            } 
         }} 
      />

      <Drawer.Screen 
         name="Inicial" 
         component={Inicial} 
         options={{
            title: "Tela Veterinario"
         }}
      />

      <Drawer.Screen 
         name="Consultas" 
         component={Consultas} 
         options={{ 
            drawerItemStyle: { 
               display: 'none' 
            } 
         }} 
      />

      <Drawer.Screen 
         name="Agendamento" 
         component={Agendamento} 
         options={{ 
            drawerItemStyle: { 
               display: 'none' 
            } 
         }} 
      />

      <Drawer.Screen 
         name="Resgate" 
         component={Resgate} 
      />

     <Drawer.Screen 
         name="Andamento" 
         component={Andamento} 
         options={{ 
            drawerItemStyle: { 
               display: 'none' 
            } 
         }} 
      />

      <Drawer.Screen 
         name="Solicitacoes" 
         component={Solicitacoes} 
         options={{ 
            title: "Resgate",
            drawerItemStyle: { 
               display: 'none' 
            } 
         }} 
      />

      <Drawer.Screen 
         name="Funcionarios" 
         component={Funcionarios} 
         options={{ 
            title: "Área do Voluntário" 
         }} 
      />

     <Drawer.Screen 
         name="Horas" 
         component={Horas} 
         options={{ 
            title: "Horas",
            drawerItemStyle: { 
               display: 'none' 
            } 
         }} 
      />

     <Drawer.Screen 
         name="Funcao" 
         component={Funcao} 
         options={{ 
            title: "Funções",
            drawerItemStyle: { 
               display: 'none' 
            } 
         }} 
      />

      </Drawer.Navigator>
  );
}
