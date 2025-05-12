import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) { 
    const [user, setUser] = useState({
        nome: 'Leticia',
        password: '123456',
        email: 'leticia@gmail.com',
    });

    return (
        <AuthContext.Provider value={{ user }}>
            {children} 
        </AuthContext.Provider>
    );
}

export default AuthProvider;
