import React, { createContext, useState } from "react";
import api from "../services/api";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) { 
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [signedAuth, setSignedAuth] = useState(false)

    const navigation = useNavigation();

 async function singUp(nome,email,password) {
    setLoadingAuth(true);
    //console.log('Usuario Cadastrado', nome, email, password)
   try{
        const response = await api.post('/users', {
            name:nome,
            email:email,
            password:password,
        })
        setLoading(false);
        navigation.goBack();

   } catch(err){
    setLoading(false);
    console.log("Erro ao Cadastrar", err)
   }
 }

 async function singIn(email, password) {
    setSignedAuth(true);
    console.log('Login aceito', email, password)

    try{
        const response = await api.post('/login', {
            email:email,
            password:password,
        })
        setSignedAuth(false);

   } catch(err){
    setSignedAuth(false);
    console.log("Erro de Login", err)
   }
 }

 

    return (
        <AuthContext.Provider value={{ signed: !! user, user, singUp,singIn, loadingAuth, setSignedAuth }}>
            {children} 
        </AuthContext.Provider>
    );
}

export default AuthProvider;
