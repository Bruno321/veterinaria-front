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
                    {data.map((e,i)=> {
                        return (
                            <ExamenCard key={i} data={e}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}