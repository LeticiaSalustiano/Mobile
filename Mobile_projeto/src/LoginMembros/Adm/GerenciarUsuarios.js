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
import app from '../config/firebaseConfig';


export default function UsuariosAdm() {
  const navigation = useNavigation();

  const [principais, setPrincipais] = useState([
    { id: "1", user: "Letícia", tipo: "Adm", email: "leticiasalustiano07@gmail.com", motivo: "Maior quantidade de horas" },
    { id: "2", user: "Lucas", tipo: "Resgate", email: "lucas@gmail.com", motivo: "Maior número de resgates" },
    { id: "3", user: "Teste", tipo: "Voluntário", email: "teste@gmail.com", motivo: "Melhor avaliação" }
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");

  const navegarPara = (tela) => () => {
    navigation.navigate(tela);
  };

  const removerUsuario = (id) => {
    setPrincipais((prev) => prev.filter((user) => user.id !== id));
  };

  const editarUsuario = (usuario) => {
    setUsuarioEditando(usuario);
    setNome(usuario.user);
    setEmail(usuario.email);
    setTipo(usuario.tipo);
    setModalVisible(true);
  };

  const salvarEdicao = () => {
    if (usuarioEditando) {
      setPrincipais((prev) =>
        prev.map((item) =>
          item.id === usuarioEditando.id
            ? { ...item, user: nome, email: email, tipo: tipo }
            : item
        )
      );
      setModalVisible(false);
      setUsuarioEditando(null);
    }
  };

  return (
    <UsuariosContainer>
        <AreaHeader>
          <TouchableOpacity onPress={navegarPara("Adm")}>
            <Icone name="arrow-left" size={25} />
          </TouchableOpacity>
        <UsuariosTitulo style={{ marginTop: -3, marginLeft: 10 }}>Gerenciar Usuarios</UsuariosTitulo>
      </AreaHeader>

      <UsuarioSubtitulo style={{ fontWeight: 'bold'}}>Aqui você monitora seus Agentes</UsuarioSubtitulo>

       {/* Tabela de Usuarios */}
       <Tabela2>
        <Linha2 style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextoUser3 style={{ fontWeight: "bold" }}>Nome </TextoUser3>
          <TextoTipo3 style={{ fontWeight: "bold" }}>Email </TextoTipo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>tipo </TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>delet </TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>edit </TextoMotivo3>
        </Linha2>

        <FlatList
          data={principais}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ textAlign: "center", marginTop: 20, fontStyle: "italic",  }}>
              Nenhum Usuario encontrado.
            </Text>
          }
          renderItem={({ item }) => (
            <Linha2 style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextoUser4 numberOfLines={1}>{item.user}</TextoUser4>
              <TextoTipo4  numberOfLines={1} ellipsizeMode="tail"> {item.email}</TextoTipo4>
              <TextoMotivo4 style={{marginLeft: 10}} numberOfLines={1} ellipsizeMode="tail"> {item.tipo}</TextoMotivo4>
              

              <BotaoArea>
                <Botao onPress={() => removerUsuario(item.id)}>
                  <Icone name="trash" size={20} color="#FF0000" />
                </Botao>
                <Botao onPress={() => editarUsuario(item)}>
                  <Icone name="edit-3" size={20} color="#14c5ec" />
                </Botao>
              </BotaoArea>
            </Linha2>
          )}
        />
      </Tabela2>

      {/* Destaques do mês */}
      <UsuariosTitulo2 style={{fontSize: 20}}>Príncipais Agentes do Mês</UsuariosTitulo2>

      <Tabela2>
        {principais.length > 0 ? (
          principais.map((item) => (
            <Linha2 key={item.id}>
              <TextoUser>{item.user}</TextoUser>
              <TextoMotivo> • {item.motivo}</TextoMotivo>
            </Linha2>
          ))
        ) : (
          <TextoUser style={{ textAlign: "center", padding: 10 }}>
            Nenhum agente encontrado.
          </TextoUser>
        )}
      </Tabela2>

      
      {/* Navegação */}
      <AreaBtn style={{ flexDirection: 'row', marginTop: -10}}>
        <Button style={{flexDirection: 'column-reverse', alignItems:'center', justifyContent: 'center'}} onPress={navegarPara("MonitoraVoluntario")}>
          <Icone name="users" size={20} color="#fff" />
        </Button>

        <Button style={{flexDirection: 'column-reverse', alignItems:'center', justifyContent: 'center'}} onPress={navegarPara("MonitoraResgate")}>
          <Icone name="truck" size={20} color="#fff" />   
        </Button>
        </AreaBtn>

        <AreaBtn style={{ marginTop: -50}}>
        <Button style={{flexDirection: 'column-reverse', alignItems:'center', justifyContent: 'center'}} onPress={navegarPara("MonitoraVeterinario")}>
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
                </Picker>
              </View>

                <AreaBtn style={{ marginTop: 10 }}>
                  <Button onPress={salvarEdicao}>
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
