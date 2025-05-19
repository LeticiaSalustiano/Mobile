import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";

import { format } from "date-fns";

import { Background } from './styles';
import Header from "../../components/header";

import api from "../../services/api";

export default function Home(){

    const [listBalance, setListBalance] = useState([]);
    const [dateMovements, setDateMovements] = useState(new Date());

    useEffect(()=> {
        let isActive = true;
        async function getMovements() {
            let dateFormat = format(dateMovements, 'dd/mm/yyyy');

            const balance = await api.get('/balance', {
                params:{date:dateFormat}
            })
            console.log(balance.data);
        }
        getMovements();
    }, [])

    return(
        <Background>
            <Header title='Minhas movimentações'></Header>
        </Background>
    )
}



