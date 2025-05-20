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

    
    return(
        <Background>
            <Header title='Minhas movimentações'></Header>
        </Background>
    )
}



