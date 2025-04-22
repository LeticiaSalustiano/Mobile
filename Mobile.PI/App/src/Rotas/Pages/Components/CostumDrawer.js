import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CostumDrawer(props) {
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.container}>
                <Image source={require('./Img/Logo.png')} style={styles.logo}/>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '70%',
        height: 200,
        margin: 5
    }
});