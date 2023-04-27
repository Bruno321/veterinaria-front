import React,{useContext} from "react";

import { LoginContext } from "./Context/LoginContext";

import {Router, Redirect} from '@reach/router'

// Screens
import {MainScreen} from "./Screens/MainScreen"
import {NotFound} from "./Screens/NotFound"
import {Login} from "./Screens/Login";


export const App = () => {

    const {isAuth} = useContext(LoginContext)

    return(
        <div>
            <Router>
                { isAuth != null? 
                // Hay sesion iniciada
                    <>
                        <NotFound default/>
                        <MainScreen path='/' />
                        <Redirect from='/login' to='/' noThrow />
                    </>
                : 
                // No hay sesion iniciada
                <>
                    <NotFound default/> 
                    <Login path='/login' />
                    <Redirect from='/' to='/login' noThrow />
                </>
                }
            </Router>
        </div>
    )
    
}