import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Background, Header, Texto, BtnArea, Btn, BtnTxt, Area, StatusResumo } from "./styles";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Icone from '@expo/vector-icons/Feather';

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../conexao/firebaseConfig";

const Resgate = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const emailParam = route.params?.email;

  const [nomeUsuario, setNomeUsuario] = useState("Carregando...");
  const [chamadosEmAndamento, setChamadosEmAndamento] = useState(3);

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

  return (
    <Background>
      <Icone name="user" size={64} color="#14c5ec" style={{ marginBottom: 10, marginTop: 13, alignSelf: 'center' }} />
      <Header>Seja bem-vindo, {nomeUsuario}!</Header>
      <Texto>Monitoramento de Resgates da ONG</Texto>

      <StatusResumo>
        <Texto>📋 Resgates em andamento: {chamadosEmAndamento}</Texto>
      </StatusResumo>

      <Area>
        <BtnArea>
          <Btn onPress={() => navigation.navigate("Solicitacoes")} activeOpacity={0.7}>
            <Icone>
              <MaterialIcons name="assignment" size={22} color="#fff" />
            </Icone>
            <BtnTxt>Chamados</BtnTxt>
          </Btn>

          <Btn onPress={() => navigation.navigate("Andamento")} activeOpacity={0.7}>
            <Icone>
              <FontAwesome5 name="table" size={20} color="#fff" />
            </Icone>
            <BtnTxt>Andamento</BtnTxt>
          </Btn>
        </BtnArea>
      </Area>
    </Background>
  );
};

export default Resgate;
