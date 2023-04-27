import React, {useContext} from 'react'
import { NavigationContext } from "../../Context/NavigationContext";

import {Header} from '../../Components/Header'
import {RenderManager} from './RenderManager'

import './index.css'

export const MainScreen = () => {

    const { screen } = useContext(NavigationContext);

    return (
        <div>
            <Header/>
            <RenderManager screen={screen}/>
        </div>
    )
}
