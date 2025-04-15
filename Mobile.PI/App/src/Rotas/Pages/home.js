import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home() {
    return(
        <View style={styles.container}>
            <Image source={require('./Img/pet-friendly.png')} style={styles.imagem}/>
            <Text style={styles.titulo}>Bem Vindo(a) ao SafePet</Text>
            <Text style={styles.texto}>Venha nos ajudar a contribuir com a saude e a vida dos nossos pets e apoiar a nossa causa.</Text>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.btnTexto}>Saber mais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.btnTexto}>Cadastre-se</Text>
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
    imagem: {
        width: 200,
        height: 200,
        margin: 5
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    texto: {
        fontSize: 20,
        textAlign: 'justify',
        margin: 10
    },
    botao: {
        margin: 5,
        width: 300,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14c5ec'
    },
    btnTexto: {
        color: "#000",
        fontSize: 20
    }
});