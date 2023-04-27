import React from "react"
import './index.css'
import Swal from "sweetalert2"

export const ExamenCard = ({data}) => {
    const handleClick = () => {
        Swal.fire(`¿Seguro que desea solicitar el ${data.titulo}`,'','question')
        Swal.fire({
            title:`¿Seguro que desea solicitar el ${data.titulo}`,
            icon:'question',
            showCancelButton:true,
            confirmButtonColor:'green',
            confirmButtonText:'Si, solicitar',
            cancelButtonText:'Cancelar'
        })
        .then(result=>{
            if(result.isConfirmed){
                Swal.fire('Examen solicitado correctamente', '', 'success')
            }
        })
    }
    return (
        <div className="examenCard-container">
            <img src={data.img}/>
            <h1>{data.titulo}</h1>
            <button onClick={handleClick}>Solicitar examén</button>
        </div>
    )
}