import React, {useContext, useState, useEffect} from "react"
import {NavigationContext} from "../../../Context/NavigationContext"
import { SAVE, FIND,process } from "../../../Services/Api"
import Swal from "sweetalert2"

import './index.css'

const oInfoEsp={
    color:'',
    apariencia:'',
    densidad:'',
    proteinas:'',
    glucosa:'',
    sangreHG:'',
    pH:'',
    cetonas:'',
    bilirrubina:'',
    eritrocitos:'',
    leucocitos:'',
    escamosas:'',
    transitorias:'',
    cilindros:'',
    renales:'',
    cristales:'',
    lipidos:'',
    bacterias:'',
    otros:'',
    interpretacion:'',
    examenId:0
}

export const UriAnalisis = ({idValue}) => {
    const {setScreen} = useContext(NavigationContext)
    
    const [informacionGeneral,setInformacionGeneral] = useState({})
    const [informacionEspecifica, setInformacionEspecifica]= useState(oInfoEsp)

    
    //obtener información general mediante un fetch
    const getData = async () => {
        const response = await process(FIND, `examenes/hecho/${idValue}`, {}, {});
        if (response?.data) {
            setInformacionGeneral(response.data);
            setInformacionEspecifica({...informacionEspecifica,examenId:idValue})
        } else {
            console.log('Error', `No se pudo consultar`);
        }
    }

    useEffect(()=>{
        getData()
    },[])

    const handlePotencia = (texto,potencia) => {
        let splited = texto.split('/')
        return (
            <p style={{width:'8%'}}>
                {splited[0]}
                <sup>{potencia}</sup>
                /{splited[1]}
            </p>
        )
    }
    
    //Funcion handle submit
    const handleSubmit = async () => {
        const dataToSend = {
            tipo:'urianalisis',
            id:idValue,
            informacionGeneral:informacionGeneral,
            informacionEspecifica: informacionEspecifica
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
        <div style={{backgroundColor:'white'}}>

            <div className="second-container" >

                <div style={{width:'40%'}} className="horizontal-container">
                    <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Método de obtención::</p>
                </div>
                <div style={{width:'40%'}} className="horizontal-container">
                    <input style={{width:'100%'}} placeholder="Método"/>
                </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} className="vertical-container">
                <p className="left " style={{width:'39%',borderBottom:'1px solid'}}>Examen físico</p>
                <p className="left right" style={{width:'39%',borderBottom:'1px solid'}}>Examen químico</p>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p >Color</p>
                    <input  placeholder="Color" onChange={e => setInformacionEspecifica({...informacionEspecifica,color:e.target.value})}/>
                    <p >Proteínas</p>
                    <select name="select" onChange={e => setInformacionEspecifica({...informacionEspecifica,proteinas:e.target.value})}>
                        <option value="nuevo" >0</option>
                        <option value="nuevo" >Trazas</option>
                        <option value="viejo" >0.15</option>
                        <option value="viejo" >0.3</option>
                        <option value="viejo" >1.0</option>
                        <option value="viejo" >3.0</option>
                        <option value="viejo" >20.0</option>
                    </select> 
                    <p >g/L</p>
                    <p >pH</p>
                    <input placeholder="Ingrese pH" onChange={e => setInformacionEspecifica({...informacionEspecifica,pH:e.target.value})}/>
                </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p >Apariencia</p>
                    <select  name="select" onChange={e => setInformacionEspecifica({...informacionEspecifica,apariencia:e.target.value})}>
                        <option value="nuevo" >Transparente</option>
                        <option value="nuevo" >Turbio 1+</option>
                        <option value="viejo" >Turbio 2+</option>
                        <option value="viejo" >Turbio 3+</option>
                    </select> 
                    <p >Glucosa</p>
                    <select  name="select" onChange={e => setInformacionEspecifica({...informacionEspecifica,glucosa:e.target.value})}>
                        <option value="viejo" >0</option>
                        <option value="viejo" >5</option>
                        <option value="viejo" >15</option>
                        <option value="viejo" >30</option>
                        <option value="viejo" >60</option>
                        <option value="viejo" >110</option>
                    </select> 
                    <p >mmol/L</p>
                    <p >Cetonas</p>
                    <select  name="select" onChange={e => setInformacionEspecifica({...informacionEspecifica,cetonas:e.target.value})}>
                        <option value="nuevo" >Negativo</option>
                        <option value="nuevo" >1+</option>
                        <option value="nuevo" >2+</option>
                        <option value="nuevo" >3+</option>
                    </select> 
                </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p >Densidad</p>
                    <input  placeholder="Ingrese DU" onChange={e => setInformacionEspecifica({...informacionEspecifica,densidad:e.target.value})}/>
                    <p >Sangre/Hg</p>
                    <select  name="select" onChange={e => setInformacionEspecifica({...informacionEspecifica,sangreHG:e.target.value})}>
                        <option value="viejo" >0</option>
                        <option value="viejo" >5-10</option>
                        <option value="viejo" >50</option>
                        <option value="viejo" >>50</option>
                    </select> 
                    <p >mmol/L</p>
                    <p >Bilirrubina</p>
                    <select  name="select" onChange={e => setInformacionEspecifica({...informacionEspecifica,bilirrubina:e.target.value})}>
                        <option value="nuevo" >Negativo</option>
                        <option value="nuevo" >1+</option>
                        <option value="nuevo" >2+</option>
                        <option value="nuevo" >3+</option>
                    </select> 
                </div>
            </div>

            <h2>Examen microscópico</h2>

            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p>Eritrocitos</p>
                    <input  placeholder="Eritrocitos" onChange={e => setInformacionEspecifica({...informacionEspecifica,eritrocitos:e.target.value})}/>
                    <p>Campo 400x</p>
                    <p>Renales</p>
                    <input  placeholder="Renales" onChange={e => setInformacionEspecifica({...informacionEspecifica,renales:e.target.value})}/>
                    <p>Campo 400x</p>
                </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p>Leucocitos</p>
                    <input  placeholder="Leucocitos" onChange={e => setInformacionEspecifica({...informacionEspecifica,leucocitos:e.target.value})}/>
                    <p>Campo 400x</p>
                    <p>Cristales</p>
                    <input  placeholder="Cristales" onChange={e => setInformacionEspecifica({...informacionEspecifica,cristales:e.target.value})}/>
                    <p>Campo 400x</p>
                </div>
            </div>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p>Escamosas</p>
                    <input  placeholder="Escamosas" onChange={e => setInformacionEspecifica({...informacionEspecifica,escamosas:e.target.value})}/>
                    <p>Campo 400x</p>
                    <p>Lipidos</p>
                    <input  placeholder="Lipidos" onChange={e => setInformacionEspecifica({...informacionEspecifica,lipidos:e.target.value})}/>
                    <p>Campo 400x</p>
                </div>
            </div>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p>Transitorias</p>
                    <input  placeholder="Transitorias" onChange={e => setInformacionEspecifica({...informacionEspecifica,transitorias:e.target.value})}/>
                    <p>Campo 400x</p>
                    <p>Bacterias</p>
                    <input  placeholder="Bacterias" onChange={e => setInformacionEspecifica({...informacionEspecifica,transitorias:e.target.value})}/>
                    <p>Campo 400x</p>
                </div>
            </div>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p>Cilindros</p>
                    <input  placeholder="Cilindros" onChange={e => setInformacionEspecifica({...informacionEspecifica,cilindros:e.target.value})}/>
                    <p>Campo 400x</p>
                    <p>Otros:</p>
                    <input  placeholder="Renales" onChange={e => setInformacionEspecifica({...informacionEspecifica,otros:e.target.value})}/>
                    <p>Campo 400x</p>
                </div>
            </div>
            <div className="second-container" >
                <div style={{width:'40%'}} className="horizontal-container">
                    <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Interpretación:</p>
                </div>
                <div style={{width:'40%'}} className="horizontal-container">
                    <input style={{width:'100%'}} placeholder="Interpretación" onChange={e => setInformacionEspecifica({...informacionEspecifica,interpretacion:e.target.value})}/>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"30px"}}>
                <button className="goback-button" onClick={()=>setScreen(2)}>Regresar</button>
                <button className="upload-button" onClick={()=>handleSubmit()}>Registrar resultados</button>
            </div>
        </div>
    )
}