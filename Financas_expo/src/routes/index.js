import React from "react";
import { AuthContext } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useContext } from "react";

export default function Routes(){

  const {signed} = useContext(AuthContext);

    const loading = false;

    return(
        signed ? 
          <AppRoutes/> 
        : 
          <AuthRoutes/>
    )
}