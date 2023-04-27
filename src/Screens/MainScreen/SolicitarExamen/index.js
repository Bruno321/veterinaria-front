import React from "react"
import {ExamenCard} from '../../../Components/Cards/ExamenCard'
import './index.css'

export const SolicitarExamen = () => {
    const dummy = [
        {
            img: require('../../../Assets/Imgs/perro.svg'),
            titulo: "Examen de hermatología",
        },
        {
            img: require('../../../Assets/Imgs/caballos.svg'),
            titulo: "Examen de pariitología",
        },
        {
            img: require('../../../Assets/Imgs/gato.svg'),
            titulo: "Examen de urianálisis",
        },
        {
            img: require('../../../Assets/Imgs/gato.svg'),
            titulo: "Examen de urianálisis"
        },
        {
            img: require('../../../Assets/Imgs/gato.svg'),
            titulo: "Examen de urianálisis"
        },
        {
            img: require('../../../Assets/Imgs/gato.svg'),
            titulo: "Examen de urianálisis"
        },
    ]
    return (
        <div>
            <div className="solicitarExamen-gridContainer">
                <div className="solicitarExamen-grid">
                    {dummy.map(e=> {
                        return (
                            <ExamenCard data={e}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}