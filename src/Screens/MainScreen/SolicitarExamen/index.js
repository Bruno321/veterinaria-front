import React, { useEffect, useState } from "react"
import {ExamenCard} from '../../../Components/Cards/ExamenCard'
import './index.css'
import { useFetchData } from "../../../Hooks/fetchHook"

export const SolicitarExamen = () => {

    const [data, loading] = useFetchData('examenes');
    
    return (
        <div>
            <div className="solicitarExamen-gridContainer">
                <div className="solicitarExamen-grid">
                <ExamenCard nombre={"Hemograma"} idValue={1}/>
                <ExamenCard nombre={"Parásitos"} idValue={2}/>
                <ExamenCard nombre={"Urianálisis"} idValue={3}/>
                </div>
            </div>
        </div>
    )
}