import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SingIn(){

    const navigation = useNavigation();

    return(
        <View style={styles.background}>
            <KeyboardAvoidingView style={styles.container}>
                <Image 
                style={styles.logo}
                source={require('../../assets/Logo.png')} />

                <View style={styles.inputArea}>
                    <TextInput 
                    style={styles.textIput}
                    placeholder="Digite seu Email"
                    ></TextInput>
                </View>

                <View style={styles.inputArea}>
                    <TextInput 
                    style={styles.textIput}
                    placeholder="Digite sua Senha"></TextInput>
                </View>

            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1, 
        backgroundColor: "#f0f4ff",   
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 25,
    },
    inputArea: {
        flexDirection: 'row',
    },
    textIput: {
        backgroundColor: '#fff',
        width: '90%',
        fontSize: 17,
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
        color: '#121212'
    },
});
