import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import React, { useContext } from "react";

import { AuthContext } from "../../contexts/auth";

import { View, Text, Image } from "react-native";

export default function CustomDrawer(props){

    const { user, signOut } = useContext(AuthContext); 

    return(
    <DrawerContentScrollView>
        <View style={{ justifyContent: 'center', marginTop: 25}}>
           <Image 
           source={require('../../assets/Logo.png')} 
           style={{alignSelf: 'center', marginBottom: 15,}}/>

             <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>Bem-vindo!</Text>
             <Text style={{alignSelf: 'center', fontSize: 17, marginBottom: 15 }}>{user && user.name}</Text>
        </View>

           <DrawerItemList {...props}/>
           <DrawerItem {...props} label="Sair do App" onPress={()=> signOut()}/>
          
        
    </DrawerContentScrollView>
    )
}