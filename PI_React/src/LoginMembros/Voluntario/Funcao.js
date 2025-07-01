import React, { useState, useEffect } from "react";
import { Background, Container, Texto, Titulo, LinhaHorario } from "./styles";
import { FlatList, TouchableOpacity, View, Alert, Modal, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icone } from "@expo/vector-icons";


const Funcao = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const emailUsuario = route.params?.email;

  const [funcoesDiarias, setFuncoesDiarias] = useState([
    { id: "1", descricao: "Banho e tosa de pets" },
    { id: "2", descricao: "Organizar materiais e doações" },
    { id: "3", descricao: "Atualizar registros dos voluntários" },
    { id: "4", descricao: "Preparar espaço para eventos" },
    { id: "5", descricao: "Limpar áreas comuns" },
    { id: "6", descricao: "Receber visitantes e orientá-los" },
  ]);

  const [finalizadas, setFinalizadas] = useState({});
  const [userId, setUserId] = useState(null);
  const [quantidade, setQuantidade] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState("");

  

  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
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
          data={''}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LinhaHorario>
              <Texto style={{ flex: 1 }}></Texto>
              <TouchableOpacity >
                <Icone
                  name={finalizadas[''] ? "check-circle" : "circle"}
                  size={24}
                  color={finalizadas[''] ? "#4CAF50" : "#999"}
                />
              </TouchableOpacity>
            </LinhaHorario>
          )}
        />

        {/* Botão para abrir o modal de adicionar tarefa */}
        <TouchableOpacity style={{ justifyContent: 'flex-end', alignSelf: 'flex-end', marginTop: 10, marginRight: 10 }}onPress={() => setModalVisible(true)}>
          <Icone name="edit-2" size={20} color={'#000'} />
        </TouchableOpacity>

        {/* Botão de Enviar */}
        <TouchableOpacity 
          style={{
            //backgroundColor: todasFinalizadas ? "#14c5ec" : "#ccc",
            padding: 12,
            marginTop: 20,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Texto style={{ color: "#fff", fontWeight: "bold" }}>
            Enviar Tarefas Diárias
          </Texto>
        </TouchableOpacity>
      </Container>

      {/* Modal para adicionar nova tarefa */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
          <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "80%" }}>
            <Texto style={{ marginBottom: 10 }}>Nova tarefa:</Texto>
            <TextInput
              value={''}
              onChangeText={''}
              placeholder="Descrição da tarefa"
              style={{
                borderWidth: 1,
                borderColor: "#ccc",
                padding: 10,
                borderRadius: 5,
                marginBottom: 15
              }}
            />
            <TouchableOpacity onPress={''}
              style={{
                backgroundColor: "#14c5ec",
                padding: 10,
                borderRadius: 5,
                alignItems: "center",
                marginBottom: 10
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
