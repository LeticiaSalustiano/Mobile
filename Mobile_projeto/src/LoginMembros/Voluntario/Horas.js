import React, { useState } from "react";
import {
  Background,
  Container,
  Subtitulo,
  Texto,
  LinhaHorario,
  Titulo,
} from "./styles";
import { View, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icone } from "@expo/vector-icons";

const dadosHoras = [
  { id: "1", user: "", dia: "Seg", data: "09/06", horas: "09:00 / 13:00" },
  { id: "2", user: "", dia: "Ter", data: "10/06", horas: "10:00 / 14:00" },
  { id: "3", user: "", dia: "Qua", data: "11/06", horas: "11:00 / 15:00" },
  { id: "4", user: "", dia: "Qui", data: "12/06", horas: "12:00 / 16:00" },
  { id: "5", user: "", dia: "Sex", data: "13/06", horas: "13:00 / 17:00" },
];

const Horas = () => {
  const navigation = useNavigation();
  const [checados, setChecados] = useState({});

  const toggleCheck = (id) => {
    setChecados((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalCheck = Object.values(checados).filter(Boolean).length;

  return (
    <Background>
      <Titulo style={{ flexDirection: "row", textAlign: "center" }}>
        <Icone name="clock" size={24} color="#14c5ec" /> Horas Trabalhadas
      </Titulo>

      <Container>
        <Subtitulo style={{ marginBottom: 15, textAlign: "center" }}>
          Registre aqui as horas já concluídas na semana.
        </Subtitulo>

        <FlatList
          data={dadosHoras}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LinhaHorario>
              <View style={{ flex: 1 }}>
                <Texto style={{ fontWeight: "bold" }}>
                  {item.data} ({item.dia})
                </Texto>
                <Texto>{item.horas}</Texto>
              </View>

              <TouchableOpacity onPress={() => toggleCheck(item.id)}>
                <Icone
                  name={checados[item.id] ? "check-circle" : "circle"}
                  size={24}
                  color={checados[item.id] ? "#4CAF50" : "#999"}
                />
              </TouchableOpacity>
            </LinhaHorario>
          )}
        />

        {totalCheck > 0 && (
          <Texto style={{ marginTop: 15, textAlign: "center", color: "#4CAF50" }}>
            ✅ {totalCheck} dia(s) marcados como concluídos
          </Texto>
        )}
      </Container>
    </Background>
  );
};

export default Horas;
