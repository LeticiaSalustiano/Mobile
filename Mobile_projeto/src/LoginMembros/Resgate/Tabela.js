import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Background, Header, Tabela, Linha, Texto, BtnArea, Btn, BtnTxt, Area, Texto2,} from "./styles";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Icone from '@expo/vector-icons/Feather';

const enderecoResgateInicial = [
  { id: "1", local: "Praça Central", tipo: "Cachorro", status: "Pendente",  responsavel: "Júlio", gravidade: "Emergência"},
  { id: "2", local: "Avenida Paulista", tipo: "Gato", status: "Em andamento", responsavel: "Márcio", gravidade: "Urgente"},
  { id: "3", local: "Rua das Flores", tipo: "Pássaro", status: "Finalizado", responsavel: "Erica", gravidade: "Pouco urgente"}
];

const statusColors = {
  "Pendente": "red",
  "Em andamento": "orange",
  "Finalizado": "green"
};

const graviColors = {
    "Emergência": "red",
    "Urgente": "orange",
    "Pouco urgente": "green"
  };

const Andamento = () => {
  const navigation = useNavigation();
  const [resgates, setResgates] = useState(enderecoResgateInicial);
  const [filtroStatus, setFiltroStatus] = useState("Todos");

  const resgatesFiltrados = filtroStatus === "Todos"
    ? resgates
    : resgates.filter(r => r.status === filtroStatus);

  const renderItem = ({ item }) => (
    <Linha>
      <Texto2>{item.local} - {item.tipo}</Texto2>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            backgroundColor: statusColors[item.status],
            marginRight: 8
          }}
        />
        <Text>{item.status}</Text>
      </View>
    </Linha>
  );

  return (
    <Background>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight: 5, marginTop: 1}}>
           <Icone name="arrow-left" size={25}></Icone>
        </TouchableOpacity>

      <Header>Tabela de Resgates</Header>
    </View>
      <Texto>Aqui você encontra os estados dos resgates</Texto>

      <Area>
        {/* Filtro de status */}
        <BtnArea>
          <Picker
            selectedValue={filtroStatus}
            style={{ height: 50, width: "100%", backgroundColor: "#fff", marginTop: 20 }}
            onValueChange={(itemValue) => setFiltroStatus(itemValue)}
          >
            <Picker.Item label="Todos" value="Todos" />
            <Picker.Item label="Pendente" value="Pendente" />
            <Picker.Item label="Em andamento" value="Em andamento" />
            <Picker.Item label="Finalizado" value="Finalizado" />
          </Picker>
        </BtnArea>

        {/* Tabela de resgates */}
        <Tabela>
          <FlatList
            data={resgatesFiltrados}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </Tabela>

      </Area>
    </Background>
  );
};

export default Andamento;
