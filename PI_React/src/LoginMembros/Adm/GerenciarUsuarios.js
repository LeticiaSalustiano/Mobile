import React, { useState } from "react";
import { FlatList, TouchableOpacity, Text, Modal, View, TextInput, StyleSheet } from "react-native";
import { Picker } from '@react-native-picker/picker';
import {
  UsuariosContainer,
  UsuariosTitulo,
  UsuariosTitulo2,
  AreaBtn,
  Button,
  TxtBtn,
  UsuarioSubtitulo,
  Tabela2,
  Linha2,
  TextoUser,
  TextoTipo,
  TextoMotivo,
  TextoUser4,
  TextoTipo4,
  TextoMotivo4,
  TextoUser3,
  TextoTipo3,
  TextoMotivo3,
  Botao,
  BotaoArea,
  AreaHeader
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icone from "@expo/vector-icons/Feather";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";


export default function UsuariosAdm() {
  const navigation = useNavigation();

  const [principais, setPrincipais] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");

  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
  };

  return (
    <UsuariosContainer>
      <AreaHeader>
        <TouchableOpacity onPress={navegarPara("Adm")}>
          <Icone name="arrow-left" size={25} />
        </TouchableOpacity>
        <UsuariosTitulo style={{ marginTop: -3, marginLeft: 10 }}>Gerenciar Usuários</UsuariosTitulo>
      </AreaHeader>

      {/* Tabela de Usuarios */}
      <Tabela2>
        <Linha2 style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextoUser3 style={{ fontWeight: "bold" }}>Nome </TextoUser3>
          <TextoTipo3 style={{ fontWeight: "bold" }}>Email </TextoTipo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Tipo </TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Delet </TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Edit </TextoMotivo3>
        </Linha2>

        <FlatList
          data={principais}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20, fontStyle: "italic" }}>Nenhum usuário encontrado.</Text>
          }
          renderItem={({ item }) => (
            <Linha2 style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextoUser4 numberOfLines={1}></TextoUser4>
              <TextoTipo4 numberOfLines={1} ellipsizeMode="tail"> </TextoTipo4>
              <TextoMotivo4 style={{ marginLeft: 10 }} numberOfLines={1} ellipsizeMode="tail"> </TextoMotivo4>
              <BotaoArea>
                <Botao activeOpacity={0.7}>
                  <Icone name="trash" size={20} color="#FF0000" />
                </Botao>
                <Botao activeOpacity={0.7}>
                  <Icone name="edit-3" size={20} color="#14c5ec" />
                </Botao>
              </BotaoArea>
            </Linha2>
          )}
        />
      </Tabela2>

      {/* Destaques do mês */}
      <UsuariosTitulo2 style={{ fontSize: 20 }}>Últimos Agentes do Mês</UsuariosTitulo2>

      <Tabela2>
            <Linha2>
              <TextoUser></TextoUser>
              <TextoMotivo> </TextoMotivo>
            </Linha2>
        
          <TextoUser style={{ textAlign: "center", padding: 10 }}>Nenhum agente encontrado.</TextoUser>
       
      </Tabela2>

      {/* Navegação */}
      <AreaBtn style={{ flexDirection: 'row', marginTop: -10 }}>
        <Button style={{ flexDirection: 'column-reverse', alignItems: 'center', justifyContent: 'center' }} onPress={navegarPara("MonitoraVoluntario")} activeOpacity={0.7}>
          <Icone name="users" size={20} color="#fff" />
        </Button>

        <Button style={{ flexDirection: 'column-reverse', alignItems: 'center', justifyContent: 'center' }} onPress={navegarPara("MonitoraResgate")} activeOpacity={0.7}>
          <Icone name="truck" size={20} color="#fff" />
        </Button>
      </AreaBtn>
      <AreaBtn style={{ marginTop: -70 }}>
        <Button style={{ flexDirection: 'column-reverse', alignItems: 'center', justifyContent: 'center' }} onPress={navegarPara("MonitoraVeterinario")} activeOpacity={0.7}>
          <Icone name="activity" size={20} color="#fff" />
        </Button>
      </AreaBtn>

      {/* Modal de edição */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <UsuariosTitulo style={{ marginBottom: 20 }}>Editar Usuário</UsuariosTitulo>
            <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={tipo}
                onValueChange={(itemValue) => setTipo(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Selecione um tipo" value="" />
                <Picker.Item label="Voluntário" value="Voluntário" />
                <Picker.Item label="Veterinário" value="Veterinário" />
                <Picker.Item label="Resgate" value="Resgate" />
                <Picker.Item label="Adm" value="Adm" />
              </Picker>
            </View>
            <AreaBtn style={{ marginTop: 10 }}>
              <Button>
                <TxtBtn>Salvar</TxtBtn>
              </Button>
              <Button onPress={() => setModalVisible(false)}>
                <TxtBtn>Cancelar</TxtBtn>
              </Button>
            </AreaBtn>
          </View>
        </View>
      </Modal>
    </UsuariosContainer>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    width: "85%",
    borderRadius: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
  },
});