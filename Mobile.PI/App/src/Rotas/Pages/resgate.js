import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Resgate() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Escolha sua opção desejada</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bbeef9'
    },
});