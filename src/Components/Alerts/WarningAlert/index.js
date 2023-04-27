import React from 'react'
import './index.css'

export const WarningAlert = () => {
    return (
        <div className='warningAlert'>
            <img src={require('../../../Assets/Icons/information.svg')} />
            Nota: Los campos marcados con asteriscos (*) son obligatorios
        </div>
    )
}
