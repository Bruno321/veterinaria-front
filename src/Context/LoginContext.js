import React,{ createContext, useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const LoginContext = createContext()
const Provider = ({children})=> {
    const [isAuth,setIsAuth] = useState(()=>{
        return cookies.get('token')
    })

    const value = {
        isAuth,
        login:(token)=>{
            setIsAuth(true)
            cookies.set('token', token, { path: '/' });
            location.reload();
        },
        logOut:()=>{
            setIsAuth(false)
            cookies.remove('token');
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