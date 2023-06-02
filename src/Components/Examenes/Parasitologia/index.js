import React, {useContext} from "react"
import {NavigationContext} from "../../../Context/NavigationContext"
import './index.css'
import { useState } from "react"
import { useEffect } from "react"
import { SAVE, FIND,process } from "../../../Services/Api"
import Swal from "sweetalert2"

const oInfoEsp = {
    tipoMuestra:"",
    tecnica:"",
    resultado:"",
    observaciones:"",
    examenId: 0
}

export const Parasitologia = ({idValue}) => {
    const {setScreen} = useContext(NavigationContext)

    const [informacionGeneral,setInformacionGeneral] = useState({})
    const [loading,setLoading] = useState(true)

    const [informacionEspecifica, setInformacionEspecifica] =useState(oInfoEsp)

    //Obtener infoGeneral mediante fetch
    const getData = async () => {
        const response = await process(FIND, `examenes/hecho/${idValue}`, {}, {});
        if (response?.data) {
            setInformacionGeneral(response.data);
            setInformacionEspecifica({...informacionEspecifica,examenId:idValue})
            setLoading(false)
        } else {
            console.log('Error', `No se pudo consultar`);
        }
    }

    useEffect(()=>{
        getData()
    },[])

    //Funcion handle submit
    const handleSubmit = async () => {
        const dataToSend = {
            tipo:'parasitos',
            id:idValue,
            informacionGeneral:informacionGeneral,
            informacionEspecifica:informacionEspecifica
        }

        //Mandamos el form
        try {
            const response = await process(SAVE,'examenes/',dataToSend)
            Swal.fire('Registro de resultados exitoso', 'success').then(setScreen(2))
        } catch(e){
            console.log(e.response)
            Swal.fire('Error', '', 'error')
        }
    }
  
    return (
        <div>
            <div className="second-container" >

                <div style={{width:'40%'}} className="horizontal-container">
                    <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Tipo de muestra:</p>
                </div>
                <div style={{width:'40%'}} className="horizontal-container">
                    <select name="select" style={{width:'100%'}} onChange={e => setInformacionEspecifica({...informacionEspecifica,tipoMuestra:e.target.value})}>
                        <option value="nuevo" >Raspado</option>
                        <option value="viejo" >Ejemplar de parsito</option>
                        <option value="viejo" >Heces</option>
                        <option value="viejo" >Heces seriadas</option>
                    </select> 
                </div>   
            </div>

            <h2 style={{width:'100%', backgroundColor:'white',textAlign:'center'}}>Examen microscópico</h2>
            <div className="second-container" style={{marginTop:0}}>
                <div style={{width:'40%'}} className="horizontal-container">
                    <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Técnica:</p>
                    <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Resultado:</p>
                </div>
                <div style={{width:'40%'}} className="horizontal-container">
                    <select name="select" style={{width:'100%'}} onChange={e => setInformacionEspecifica({...informacionEspecifica,tecnica:e.target.value})}>
                        <option value="nuevo" >Raspado</option>
                        <option value="viejo" >Ejemplar de parsito</option>
                        <option value="viejo" >Heces</option>
                        <option value="viejo" >Heces seriadas</option>
                    </select> 
                    <input style={{width:'100%'}} placeholder="Resultado" onChange={e => setInformacionEspecifica({...informacionEspecifica,resultado:e.target.value})}/>
                </div>
            </div>
            <div className="second-container" >
                <div style={{width:'40%'}} className="horizontal-container">
                    <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Observaciones:</p>
                </div>
                <div style={{width:'40%'}} className="horizontal-container">
                    <input style={{width:'100%'}} placeholder="Observaciones" onChange={e => setInformacionEspecifica({...informacionEspecifica,observaciones:e.target.value})}/>
                </div>
            </div>

            <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"30px"}}>
                <button className="goback-button" onClick={()=>setScreen(2)}>Regresar</button>
                <button className="upload-button" onClick={() => handleSubmit()}>Registrar resultados</button>
            </div>
        </div>
    )
}