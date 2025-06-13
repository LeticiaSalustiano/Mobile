import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { View, Text, Image, TouchableOpacity } from "react-native";

export default function CustomDrawer(props){
  return(
    <DrawerContentScrollView style={style.container}>
        <View style={{ justifyContent: 'center', marginTop: 25}}>
           <Image 
           source={require('../assets/Logo.png')} 
           style={{alignSelf: 'center', marginBottom: 15,}}/>

             <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>Bem-vindo!</Text>
             <Text style={{alignSelf: 'center', fontSize: 17, marginBottom: 15 }}>Seu nome</Text>
           <DrawerItemList {...props}/>
        </View>
    </DrawerContentScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbeef9'
  }
});
