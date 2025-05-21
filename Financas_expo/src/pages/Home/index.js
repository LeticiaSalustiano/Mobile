import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";

import { format } from "date-fns";

import { Background, ListBalance } from './styles';
import Header from "../../components/header";

import api from "../../services/api";

import { useIsFocused } from "@react-navigation/native";

import BalanceItem from "../../components/balanceItem";

export default function Home(){

    const [listBalance, setListBalance] = useState([]);
    const [dateMovements, setDateMovements] = useState(new Date());

    const isFocused = useIsFocused();

   // const [signOut, user] = useState(AuthContext);
    
    useEffect(()=> {
       let isActive = true;
       async function getMoviments() {
         let dateFormat = format(dateMovements, 'dd/MM/yyyy');

         const balance = await api.get('/balance', {
            params:{date:dateFormat}
         })
         //console.log(balance.data);
         //console.log(isFocused);

         setListBalance(balance.data);
       }
       getMoviments();
    }, [isFocused])
    
    return(
        <Background>
            <Header title='Minhas movimentações'></Header>           
           {/* <Button title='Sair da conta' onPress={()=> signOut()}></Button>*/}

           <ListBalance
              data={listBalance}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item=> item.tag}
              renderItem={({item})=> (<BalanceItem data={item}/>)}
           ></ListBalance>
        </Background>
    )
}



