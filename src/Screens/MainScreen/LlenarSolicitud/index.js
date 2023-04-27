import React,{useContext} from "react"
import './index.css'
import { NavigationContext } from "../../../Context/NavigationContext"

export const LlenarSolicitud = () => {
    const {examenType} = useContext(NavigationContext)
    const examenes = [
        
    ]
    return (
        <>
            Llenar solicitud
        </>
    )
}