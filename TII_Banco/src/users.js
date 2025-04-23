import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { db } from './firebaseConnection';
import { doc, deleteDoc } from 'firebase/firestore';

export function UserList({ data }) {

    async function deletar(){   
        const docRef = doc(db, "users", data.id)
        await deleteDoc(docRef)
}

    return (
        <View style={styles.container}>         
            <Text style={styles.textList}>Nome: {data.nome}</Text>
            <Text style={styles.textList}>Idade: {data.idade}</Text>
            <Text style={styles.textList}>Cargo: {data.cargo}</Text> 

            <TouchableOpacity style={styles.deletar} onPress={deletar}>
                <Text style={styles.txtBtn}>Deletar usuário</Text>
                </TouchableOpacity>         
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f0f0f0',
      padding: 8,
      borderRadius: 5,
      marginBottom: 14,
    },
    textList: {
      color: '#000',
      padding: 5,
      fontWeight: 'bold',
    },
    deletar: {
      backgroundColor: 'red',
      alignSelf: 'flex-start', 
      padding: 4,
      marginTop: 16,
      borderRadius: 5,
    },
    txtBtn: {
      paddingLeft: 8,
      paddingRight: 8,
      color: '#fff',
      fontWeight: 'bold'
    },
});
