import React, { useState } from "react";
import {
  Background,
  Container,
  Texto,
  Titulo,
  LinhaHorario
} from "./styles";
import { FlatList, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icone } from "@expo/vector-icons";

const funcoesDiarias = [
  { id: '1', descricao: 'Receber visitantes e orientá-los' },
  { id: '2', descricao: 'Organizar materiais e doações' },
  { id: '3', descricao: 'Atualizar registros dos voluntários' },
  { id: '4', descricao: 'Preparar espaço para eventos' },
  { id: '5', descricao: 'Limpar áreas comuns' },
];

const Funcao = () => {
  const navigation = useNavigation();
  const [finalizadas, setFinalizadas] = useState({});

  const toggleFinalizada = (id) => {
    setFinalizadas((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
  };

  return (
    <Background>
      {/* Cabeçalho */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 180 }}>
              <TouchableOpacity onPress={navegarPara("Funcionarios")} style={{ marginRight: 5,  }}>
                <Icone name="arrow-left" size={25} />
              </TouchableOpacity>
              <Titulo style={{marginTop: 4, }}>Funções Diárias</Titulo>
            </View>

      <Container>
        <FlatList
          data={funcoesDiarias}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LinhaHorario>
              <Texto style={{ flex: 1 }}>{item.descricao}</Texto>

              <TouchableOpacity onPress={() => toggleFinalizada(item.id)}>
                <Icone
                  name={finalizadas[item.id] ? "check-circle" : "circle"}
                  size={24}
                  color={finalizadas[item.id] ? "#4CAF50" : "#999"}
                />
              </TouchableOpacity>
            </LinhaHorario>
          )}
        />
      </Container>
    </Background>
  );
};

export default Funcao;
