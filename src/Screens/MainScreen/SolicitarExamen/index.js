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
                <ExamenCard nombre={"Hemograma"} idValue={4}/>
                <ExamenCard nombre={"Parásitos"} idValue={5}/>
                <ExamenCard nombre={"Urianálisis"} idValue={6}/>
                </div>
            </div>
        </div>
    )
}