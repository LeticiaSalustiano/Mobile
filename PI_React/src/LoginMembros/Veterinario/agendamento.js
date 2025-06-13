import React, { useState } from "react";
import { FlatList, Alert, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Background, Header, Input, BtnArea, Btn, BtnTxt, HorariosArea, HorarioBtn, HorarioTxt } from "./styles";

const horariosDisponiveis = [
    { id: "1", horario: "09:00 AM - 28/05/2025" },
    { id: "2", horario: "11:30 AM - 29/05/2025" },
    { id: "3", horario: "15:30 PM - 30/05/2025" },
    { id: "4", horario: "08:30 PM - 02/06/2025" },
    { id: "5", horario: "17:00 PM - 03/06/2025" }
];

const Agendamento = () => {
    const navigation = useNavigation();
    const [petNome, setPetNome] = useState("");
    const [peso, setPeso] = useState("");
    const [raca, setRaca] = useState("");
    const [doenca, setDoenca] = useState("");
    const [horarioSelecionado, setHorarioSelecionado] = useState(null);

    const confirmarAgendamento = () => {
        if (!petNome.trim() || !peso.trim() || !raca.trim() || !doenca.trim() || !horarioSelecionado) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }
        Alert.alert("Sucesso", `Consulta para ${petNome} (${raca}, ${peso}) com diagnóstico de ${doenca} agendada às ${horarioSelecionado}!`);
        navigation.navigate("Inicial");
    };

    const navegarPara = (tela) => () => {
        navigation.navigate(tela);
      };

    return (
        <Background>
            <Header style={{marginBottom: 20}}>Agendar Consulta</Header>

            <Input placeholder="Nome do Pet" value={petNome} onChangeText={setPetNome} />
            <Input placeholder="Peso do Pet (kg)" value={peso} onChangeText={setPeso} keyboardType="numeric" />
            <Input placeholder="Raça do Pet" value={raca} onChangeText={setRaca} />
            <Input placeholder="Doença ou Sintomas" value={doenca} onChangeText={setDoenca} />

            <HorariosArea>
                <View style={{padding: 5}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center'}}>Horários dispiníveis</Text>
                </View>
                <FlatList
                    data={horariosDisponiveis}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <HorarioBtn
                            selecionado={horarioSelecionado === item.horario}
                            onPress={() => setHorarioSelecionado(item.horario)}
                        >
                            <HorarioTxt selecionado={horarioSelecionado === item.horario}>
                                {item.horario}
                            </HorarioTxt>
                        </HorarioBtn>
                    )}
                />
            </HorariosArea>

            <BtnArea>
                <Btn onPress={navegarPara("Inicial")}>
                    <BtnTxt>Cancelar</BtnTxt>
                </Btn>
                <Btn onPress={confirmarAgendamento}>
                    <BtnTxt>Confirmar</BtnTxt>
                </Btn>
            </BtnArea>
        </Background>
    );
};

export default Agendamento;