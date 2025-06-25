import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import { Container } from "../LoginMembros/styles";

export default function Sobre() {
    return(
        <Container>
            <Text style={styles.tituloPrincipal}>Nossas opções</Text>

            <View style={styles.card}>
                <Image source={require('../assets/resgate.png')} style={styles.imagem}/>
                <View style={{ margin: 5 }}>
                    <Text style={styles.titulo}>Resgate</Text>
                    <Text style={styles.texto}>Cada resgate é uma oportunidade de transformar o destino de um animal e oferecer a ele um futuro digno e seguro.</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Image source={require('../assets/voluntarios.jpg')} style={styles.imagem}/>
                <View style={{ margin: 5 }}>
                    <Text style={styles.titulo}>Voluntários</Text>
                    <Text style={styles.texto}>Os voluntários participam de resgates, adoções e ações educativas, fortalecendo a causa da proteção animal.</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Image source={require('../assets/vaterinaria.jpg')} style={styles.imagem}/>
                <View style={{ margin: 5 }}>
                    <Text style={styles.titulo}>Veterinario</Text>
                    <Text style={styles.texto}>Tem a oportunidade de promover a conscientização sobre bem-estar animal e fazer parte de uma equipe que trabalha para salvar vidas diariamente.</Text>
                </View>
            </View>

            <Text style={styles.final}>Site feito pelos criadores <Text style={{fontWeight: 'bold'}}>LDGL</Text></Text>
        </Container>
    );
}

const styles = StyleSheet.create({
    tituloPrincipal: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 10
    },
    card: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        height: 190,
        backgroundColor: '#14C5EC'
    },
    imagem: {
        width: '50%',
        height: "100%",
        marginLeft: 190
    },
    titulo: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginRight: 190,
    },
    texto: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        marginRight: 190,
        textAlign: 'center',
    },
    final: {
        textAlign: 'center',
        fontSize: 15,
        color: '#000',   
        marginTop: 15,
        marginBottom: 70,
    }
});