import React from 'react'

// Screens
import {LlenarSolicitud} from './LlenarSolicitud'
import {SeguimientoExamenes} from './SeguimientoExamenes'
import {SolicitarExamen} from './SolicitarExamen'
import {Solicitudes} from './Solicitudes'

export const RenderManager = ({screen}) => {

    const handleRender = [
        <SolicitarExamen/>,
        <SeguimientoExamenes/>,
        <Solicitudes/>,
        <LlenarSolicitud/>
    ]

    return (
        <>
            {handleRender[screen]}
        </>
    )
}
