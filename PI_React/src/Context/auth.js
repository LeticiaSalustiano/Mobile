import React, { createContext, useEffect, useState } from "react";
import { auth } from '../conexao/firebaseConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
                AsyncStorage.setItem('@users', JSON.stringify(user));
            }else {
                setUser(null);
                AsyncStorage.removeItem('@users');
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Função de Login
    async function Login(email, senha) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            setUser(userCredential.user);
        }catch(error) {
            console.log('Erro ao logar:', error);
            throw error;
        }
    }

    // Função de logout
    async function Logout() {
        try {
            await signOut(auth);
            setUser(null);
        }catch(error) {
            console.log('Error ao deslogar:', error);
        }
    }
    return(
        <AuthContext.Provider value={{ user, Login, Logout, loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;