import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {

    return (
        <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Image source={require('../assets/perfil.png')}
        style={{width: 65, height: 65}}/>
        <Text style={styles.titulo}>Bem Vindo!</Text>       
      </View>
      <DrawerItemList {...props}/>
      </DrawerContentScrollView>
    );
}

  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: 85,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      margin: 6,
      marginBottom: 20,
    },
});
