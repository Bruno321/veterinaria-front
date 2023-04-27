import React from "react"
import './index.css'
import filtro from '../../../Assets/Icons/filtro.svg'

const dummy_data = [
    {
        id:0,
        examen:"Hermatologia",
        expediente:"HMC-2092-912",
        nombre:"yumiko",
        estatus:0,
        pdfLink:'badac-231231-asd'
    },
    {
        id:1,
        examen:"Hermatologia",
        expediente:"HMC-2092-912",
        nombre:"yumiko",
        estatus:0,
        pdfLink:'badac-231231-asd'
    },
    {
        id:2,
        examen:"Hermatologia",
        expediente:"HMC-2092-912",
        nombre:"yumiko",
        estatus:0,
        pdfLink:'badac-231231-asd'
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
                <p>PDF</p>
            </div>

            <div className="seguimientoList">
                <div className="seguimientoList-element">
                    <p>Hermatologia</p>
                    <p>MC-209-12</p>
                    <p>Yumiko</p>
                    <p>27 de abril del 2023</p>
                    <p>pendiente</p>
                    <p>pdf</p>
                </div>
            </div>
        </div>
    )
}