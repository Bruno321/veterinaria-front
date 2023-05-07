import React,{ createContext, useState } from "react";
import Cookies from "universal-cookie";

export const LoginContext = createContext()
const Provider = ({children})=> {
    const [isAuth,setIsAuth] = useState(()=>{
        return localStorage.getItem('token')
    })
    const [sesionType,setSesionType] = useState(()=>{
        return localStorage.getItem('sesionType')
    })
    const value = {
        isAuth,
        sesionType,
        login:(token,st)=>{
            setIsAuth(true)
            setSesionType(st)
            localStorage.setItem('token',token);
            localStorage.setItem('sesionType',st)
            location.reload();
        },
        logOut:()=>{
            setIsAuth(false)
            localStorage.removeItem('token');
            localStorage.removeItem('sesionType');
            location.reload();
        },
    }

    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}

export default {
    Provider,
    Consumer: LoginContext.Consumer
}