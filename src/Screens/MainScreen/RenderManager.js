import React from 'react'

// Screens
import {LlenarSolicitud} from './LlenarSolicitud'
import {SeguimientoExamenes} from './SeguimientoExamenes'
import {SolicitarExamen} from './SolicitarExamen'
import {Solicitudes} from './Solicitudes'
import { Hemograma } from '../../Components/Examenes/Hemograma'
import { Parasitologia } from '../../Components/Examenes/Parasitologia'
import { UriAnalisis } from '../../Components/Examenes/UriAnalisis'

export const RenderManager = ({screen}) => {

    const handleRender = [
        <SolicitarExamen/>,
        <SeguimientoExamenes/>,
        <Solicitudes/>,
        <LlenarSolicitud/>,
        <Hemograma/>,
        <Parasitologia/>,
        <UriAnalisis/>
    ]

    return (
        <>
            {handleRender[screen]}
        </>
    )
}
