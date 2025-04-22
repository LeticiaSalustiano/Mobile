import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Sobre() {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.tituloPrincipal}>Nossas opções de serviços voluntarios</Text>
            <View style={styles.card}>
                <Image source={require('./Img/resgate.png')} style={styles.imagem}/>
                <View style={{ margin: 5 }}>
                    <Text style={styles.titulo}>Resgate</Text>
                    <Text style={styles.texto}>Resgate</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image source={require('./Img/voluntarios.jpg')} style={styles.imagem}/>
                <View style={{ margin: 5 }}>
                    <Text style={styles.titulo}>Voluntarios</Text>
                    <Text style={styles.texto}>Voluntarios</Text>
                </View>
            </View>
            <View style={styles.card}>
                <Image source={require('./Img/vaterinaria.jpg')} style={styles.imagem}/>
                <View style={{ margin: 5 }}>
                    <Text style={styles.titulo}>Veterinario</Text>
                    <Text style={styles.texto}>Veterinario</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bbeef9'
    },
    tituloPrincipal: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    card: {
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#14c5ec"
    },
    imagem: {
        width: '100%',
        height: 200,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    texto: {
        fontSize: 20,
    }
});