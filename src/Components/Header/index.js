import React, {useContext} from 'react'

import {NavigationContext} from '../../Context/NavigationContext'

import {DropMenu} from '../DropMenu'

import './index.css'

export const Header = () => {
    const {screen,setScreen} = useContext(NavigationContext)

    return (
        <div className='header-container'>
            <div className="header">
                <h3>Veterinaria</h3>
                <div className="header-logo-container">
                    <p onClick={()=>setScreen(0)} className={screen===0?"underlineText":"headerText"} >Solicitar examen</p>
                    <img
                        onClick={()=>setScreen(0)} 
                        alt={"Logo dashboard"}
                        src={require('../../Assets/Icons/dashboard.svg')}
                    />
                </div>
                <div className="header-logo-container">
                    <p onClick={()=>setScreen(1)} className={screen===1?"underlineText":"headerText"}>Seguimiento de examenes</p>
                    <img
                        onClick={()=>setScreen(1)} 
                        alt={"Logo capturar carga"}
                        src={require("../../Assets/Icons/clipboard.svg")}/>
                </div>
                <div className="header-logo-container">
                    <p onClick={()=>setScreen(2)} className={screen===2?"underlineText":"headerText"}>Cerrar sesión</p>
                    <img
                        onClick={()=>setScreen(2)} 
                        alt={"Logo crear bitacora"}
                        src={require("../../Assets/Icons/cerrar_sesion.svg")}/>
                </div>
                <p>Jorge Josue Alvarez Martinez</p>
                {/* <DropMenu/> */}
            </div>
        </div>
    )
}
