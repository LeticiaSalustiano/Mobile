import React, { useState } from "react";
import {
  Background,
  Container,
  Texto,
  Titulo,
  LinhaHorario,
} from "./styles";
import {
  FlatList,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather as Icone } from "@expo/vector-icons";

const Funcao = () => {
  const navigation = useNavigation();

  // Lista inicial de funções
  const [funcoesDiarias, setFuncoesDiarias] = useState([
    { id: "1", descricao: "Banho e tosa de pets" },
    { id: "2", descricao: "Organizar materiais e doações" },
    { id: "3", descricao: "Atualizar registros dos voluntários" },
    { id: "4", descricao: "Preparar espaço para eventos" },
    { id: "5", descricao: "Limpar áreas comuns" },
    { id: "6", descricao: "Receber visitantes e orientá-los" },
  ]);

  // Estado para controlar quais tarefas foram finalizadas (objeto com id: boolean)
  const [finalizadas, setFinalizadas] = useState({});

  // Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState("");

  // Função para navegar
  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
  };

  // Marca/desmarca tarefa finalizada
  const toggleFinalizada = (id) => {
    setFinalizadas((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Adiciona nova tarefa à lista
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") {
      Alert.alert("Erro", "Digite a descrição da tarefa.");
      return;
    }

    const nova = {
      id: (funcoesDiarias.length + 1).toString(),
      descricao: novaTarefa.trim(),
    };

    setFuncoesDiarias((prev) => [...prev, nova]);
    setNovaTarefa("");
    setModalVisible(false);
  };

  // Envia as tarefas finalizadas (exemplo)
  const enviarTarefas = () => {
    const idsFinalizadas = Object.keys(finalizadas).filter((id) => finalizadas[id]);

    if (idsFinalizadas.length === 0) {
      Alert.alert("Aviso", "Nenhuma tarefa finalizada para enviar.");
      return;
    }

    // Aqui você pode enviar para o backend/firestore etc
    Alert.alert("Sucesso", `Enviadas tarefas finalizadas: ${idsFinalizadas.join(", ")}`);

    // Limpa as marcações após envio
    setFinalizadas({});
  };

  return (
    <Background>
      {/* Cabeçalho */}
      <View style={{ flexDirection: "row", alignItems: "center", marginRight: 180 }}>
        <TouchableOpacity onPress={navegarPara("Funcionarios")} style={{ marginRight: 5 }}>
          <Icone name="arrow-left" size={25} />
        </TouchableOpacity>
        <Titulo style={{ marginTop: 4 }}>Funções Diárias</Titulo>
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

        {/* Botão para abrir modal */}
        <TouchableOpacity
          style={{ justifyContent: "flex-end", alignSelf: "flex-end", marginTop: 10, marginRight: 10 }}
          onPress={() => setModalVisible(true)}
        >
          <Icone name="edit-2" size={20} color={"#000"} />
        </TouchableOpacity>

        {/* Botão Enviar */}
        <TouchableOpacity
          onPress={enviarTarefas}
          style={{
            backgroundColor: "#14c5ec",
            padding: 12,
            marginTop: 20,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Texto style={{ color: "#fff", fontWeight: "bold" }}>Enviar Tarefas Diárias</Texto>
        </TouchableOpacity>
      </Container>

      {/* Modal para nova tarefa */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "80%" }}>
            <Texto style={{ marginBottom: 10 }}>Nova tarefa:</Texto>
            <TextInput
              value={novaTarefa}
              onChangeText={setNovaTarefa}
              placeholder="Descrição da tarefa"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 10,
                borderRadius: 5,
                marginBottom: 15,
              }}
            />
            <TouchableOpacity
              onPress={adicionarTarefa}
              style={{
                backgroundColor: "#14c5ec",
                padding: 10,
                borderRadius: 5,
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Texto style={{ color: "#fff", fontWeight: "bold" }}>Adicionar</Texto>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ alignItems: "center" }}>
              <Texto style={{ color: "#d32f2f" }}>Cancelar</Texto>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Background>
  );
};

export default Funcao;
