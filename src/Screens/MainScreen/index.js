import React, {useContext,useEffect} from 'react'
import { NavigationContext } from "../../Context/NavigationContext";
import { LoginContext } from '../../Context/LoginContext';

import {Header} from '../../Components/Header'
import {RenderManager} from './RenderManager'

import './index.css'

export const MainScreen = () => {

    const { screen,setScreen } = useContext(NavigationContext);
    const { sesionType } = useContext(LoginContext);

    useEffect(()=>{
        if(sesionType == 0 ){
            setScreen(0)
        } else {
            setScreen(2)
        }
    },[])

    return (
        <div>
            <Header/>
            <RenderManager screen={screen}/>
        </div>
    )
}
