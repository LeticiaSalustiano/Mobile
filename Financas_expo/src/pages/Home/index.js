import React, { useState, useEffect, useContext } from "react";
import { TouchableOpacity, Modal } from "react-native";
import { Background, ListBalance, Title, Area, List } from './styles';

import Header from "../../components/header";
import api from "../../services/api";
import BalanceItem from "../../components/balanceItem";
import HistoricoList from "../../components/historicoList";
import CalendarModal from "../../components/calendarModal";
import { AuthContext } from "../../contexts/auth";

import { useIsFocused } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import { format } from "date-fns";

export default function Home(){

    const [listBalance, setListBalance] = useState([]);
    const [dateMovements, setDateMovements] = useState(new Date());
    const [movements, setMovements]= useState([]);
    const [modalVisible, setModalVisible] = useState(false)

    const isFocused = useIsFocused();



    
    useEffect(()=> {
       let isActive = true;
       async function getMoviments() {
         let dateFormat = format(dateMovements, 'dd/MM/yyyy');

         const receives = await api.get('/receives', {
            params:{date:dateFormat}
         })

         const balance = await api.get('/balance', {
            params:{date:dateFormat}
         })
         //console.log(balance.data);
         //console.log(isFocused);

         setMovements(receives.data)
         setListBalance(balance.data);
       }
       getMoviments();
    }, [isFocused, dateMovements])

    async function handleDelete(id) {
      alert('Deletou index' + id)

      try{
         await api.delete('/receives/delete',{ 
            params:{
               item_id: id
            }
         })
         setDateMovements(new Date());
      }catch(err){
         console.log(err);
      }
    }

    function filterDatesMovements(dateSelected){
      setDateMovements(dateSelected)
        //console.log(dateSelected)
    }
    
    return(
      <Background>
            <Header title='Minhas movimentações'></Header>           
           {/*<Button title='Sair da conta' onPress={()=> signOut()}></Button>*/}

           <ListBalance
              data={listBalance}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item=> item.tag}
              renderItem={({item})=> (<BalanceItem data={item}/>)}
           ></ListBalance>

   <Area>
        <TouchableOpacity onPress={()=> setModalVisible(true)}>
          <Icon name="calendar" size={25} color="#121212" marginTop={10}></Icon>  
        </TouchableOpacity>
          <Title>Últimas Movimentações</Title>
   </Area>
   
      <List
         data={movements}
         keyExtractor={item=> item.id}
         renderItem={({item})=> (<HistoricoList data={item} deleteItem={handleDelete}/>)}
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{paddingBottom: 20}}>     
      </List>

      <Modal
         visible={modalVisible}
         animationType="slide"
         transparent={true}>
           <CalendarModal 
           setVisible={()=> setModalVisible(false)}
           handleFilter={filterDatesMovements}/>
      </Modal>
   </Background>
    )
}



