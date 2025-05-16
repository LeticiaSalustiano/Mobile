import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) { 
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation();

    useEffect(()=> {
        async function loadStorage() {
        const storageUser = await AsyncStorage.getItem('@finToken');
        if(storageUser){
            //console.log("Logado");

            const response = await api.get('./me', {
                headers: {
                    'Authorization': `Baerer ${storageUser}`
                }
            })
            .catch(()=>{setUser(null);})

            api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
            setUser(response.data);
            setLoading(false);
          
        }
        setLoading(false);
    }
      loadStorage();
    }, [])

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
    //console.log('Email: ', email, 'Senha: ', password)
    setLoadingAuth(true);

    try{
         const response = await api.post('./login', {
            email:email,
            password:password
})

    const{id, name, token} = response.data;

    const data = {id, name, email, token};

    await AsyncStorage.setItem('@finToken', token);

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser({id, name, email})

    }catch(err){
        console.log("Erro ao logar", err);
        setLoadingAuth(false);
    }
 }

     async function signOut() {
        await AsyncStorage.clear()
        .then(()=>{
            setUser(null);
        })
     }

    return (
        <AuthContext.Provider value={{ signed: !! user, user, singUp, singIn, signOut, loadingAuth, loading }}>
            {children} 
        </AuthContext.Provider>
    );
}

export default AuthProvider;
