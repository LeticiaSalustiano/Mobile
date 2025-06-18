import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather as Icone } from "@expo/vector-icons";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../conexao/firebaseConfig";
import {
  Background,
  Btn,
  BtnTxt,
  Container,
  Texto,
  Titulo,
  Subtitulo,
} from "./styles";

const Funcionarios = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const emailParam = route.params?.email;
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
        console.error("Erro ao buscar nome do usuário:", error);
        setNomeUsuario("Erro ao carregar nome");
      }
    };

    if (emailParam) {
      buscarNome();
    }
  }, [emailParam]);

  return (
    <Background>
      <Icone name="user" size={64} color="#14c5ec" style={{ marginBottom: 7, marginTop: 13 }} />

      <Titulo>Bem-vinda de volta, {nomeUsuario}!</Titulo>
      <Subtitulo style={{ textAlign: "center", marginTop: 10 }}>
        Obrigado por fazer parte da nossa missão!
      </Subtitulo>

      <Container>
        <Texto style={{ marginBottom: 20, textAlign: "center" }}>
          O que você gostaria de acessar hoje?
        </Texto>

        <Btn onPress={() => navigation.navigate("Horas", { email: emailParam })}>
          <BtnTxt>📅 Ver Detalhes das Horas</BtnTxt>
        </Btn>

        <Btn onPress={() => navigation.navigate("Funcao", { email: emailParam })}>
          <BtnTxt>🛠️ Ver Funções Diárias</BtnTxt>
        </Btn>
      </Container>
    </Background>
  );
};

export default Funcionarios;

