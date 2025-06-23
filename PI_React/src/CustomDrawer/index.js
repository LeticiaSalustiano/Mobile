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
           style={{alignSelf: 'center', marginBottom: 15, marginTop: 25}}/>

             <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 50}}>Seja bem-vindo!</Text>
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
