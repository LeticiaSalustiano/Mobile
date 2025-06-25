import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './home';
import Sobre from './sobre';
import Tipo from './tipo';
import ResgateMembro from '../membros/ResgateMembro';
import VeterinarioMembro from '../membros/VeterinarioMembro';
import ApoioMembro from '../membros/ApoioMembro';
import Login from '../login';
import Inicial from '../LoginMembros/Veterinario/inicial';
import Consultas from '../LoginMembros/Veterinario/consultas';
import Agendamento from '../LoginMembros/Veterinario/agendamento';
import Resgate from '../LoginMembros/Resgate/Resgate';
import Solicitacoes from '../LoginMembros/Resgate/Solicita';
import Andamento from '../LoginMembros/Resgate/Tabela';
import Horas from '../LoginMembros/Voluntario/Horas';
import Funcao from '../LoginMembros/Voluntario/Funcao';
import Funcionarios from '../LoginMembros/Voluntario/Funcionarios';
import CustomDrawer from '../CustomDrawer';
import HomeAdm from '../LoginMembros/Adm/HomeAdm';
import UsuariosAdm from '../LoginMembros/Adm/GerenciarUsuarios';
import ConteudoAdm from '../LoginMembros/Adm/GerenciarConteudo';
import MonitoraResgate from '../LoginMembros/Adm/MonitorResgate';
import MonitoraVeterinario from '../LoginMembros/Adm/MonitorVeterinario';
import MonitoraVoluntario from '../LoginMembros/Adm/MonitorVoluntario';

const Drawer = createDrawerNavigator();

export default function Rotas() {
  return (
      <Drawer.Navigator 
         drawerContent={(props)=> <CustomDrawer {...props}/>}
         screenOptions={{
            headerStyle:{
               backgroundColor: '#fff',
            },
            drawerStyle:{
               backgroundColor: "#fff",
               
            },
            drawerItemStyle: {
                marginVertical: 5,
                borderRadius: 50,
                textAlign: 'center'
            },

            drawerActiveBackgroundColor: "#14c5ec",
            drawerActiveTintColor: "#fff",

            drawerInactiveBackgroundColor: "#fff",
            drawerInactiveTintColor: "#000",
        }}
      >
            <Drawer.Screen name="Tela inicial" component={Home} options={{title: "SafePet" }}/>
            <Drawer.Screen name="Saiba Mais" component={Sobre}/>
            <Drawer.Screen name="Cadastre-se" component={Tipo} options={{ drawerItemStyle: { display: 'none' } }}/>
            <Drawer.Screen name="Login" component={Login} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="ResgateMembro" component={ResgateMembro} options={{ title: "Agente",drawerItemStyle: { display: 'none' } }}/>
            <Drawer.Screen name="VeterinarioMembro" component={VeterinarioMembro} options={{ title: "Agente", drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="ApoioMembro" component={ApoioMembro} options={{ title: "Agente",drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="Inicial" component={Inicial} options={{title: "Tela Veterinario", drawerItemStyle: { display: 'none' }}}/>
            <Drawer.Screen name="Consultas" component={Consultas} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="Agendamento" component={Agendamento} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="Resgate" component={Resgate} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="Andamento" component={Andamento} options={{ drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="Solicitacoes" component={Solicitacoes} options={{ title: "Resgate",drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="Funcionarios" component={Funcionarios} 
               options={{ 
                  title: "Área do Voluntário",
                  swipeEnabled: false,
                  drawerItemStyle: { display: 'none' } 
               }} 
            />
            <Drawer.Screen name="Horas" component={Horas} options={{ title: "Horas",drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="Funcao" component={Funcao} options={{ title: "Funções", drawerItemStyle: { display: 'none' } }} />
            <Drawer.Screen name="Adm" component={HomeAdm} options={{ title: "Adm"}} />
            <Drawer.Screen name="Conteudo" component={ConteudoAdm} options={{ title: "Financeiro" ,drawerItemStyle: {  display: 'none' } }} />
            <Drawer.Screen  name="Usuarios" component={UsuariosAdm} options={{ title: "Usuarios" ,drawerItemStyle: {  display: 'none' }  }} />
            <Drawer.Screen  name="MonitoraResgate" component={MonitoraResgate} options={{ title: "Monitorando" ,drawerItemStyle: {  display: 'none' } }} />
            <Drawer.Screen  name="MonitoraVeterinario" component={MonitoraVeterinario} options={{ title: "Monitorando" ,drawerItemStyle: {  display: 'none' }  }} />
            <Drawer.Screen  name="MonitoraVoluntario" component={MonitoraVoluntario} options={{ title: "Monitorando" ,drawerItemStyle: {  display: 'none' } }} />
      </Drawer.Navigator>
  );
}
