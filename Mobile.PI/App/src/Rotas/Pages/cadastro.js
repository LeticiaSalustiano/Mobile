import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Cadastro() {
    const navegacao = useNavigation();
    function chamaResgate() {
        navegacao.navigate('Resgate');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Escolha sua opção desejada</Text>
            <TouchableOpacity style={styles.botao} onPress={chamaResgate}>
                <Text style={styles.btnTexto}>Resgate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.btnTexto}>Apoio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.btnTexto}>Veterinario</Text>
            </TouchableOpacity>
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
    titulo: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    botao: {
        width: 300,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14c5ec',
        margin: 10
    },
    btnTexto: {
        fontSize: 20
    }
});