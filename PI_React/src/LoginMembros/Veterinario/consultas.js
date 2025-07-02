import React, { useState } from "react";
import { FlatList, Alert, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Background, Header, Card, PetNome, Info, Horario, Area, Btn, BtnTxt } from "./styles.js";
import { Feather as Icone } from '@expo/vector-icons';

const Consultas = () => {
    const [consultas, setConsultas] = useState([
        { id: "1", petNome: "Max", idade: "3 anos", peso: "12kg", doenca: "Dermatite", horario: "10:00 AM - 29/05/2025" },
        { id: "2", petNome: "Luna", idade: "5 anos", peso: "9kg", doenca: "Otite", horario: "14:00 PM - 30/05/2025" },
        { id: "3", petNome: "Thor", idade: "2 anos", peso: "15kg", doenca: "Problema de articulação", horario: "16:30 PM - 01/06/2025" },
        { id: "4", petNome: "Bella", idade: "4 anos", peso: "11kg", doenca: "Obesidade", horario: "09:00 AM - 02/06/2025" },
        { id: "5", petNome: "Charlie", idade: "6 anos", peso: "8kg", doenca: "Doença Renal", horario: "13:00 PM - 02/06/2025" }
    ]);

    const navigation = useNavigation();

    const excluirConsulta = (id) => {
        setConsultas(consultas.filter((consulta) => consulta.id !== id));
        Alert.alert("Consulta Excluída", "A consulta foi removida.");
    };

    const remarcarConsulta = (id) => {
        Alert.alert("Remarcação", "Redirecionando para agendamento...");
        navigation.navigate("Agendamento", { consultaId: id });
    };

    const finalizarConsulta = (id) => {
        Alert.alert("Consulta Finalizada", "Esta consulta foi concluída!");
    };

    const confirmarExcluirConsulta = (id) => {
        Alert.alert(
          "Confirmar Exclusão",
          "Tem certeza que deseja excluir essa consulta?",
          [
            { text: "Cancelar", style: "cancel" },
            { text: "Excluir", onPress: () => excluirConsulta(id), style: "destructive" },
          ]
        );
      };
      
      const navegarPara = (tela) => () => {
        navigation.navigate(tela);
      };

    return (
        <Background>
         <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{marginRight: 10}} onPress={navegarPara("Inicial")}>
                <Icone name="arrow-left" size={25}></Icone>
            </TouchableOpacity>

              <Header style={{marginBottom: 10,}}>Agenda de Consultas</Header>
         </View>
         
            <FlatList
                data={consultas}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Card>
                        <PetNome>{item.petNome}</PetNome>
                        <Info>🦴 Idade: {item.idade}</Info>
                        <Info>⚖️ Peso: {item.peso}</Info>
                        <Info>🩺 Doença: {item.doenca}</Info>
                        <Horario>⏰ Horário: {item.horario}</Horario>

                        <Area>
                            <TouchableOpacity  onPress={() => confirmarExcluirConsulta(item.id)}>
                                <Icone name="trash" size={20} color={'red'}></Icone>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 10,}} onPress={() => remarcarConsulta(item.id)}>
                                <Icone name="edit-2" size={20} color={'black'}></Icone>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft: 10,}} onPress={() => finalizarConsulta(item.id)}>
                               <Icone name="check" size={23} color={'green'}></Icone>
                            </TouchableOpacity>
                        </Area>
                    </Card>
                )}
            />
        </Background>
    );
};

export default Consultas;
