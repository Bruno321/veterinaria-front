import React,{useContext} from "react"
import iconPDF from '../../../Assets/Icons/pdf_clickeable.svg'
import filtro from '../../../Assets/Icons/filtro.svg'
import { NavigationContext } from "../../../Context/NavigationContext"

const dummy_data = [
    {
        id:0,
        examen:"Hermatologia",
        expediente:"HMC-2092-912",
        propietario:"Bruno Ivan Paz Martinez",
        estatus:0,
        pdfLink:'badac-231231-asd',
        fecha:'6 de marzo de 2023',
    },
    {
        id:1,
        examen:"Hermatologia",
        expediente:"HMC-2092-912",
        propietario:"Josue Ramirez",
        estatus:1,
        pdfLink:'badac-231231-asd',
        fecha:'6 de marzo de 2023',
    },
    {
        id:2,
        examen:"Hermatologia",
        expediente:"HMC-2092-912",
        propietario:"Aldair Cruz Mateo",
        estatus:0,
        pdfLink:'badac-231231-asd',
        fecha:'6 de marzo de 2023',
    },
]
export const Solicitudes = () => {
    const {setScreen,setItemId} = useContext(NavigationContext)

    const handleClick = (id) => {
        setItemId(id)
        setScreen(3)
    }
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
                    <p>Todos</p>
                </div>
            </div>

            <div className="seguimientoList-header">
                <p>Propietario</p>
                <div className="divisor"></div>
                <p>Examen</p>
                <div className="divisor"></div>
                <p>Expediente</p>
                <div className="divisor"></div>
                <p>Fecha</p>
                <div className="divisor"></div>
                <p>Estatus</p>
                <div className="divisor"></div>
                <p>Descargar / Rellenar </p>
            </div>

            <div className="seguimientoList">
                {dummy_data.map((element,index)=>{
                    return (
                        <div key={index} className="seguimientoList-element">
                            <p>{element.propietario}</p>
                            <p>{element.examen}</p>
                            <p>{element.expediente}</p>
                            <p>{element.fecha}</p>
                            <p>{element.estatus==0 ? 'Completado' : 'Pendiente'}</p>
                            {element.estatus==1 ? 
                                <div onClick={()=>handleClick(element.id)}>
                                    Llenar expediente
                                </div>
                            :
                            <img style={{cursor:'pointer'} } src={iconPDF }  />
                            }
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}