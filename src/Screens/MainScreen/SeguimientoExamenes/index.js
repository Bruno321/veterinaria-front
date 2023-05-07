import React from "react"
import './index.css'
import filtro from '../../../Assets/Icons/filtro.svg'
import iconPDF from '../../../Assets/Icons/pdf_clickeable.svg'
import iconNoEdit from '../../../Assets/Icons/pdf_no_clickeable.svg'

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

const options = [
    { value: 'chocolate', label: 'Mas nuevo' },
    { value: 'strawberry', label: 'Mas viejo' },
  ]
export const SeguimientoExamenes = () => {


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
                {dummy_data.map((element,index)=>{
                    return (
                        <div key={index} className="seguimientoList-element">
                            <p>{element.examen}</p>
                            <p>{element.expediente}</p>
                            <p>{element.nombre}</p>
                            <p>{element.fecha}</p>
                            <p>{element.estatus==0 ? 'Completado' : 'Pendiente'}</p>
                            <img  style={
                                        element.estatus==0 ?
                                        {cursor:'pointer'} :
                                        null
                                    } 
                                src={ element.estatus==0 ? iconPDF :  iconNoEdit} 
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}