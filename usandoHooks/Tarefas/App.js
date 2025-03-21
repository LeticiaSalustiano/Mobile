import React, { useState, useEffect, useMemo, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';

export default function App() {

  //useState:
  //Armazena a lista de tarefas
  const [tarefas, setTarefas] = useState([]);
  //Armazena nova tarefa
  const [novaTarefa, setNovaTarefa] = useState('');
  //useRef:
  //Para focar no campo de entrada
  const inputRef = useRef(null);

  //useEffect:
  //Para salvar sempre que for atualizada
  useEffect(() => {
    const loadTarefas = async () => {
      const storedTarefas = await AsyncStorage.getItem('tarefas');
      if (storedTarefas) {
        setTarefas(JSON.parse(storedTarefas));
      }
    };
    loadTarefas();
  }, []);

  useEffect(() => {
    const saveTarefas = async () => {
      await AsyncStorage.setItem('tarefas', JSON.stringify(tarefas));
    };
    saveTarefas();
  }, [tarefas]);

  //useMemo:
  //Calcula o número de tarefas concluidas
  const concluidas = useMemo(() => {
    return tarefas.filter((tarefa) => tarefa.concluida).length;
  }, [tarefas]);

  const adicionar = () => {
    if (novaTarefa.trim() === '') return;

    const novaLista = [
      ...tarefas,
      { id: Date.now(), texto: novaTarefa, concluida: false },
    ];
    setTarefas(novaLista);
    setNovaTarefa('');
    inputRef.current && inputRef.current.focus(); // foco no campo de entrada
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const marcarComoConcluida = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.titulo}>Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        ref={inputRef}
        value={novaTarefa}
        onChangeText={(text) => setNovaTarefa(text)}
        placeholder="Digite uma nova tarefa"
      />
      <TouchableOpacity style={styles.btn} onPress={adicionar}>
        <Text style={styles.btnTexto}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <Text style={styles.titulo2}>Suas Tarefas:</Text>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Tarefa</Text>
          <Text style={styles.tableHeaderText}>Ações</Text>
        </View>

        {tarefas.map((tarefa) => (
          <View key={tarefa.id} style={styles.tableRow}>
            <Text style={styles.tableCell}>{tarefa.texto}</Text>
            <View style={styles.actions}>
              <Switch
                value={tarefa.concluida}
                onValueChange={() => marcarComoConcluida(tarefa.id)}
              />
             <TouchableOpacity style={styles.btnRemover} onPress={() => removerTarefa(tarefa.id)}>
                  <Text style={styles.btnText}>Remover</Text>
             </TouchableOpacity>
         </View>
          </View>
        ))}
      </View>

      <Text style={styles.final}>Concluídas: {concluidas}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 55,
  },

  titulo: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 35, 
    margin: 40,
  },

  titulo2: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25, 
    marginTop: 50,
  },

  
  input: {
    margin: 20,
    alignSelf: 'center',
    width: 370,
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },

  btn: {
    borderRadius: 5,
    margin: 30,
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  btnTexto:{
    color: '#fff',
    fontWeight: 'bold',
  },

  table: {
    marginTop: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },

  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },

  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },

  btnRemover: {
    backgroundColor: '#ff5c5c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
  final: {
    marginTop: 15,
    fontWeight: 'bold',
    padding: 15,
    fontSize: 15,
  }
});

