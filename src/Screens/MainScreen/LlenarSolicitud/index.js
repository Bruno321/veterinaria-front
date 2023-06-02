import React,{useContext,useEffect,useState} from "react"
import './index.css'
import { NavigationContext } from "../../../Context/NavigationContext"
import {FormGeneral} from '../../../Components/Examenes/FormGeneral'
import { Hemograma } from "../../../Components/Examenes/Hemograma"
import { Parasitologia } from "../../../Components/Examenes/Parasitologia"
import { UriAnalisis } from "../../../Components/Examenes/UriAnalisis"
import { FIND,process } from "../../../Services/Api"

export const LlenarSolicitud = () => {
    const {itemId} = useContext(NavigationContext)

    const [informacionGeneral,setInformacionGeneral] = useState({})
    const [loading,setLoading] = useState(true)

    const getData = async () => {
        const response = await process(FIND, `examenes/hecho/${itemId}`, {}, {});
        if (response?.data) {
            setInformacionGeneral(response.data);
            setLoading(false)
        } else {
            console.log('Error', `No se pudo consultar`);
        }
    }

    useEffect(()=>{
        getData()
    },[])

    const examenes = [
        <Hemograma />,
        <Parasitologia idValue={itemId}/>,
        <UriAnalisis />
    ]
    
    return (
        <div className="seguimientoContainer">
            {loading ? <>Loading</>: 
                <>
                    <h2 className="h2-Resultados">Registrar resultados de {informacionGeneral.examene.nombre}:</h2><br/>
            <FormGeneral data={informacionGeneral} setInformacionGeneral={setInformacionGeneral}/>
            {examenes[informacionGeneral.exameneId - 1]}
                </>
            }
            
        </div>
    )
}   