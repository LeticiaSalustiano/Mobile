import React, { useState } from "react";
import { Alert, View, TouchableOpacity, Modal, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Background, Header, StatusResumo, Texto, BtnArea2, Btn2, BtnTxt2 } from "./styles";
import Icone from '@expo/vector-icons/Feather';

const Solicitacoes = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [gravidade, setGravidade] = useState("");
  const [tipoPet, setTipoPet] = useState("");

  const abrirSolicitacao = () => {
    setModalVisible(true);
  };

  const confirmarSolicitacao = () => {
    console.log("Solicitação enviada:", { gravidade, tipoPet });
    setModalVisible(false);
    Alert.alert("Solicitação enviada", `Gravidade: ${gravidade}\nPet: ${tipoPet}`);
  };

  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
  };

  return (
    <Background>
      {/* Cabeçalho */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={navegarPara("Resgate")} style={{ marginRight: 5 }} activeOpacity={0.7}>
          <Icone name="arrow-left" size={25} />
        </TouchableOpacity>
        <Header>Locais Resgate</Header>
      </View>

      {/* Resumo de Status */}
      <StatusResumo>
        <Texto>Última solicitação: Emergência (Cachorro)</Texto>
        <Texto>Status: A caminho</Texto>
      </StatusResumo>

      {/* Botões de ações rápidas */}
      <BtnArea2>
        <Btn2 onPress={() => Alert.alert("Histórico", "Aqui seria mostrado o histórico.")} activeOpacity={0.7}>
          <BtnTxt2>Ver Histórico</BtnTxt2>
        </Btn2>
        <Btn2 onPress={() => Alert.alert("Locais", "Aqui seriam mostrados os locais de resgate.")} activeOpacity={0.7}>
          <BtnTxt2>Locais de Resgate</BtnTxt2>
        </Btn2>
        <Btn2 onPress={abrirSolicitacao} activeOpacity={0.7}>
          <BtnTxt2>Solicitar Veterinário</BtnTxt2>
        </Btn2>
      </BtnArea2>

      {/* Modal de seleção */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#bbeef9" }}>
          <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "90%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 5 }}>Gravidade:</Text>
            {["Emergência", "Urgente", "Não urgente"].map(opcao => (
              <Pressable key={opcao} onPress={() => setGravidade(opcao)}>
                <Text style={{
                  padding: 10,
                  backgroundColor: gravidade === opcao ? "#14c5ec" : "#eee",
                  borderRadius: 5,
                  marginBottom: 5,
                  color: gravidade === opcao ? "#fff" : "#000"
                }}>{opcao}</Text>
              </Pressable>
            ))}
            <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 5, marginTop: 20 }}>Tipo de Pet:</Text>
            {["Cachorro", "Gato", "Outro"].map(pet => (
              <Pressable key={pet} onPress={() => setTipoPet(pet)}>
                <Text style={{
                  padding: 10,
                  backgroundColor: tipoPet === pet ? "#14c5ec" : "#eee",
                  borderRadius: 5,
                  marginBottom: 5,
                  color: tipoPet === pet ? "#fff" : "#000"
                }}>{pet}</Text>
              </Pressable>
            ))}
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
              <Pressable onPress={() => setModalVisible(false)}>
                <Text style={{ color: "#f00" }}>Cancelar</Text>
              </Pressable>
              <Pressable onPress={confirmarSolicitacao}>
                <Text style={{ color: "#14c5ec", fontWeight: "bold" }}>Confirmar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </Background>
  );
};

export default Solicitacoes;