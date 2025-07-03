import React, { useState, useCallback } from "react";
import {
  FlatList,
  TouchableOpacity,
  Text,
  Modal,
  View,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import {
  UsuariosContainer,
  UsuariosTitulo,
  UsuariosTitulo2,
  AreaBtn,
  Button,
  TxtBtn,
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
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Icone from "@expo/vector-icons/Feather";
import { collection, getDocs, deleteDoc, updateDoc, doc, query, where } from "firebase/firestore";
import { db } from "../../conexao/config";

export default function UsuariosAdm() {
  const navigation = useNavigation();
  const [principais, setPrincipais] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tipo, setTipo] = useState("");

  // ✅ Corrigido: função que retorna uma função
  const navegarPara = (tela, params = {}) => () => {
    navigation.navigate(tela, params);
  };

  useFocusEffect(
    useCallback(() => {
      const fetchTodosUsuarios = async () => {
        try {
          const colecoes = ["usuarios", "resgatadores", "veterinario"];
          let listaFinal = [];

          for (const nomeColecao of colecoes) {
            const q = query(collection(db, nomeColecao), where("aprovado", "==", true));
            const querySnapshot = await getDocs(q);
            const usuarios = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data(),
              colecao: nomeColecao
            }));
            listaFinal = [...listaFinal, ...usuarios];
          }

          setPrincipais(listaFinal);
        } catch (error) {
          console.log("Erro ao buscar usuários aprovados:", error);
        }
      };

      fetchTodosUsuarios();
    }, [])
  );

  const excluirUsuario = async (id, colecao) => {
    try {
      await deleteDoc(doc(db, colecao, id));
      Alert.alert("Sucesso", "Usuário deletado com sucesso.");
      setPrincipais(principais.filter(u => u.id !== id));
    } catch (error) {
      console.log("Erro ao deletar:", error);
      Alert.alert("Erro", "Não foi possível deletar o usuário.");
    }
  };

  const salvarEdicao = async () => {
    if (!usuarioEditando) return;

    try {
      await updateDoc(doc(db, usuarioEditando.colecao, usuarioEditando.id), {
        nome,
        email,
        tipo,
        aprovado: true,
      });

      Alert.alert("Sucesso", "Usuário atualizado e aprovado.");
      setModalVisible(false);

      setPrincipais(prev =>
        prev.map(user =>
          user.id === usuarioEditando.id
            ? { ...user, nome, email, tipo, aprovado: true }
            : user
        )
      );
    } catch (error) {
      console.log("Erro ao salvar edição:", error);
      Alert.alert("Erro", "Não foi possível editar o usuário.");
    }
  };

  return (
    <UsuariosContainer>
      <AreaHeader>
        <TouchableOpacity onPress={navegarPara("Adm")}>
          <Icone name="arrow-left" size={25} />
        </TouchableOpacity>
        <UsuariosTitulo style={{ marginTop: -3, marginLeft: 10 }}>Gerenciar Usuários</UsuariosTitulo>
      </AreaHeader>

      <Tabela2>
        <Linha2 style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextoUser3 style={{ fontWeight: "bold" }}>Nome</TextoUser3>
          <TextoTipo3 style={{ fontWeight: "bold" }}>Email</TextoTipo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Tipo</TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Delet</TextoMotivo3>
          <TextoMotivo3 style={{ fontWeight: "bold" }}>Edit</TextoMotivo3>
        </Linha2>

        <FlatList
          data={principais}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text style={{ textAlign: "center", marginTop: 20, fontStyle: "italic" }}>Nenhum usuário encontrado.</Text>}
          renderItem={({ item }) => (
            <Linha2 style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextoUser4 numberOfLines={1}>{item.nome}</TextoUser4>
              <TextoTipo4 numberOfLines={1}>{item.email}</TextoTipo4>
              <TextoMotivo4 numberOfLines={1}>{item.tipo}</TextoMotivo4>
              <BotaoArea>
                <Botao activeOpacity={0.7} onPress={() => excluirUsuario(item.id, item.colecao)}>
                  <Icone name="trash" size={20} color="#FF0000" />
                </Botao>
                <Botao
                  activeOpacity={0.7}
                  onPress={() => {
                    setUsuarioEditando(item);
                    setNome(item.nome);
                    setEmail(item.email);
                    setTipo(item.tipo);
                    setModalVisible(true);
                  }}
                >
                  <Icone name="edit-3" size={20} color="#14c5ec" />
                </Botao>
              </BotaoArea>
            </Linha2>
          )}
        />
      </Tabela2>

      <UsuariosTitulo2 style={{ fontSize: 20 }}>Últimos Agentes do Mês</UsuariosTitulo2>
      <Tabela2>
        <Linha2>
          <TextoUser></TextoUser>
          <TextoMotivo></TextoMotivo>
        </Linha2>
        <TextoUser style={{ textAlign: "center", padding: 10 }}>Nenhum agente encontrado.</TextoUser>
      </Tabela2>

      <AreaBtn style={{ flexDirection: 'row', marginTop: -10 }}>
        <Button onPress={navegarPara("MonitoraVoluntario")}>
          <Icone name="users" size={20} color="#fff" />
        </Button>
        <Button onPress={navegarPara("MonitoraResgate")}>
          <Icone name="truck" size={20} color="#fff" />
        </Button>
      </AreaBtn>

      <AreaBtn style={{ marginTop: -70 }}>
        <Button onPress={navegarPara("MonitoraVeterinario")}>
          <Icone name="activity" size={20} color="#fff" />
        </Button>
      </AreaBtn>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <UsuariosTitulo style={{ marginBottom: 20 }}>Editar Usuário</UsuariosTitulo>
            <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <View style={styles.pickerWrapper}>
              <Picker selectedValue={tipo} onValueChange={setTipo} style={styles.picker}>
                <Picker.Item label="Selecione um tipo" value="" />
                <Picker.Item label="Voluntário" value="voluntario" />
                <Picker.Item label="Veterinário" value="veterinario" />
                <Picker.Item label="Resgate" value="resgate" />
                <Picker.Item label="Adm" value="adm" />
              </Picker>
            </View>
            <AreaBtn style={{ marginTop: 10 }}>
              <Button onPress={salvarEdicao}><TxtBtn>Salvar</TxtBtn></Button>
              <Button onPress={() => setModalVisible(false)}><TxtBtn>Cancelar</TxtBtn></Button>
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
