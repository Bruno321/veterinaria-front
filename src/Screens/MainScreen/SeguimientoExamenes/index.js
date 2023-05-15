import React, { useEffect } from "react"
import './index.css'
import filtro from '../../../Assets/Icons/filtro.svg'
import iconPDF from '../../../Assets/Icons/pdf_clickeable.svg'
import iconNoEdit from '../../../Assets/Icons/pdf_no_clickeable.svg'
import { useFetchData } from "../../../Hooks/fetchHook"

const dummy_data = [
    {
        id:0,
        examen:"Hermatologia",
        expediente:"HMC-2092-912",
        nombre:"yumiko",
        estatus:0,
        pdfLink:'badac-231231-asd',
        fecha:'6 de marzo de 2023'
    },
    {
        id:1,
        examen:"Hermatologia",
        expediente:"HMC-2092-912",
        nombre:"yumiko",
        estatus:1,
        pdfLink:'badac-231231-asd',
        fecha:'6 de marzo de 2023'
    },
    {
        id:2,
        examen:"Hermatologia",
        expediente:"HMC-2092-912",
        nombre:"yumiko",
        estatus:0,
        pdfLink:'badac-231231-asd',
        fecha:'6 de marzo de 2023'
    },
]


export const SeguimientoExamenes = () => {

    const [data, loading] = useFetchData('examenes/solicitud?isUser=true');

    return (
        <div className="seguimientoContainer">

            <div className="buscador">
                <input placeholder="Buscar..." className="buscador-input"/>
                <div className="select-buscador">
                    <select name="select">
                        <option value="nuevo" >Mas nuevo</option>
                        <option value="viejo" >Mas viejo</option>
                    </select>
                </div>
                <div className="buscador-filtro">
                    <img src={filtro} style={{width:"30px",height:"30px"}}/>
                    <p>Filtro</p>
                </div>
            </div>

            <div className="seguimientoList-header">
                <p>Examen</p>
                <div className="divisor"></div>
                <p>Expediente</p>
                <div className="divisor"></div>
                <p>Nombre</p>
                <div className="divisor"></div>
                <p>Fecha</p>
                <div className="divisor"></div>
                <p>Estatus</p>
                <div className="divisor"></div>
                <p>Descargar PDF</p>
            </div>

            <div className="seguimientoList">
                {data.map((element,index)=>{
                    return (
                        <div key={index} className="seguimientoList-element">
                            <p>{element.examene.nombre}</p>
                            <p>{element.examen.caso}</p>
                            <p>{element.examen.nombreAnimal}</p>
                            <p>{element.fechaCreacion}</p>
                            <p>{element.pendiente==0 ? 'Pendiente' : 'Completado'}</p>
                            <img  style={
                                        element.pendiente==0 ?
                                        null :
                                        {cursor:'pointer'}
                                    } 
                                src={ element.pendiente==0 ? iconNoEdit :  iconPDF} 
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}