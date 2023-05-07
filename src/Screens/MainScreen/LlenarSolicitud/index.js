import React,{useContext} from "react"
import './index.css'
import { NavigationContext } from "../../../Context/NavigationContext"

export const LlenarSolicitud = () => {
    
    return (
        <div className="seguimientoContainer">
            <h2>Resultados nombreExamen</h2>

            <div className="topForm-container">
                <div className="horizontal-container">
                    <p>Caso:</p>
                    <p>Propietario:</p>
                    <p>Dirección:</p>
                    <p>Teléfono:</p>
                </div>
                {/* TODO si ya existe el propietario se puede autocompletar */}
                <div className="horizontal-container">
                    <input placeholder="Ingrese la dirección del propietario"/>
                    <input placeholder="Ingrese el nombre del propietario"/>
                    <input placeholder="Ingrese la dirección del propietario"/>
                    <input placeholder="Ingrese el teléfono del propietario"/>
                </div>
            </div>

        </div>
    )
}