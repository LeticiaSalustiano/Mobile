import React, { useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Background, Header, Tabela, Linha, Texto, BtnArea, Btn, BtnTxt, Subtitulo } from "./styles";

const horariosIniciais = [
    { id: "1", horario: "09:00 AM - 28/05/2025", status: "Disponível" },
    { id: "2", horario: "10:00 AM - 29/05/2025", status: "Ocupado" },
    { id: "3", horario: "11:30 AM - 29/05/2025", status: "Disponível" },
    { id: "4", horario: "14:00 PM - 30/05/2025", status: "Ocupado" },
    { id: "5", horario: "15:30 PM - 30/05/2025", status: "Disponível" },
    { id: "6", horario: "16:30 PM - 01/06/2025", status: "Ocupado" },
    { id: "7", horario: "08:30 AM - 02/06/2025", status: "Disponível" },
    { id: "8", horario: "13:00 PM - 02/06/2025", status: "Ocupado" },
    { id: "9", horario: "17:00 PM - 03/06/2025", status: "Disponível" }
];

const Inicial = () => {
    const navigation = useNavigation();
    const [mostrarDisponiveis, setMostrarDisponiveis] = useState(false);

    const horariosFiltrados = mostrarDisponiveis
        ? horariosIniciais.filter((item) => item.status === "Disponível")
        : horariosIniciais;

    return (
        <Background>
            <Header>Bem vindo de volta</Header>
            <Subtitulo>Seu nome</Subtitulo>
            <Header>Horários Consultas</Header>

            <BtnArea>
                <Btn onPress={() => setMostrarDisponiveis(!mostrarDisponiveis)}>
                    <BtnTxt>{mostrarDisponiveis ? "Mostrar Todos" : "Ver Disponíveis"}</BtnTxt>
                </Btn>
            </BtnArea>

            <Tabela>
                <FlatList
                    data={horariosFiltrados}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Linha>
                            <Texto>{item.horario}</Texto>
                            <Texto style={{ color: item.status === "Disponível" ? "green" : "red" }}>
                                {item.status}
                            </Texto>
                        </Linha>
                    )}
                />
            </Tabela>

            <BtnArea>
                <Btn onPress={() => navigation.navigate("Consultas")}>
                    <BtnTxt>Consultas</BtnTxt>
                </Btn>
                <Btn onPress={() => navigation.navigate("Agendamento")}>
                    <BtnTxt>Agendar</BtnTxt>
                </Btn>
            </BtnArea>
        </Background>
    );
};

export default Inicial;

