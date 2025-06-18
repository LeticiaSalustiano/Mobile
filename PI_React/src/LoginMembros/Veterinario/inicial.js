import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Background, Header, Tabela, Linha, Texto, BtnArea, Btn, BtnTxt, Subtitulo } from "./styles";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../conexao/firebaseConfig";

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
    const route = useRoute();
    const emailParam = route.params?.email;

    const [mostrarDisponiveis, setMostrarDisponiveis] = useState(false);
    const [nomeUsuario, setNomeUsuario] = useState("Carregando...");

    useEffect(() => {
        const buscarNome = async () => {
            try {
                const q = query(collection(db, "users"), where("email", "==", emailParam));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const dados = querySnapshot.docs[0].data();
                    setNomeUsuario(dados.nome);
                } else {
                    setNomeUsuario("Usuário não encontrado");
                }
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
                setNomeUsuario("Erro ao carregar nome");
            }
        };

        if (emailParam) {
            buscarNome();
        }
    }, [emailParam]);

    const horariosFiltrados = mostrarDisponiveis
        ? horariosIniciais.filter((item) => item.status === "Disponível")
        : horariosIniciais;

    return (
        <Background>
            <Header>Bem vindo de volta</Header>
            <Subtitulo>{nomeUsuario}</Subtitulo>
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
                <Btn onPress={() => navigation.navigate("Consultas", { email: emailParam })}>
                    <BtnTxt>Consultas</BtnTxt>
                </Btn>
                <Btn onPress={() => navigation.navigate("Agendamento", { email: emailParam })}>
                    <BtnTxt>Agendar</BtnTxt>
                </Btn>
            </BtnArea>
        </Background>
    );
};

export default Inicial;

