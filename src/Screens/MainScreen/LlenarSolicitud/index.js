import React,{useContext,useEffect,useState} from "react"
import './index.css'
import { NavigationContext } from "../../../Context/NavigationContext"
import {FormGeneral} from '../../../Components/Examenes/FormGeneral'
import { Hemograma } from "../../../Components/Examenes/Hemograma"
import { Parasitologia } from "../../../Components/Examenes/Parasitologia"
import { UriAnalisis } from "../../../Components/Examenes/UriAnalisis"

export const LlenarSolicitud = () => {
    
    const examenes = [
        <Hemograma/>,
        <Parasitologia/>,
        <UriAnalisis/>
    ]
    return (
        <div className="seguimientoContainer">
            <h2>Resultados nombreExamen</h2>
            <FormGeneral/>
            {examenes[2]}
            <div className="btn-container">
                <div className="upload-button">
                    Subir resultados
                </div>
            </div>
        </div>
    )
}   