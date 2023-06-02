import React,{useContext} from "react"
import iconPDF from '../../../Assets/Icons/pdf_clickeable.svg'
import filtro from '../../../Assets/Icons/filtro.svg'
import { NavigationContext } from "../../../Context/NavigationContext"
import moment from "moment/moment";
import { useFetchData } from "../../../Hooks/fetchHook"

import './index.css'


export const Solicitudes = () => {
    const {setScreen,setItemId} = useContext(NavigationContext)
    const [data, loading] = useFetchData('examenes/solicitud');

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
                <p>Fecha</p>
                <div className="divisor"></div>
                <p>Estatus</p>
                <div className="divisor"></div>
                <p>Opciones</p>
            </div>

            <div className="seguimientoList">
                {data.map((element,index)=>{
                    // 0 pendeinte, 1 completado
                    return (
                        <div key={index} className="seguimientoList-element">
                            <p>{element.usuario.nombres + element.usuario.apellidos}</p>
                            <p>{element.examene.nombre}</p>
                            <p>{moment(element.fechaCreacion).format('DD/MM/YYYY')}</p>
                            <p>{element.pendiente==0 ? 'Pendiente' : 'Completado'}</p>
                            {element.pendiente==0 ? 
                                <div className="llenar-button" onClick={()=>handleClick(element.examenId)}>
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