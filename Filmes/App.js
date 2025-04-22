import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import api from './src/Services/api';
import Filmes from './src/Filmes';

export default function App() {

  const [filmes, setFilmes] = useState([]);
  const [loadind, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const resposta = await api.get('r-api/?api=filmes');
      setFilmes(resposta.data);
      setLoading(false);
    }
    loadFilmes();
  }, []);

   if(loadind){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
        <ActivityIndicator color={'#121212'} size={80}></ActivityIndicator>
      </View>
    );
   } else {
       return (
         <View style={styles.container}>
           <FlatList
            showsVerticalScrollIndicator={false}
            data={filmes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Filmes data={item}></Filmes>}
          />
      </View>
    );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});


  