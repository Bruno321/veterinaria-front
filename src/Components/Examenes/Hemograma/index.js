import React, {useContext, useState, useEffect} from "react"
import {NavigationContext} from "../../../Context/NavigationContext"
import { SAVE, FIND,process } from "../../../Services/Api"
import Swal from "sweetalert2"

import './index.css'


const  data = [
    {
        mesurando:'Hematocrito',
        referencia:'0.37 - 0.55',
        unidades:'L/L',
        morfologiaCelular:'Anisocitosis',
        potencia:''
    },
    {
        mesurando:'Hemoglobina',
        referencia:'120 - 180',
        unidades:'g/L',
        morfologiaCelular:'Policromasia',
        potencia:''
    },
    {
        mesurando:'Eritrocitos',
        referencia:'5.5 - 8.5',
        unidades:'x10/L',
        morfologiaCelular:'P. Basofílico',
        potencia:'12'
    },
    {
        mesurando:'VGM',
        referencia:'60 - 77',
        unidades:'fL',
        morfologiaCelular:'Hipocromía',
        potencia:''
    },
    {
        mesurando:'CGMH',
        referencia:'320 - 360',
        unidades:'g/L',
        morfologiaCelular:'Aglutinación',
        potencia:''
    },
    {
        mesurando:'Reticulocitos',
        referencia:'<60',
        unidades:'x10/L',
        morfologiaCelular:'Rouleaux',
        potencia:'9'
    },
    {
        mesurando:'Plaquetas',
        referencia:'200-600',
        unidades:'x10/L',
        morfologiaCelular:'Metarrubricitos',
        potencia:'9'
    },
    {
        mesurando:'Sólidos Totales',
        referencia:'60 - 75',
        unidades:'g/L',
        morfologiaCelular:'Poiquilocitosis',
        potencia:''
    },
]

const oInfoEsp = {
    Hematrocito:'',
    Hemoglobina:'',
    Eritrocitos:'',
    VGM:'',
    CGMH:'',
    Reticulocitos:'',
    Plaquetas:'',
    SolidosTotales:'',
    LeucocitosTotales:'',
    Neutrófilos:'',
    Bandas:'',
    Linfocitos:'',
    Monocitos:'',
    Eosinófilos:'',
    Basofilos:'',
    HematrocitoVar:'',
    HemoglobinaVar:'',
    EritrocitosVar:'',
    VGMVar:'',
    CGMHVar:'',
    ReticulocitosVar:'',
    PlaquetasVar:'',
    SolidosTotalesVar:'',
    Leucocitos_TotalesVar:'',
    NeutrófilosVar:'',
    BandasVar:'',
    LinfocitosVar:'',
    MonocitosVar:'',
    EosinófilosVar:'',
    BasofilosVar:'',
    Anisocitosis:'',
    Policromasia:'',
    PBasofilico:'',
    Hipocromía:'',
    Aglutinación:'',
    Rouleaux:'',
    Metarrubricitos:'',
    Poiquilocitosis:'',
    Tipo:'',
    NeutrofilosToxicos:'',
    LinfocitosReactivos:'',
    MieloInmaduros:'',
    Microfilarias:'',
    Macroplaquetas:'',
    Artefactos:'',
    interpretacion:'',
    examenId:0
}

export const Hemograma = ({idValue}) => {
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
            tipo:'hemograma',
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
        <div className="form-container">
                <div className="vertical-container bottom">
                    <p style={{textAlign:'left',width:'10%'}}>Mesurando</p>
                    <p style={{width:'8%'}}>Valor</p>
                    <p style={{width:'8%'}}>Variación</p>
                    <p style={{width:'8%'}}>Referencia</p>
                    <p style={{width:'8%'}}>Unidades</p>
                    <p style={{}}>Morfología celular</p>
                </div>
                {data.map((data,i)=>{
                        return (
                            <>
                                <div className="vertical-container" key={i}>
                                    <p style={{textAlign:'left',width:'10%'}}>{data.mesurando}</p>
                                    <input placeholder="Valor"/>
                                    <select name="select">
                                        <option value="nuevo" >-</option>
                                        <option value="nuevo" >Alto</option>
                                        <option value="viejo" >Bajo</option>
                                        <option value="viejo" >NC</option>
                                    </select> 
                                    <p style={{width:'8%'}}>{data.referencia}</p>
                                    {
                                        data.potencia!=''?
                                        handlePotencia(data.unidades,data.potencia) 
                                        : 
                                        <p style={{width:'8%'}}>{data.unidades}</p>
                                    }
                                    <p style={{width:'15%'}}>{data.morfologiaCelular}</p>
                                    <select name="select" style={{width:'11%'}}>
                                        <option value="nuevo" >-</option>
                                        <option value="nuevo" >Alto</option>
                                        <option value="viejo" >Bajo</option>
                                        <option value="viejo" >NC</option>
                                    </select> 
                                </div>
                                <div className="divisor-container">
                                    <div className="divisor2"></div>
                                </div>

                            </>
                        )
                    })}
                    <div className="vertical-container">
                        <div style={{width:'45%'}}>

                            <div className="vertical-container">
                                <p style={{textAlign:'left',width:'25%'}}>Leucocitos Totales</p>
                                <input style={{width:'20%',padding:'8px'}} placeholder="Valor" onChange={e => setInformacionEspecifica({...informacionEspecifica,LeucocitosTotales:e.target.value})}/>
                                <select style={{width:'20%',padding:'8px'}} name="select" onChange={e => setInformacionEspecifica({...informacionEspecifica,Leucocitos_TotalesVar:e.target.value})}>
                                    <option value="nuevo" >-</option>
                                    <option value="nuevo" >Alto</option>
                                    <option value="viejo" >Bajo</option>
                                    <option value="viejo" >NC</option>
                                </select> 
                                <p style={{width:'16%'}}>6.0 - 17.0</p>
                                <p style={{width:'16%'}}>x10<sup>9</sup>/L</p>
                            </div>

                            <div  className="divisor-container">
                                <div style={{width:'100%'}} className="divisor2"></div>
                            </div>

                            <div style={{justifyContent:'space-evenly'}} className="vertical-container">
                                <p style={{textAlign:'left',width:'25%'}}>Neutrófilos</p>
                                <input style={{width:'20%',padding:'8px'}} placeholder="Valor" onChange={e => setInformacionEspecifica({...informacionEspecifica,Neutrófilos:e.target.value})}/>
                                <select style={{width:'20%',padding:'8px'}} name="select" onChange={e => setInformacionEspecifica({...informacionEspecifica,NeutrófilosVar:e.target.value})}>
                                    <option value="nuevo" >-</option>
                                    <option value="nuevo" >Alto</option>
                                    <option value="viejo" >Bajo</option>
                                    <option value="viejo" >NC</option>
                                </select> 
                                <p style={{width:'16%'}}>3.0 - 11.5</p>
                                <p style={{width:'16%'}}>x10<sup>9</sup>/L</p>
                            </div>

                            <div  className="divisor-container">
                                <div style={{width:'100%'}} className="divisor2"></div>
                            </div>


                            <div style={{justifyContent:'space-evenly'}} className="vertical-container">
                                <p style={{textAlign:'left',width:'25%'}}>Bandas</p>
                                <input style={{width:'20%',padding:'8px'}} placeholder="Valor"/>
                                <select style={{width:'20%',padding:'8px'}} name="select">
                                    <option value="nuevo" >-</option>
                                    <option value="nuevo" >Alto</option>
                                    <option value="viejo" >Bajo</option>
                                    <option value="viejo" >NC</option>
                                </select> 
                                <p style={{width:'16%'}}>0 - 0.3</p>
                                <p style={{width:'16%'}}>x10<sup>9</sup>/L</p>
                            </div>

                            <div  className="divisor-container">
                                <div style={{width:'100%'}} className="divisor2"></div>
                            </div>
                            
                        </div>
                        <div className="large-input-container">
                            <textarea placeholder="Tipo"/>
                        </div>
                    </div>
                    
                    <div className="vertical-container" >
                        <p style={{textAlign:'left',width:'10%'}}>Linfocitos</p>
                        <input placeholder="Valor"/>
                        <select name="select">
                            <option value="nuevo" >-</option>
                            <option value="nuevo" >Alto</option>
                            <option value="viejo" >Bajo</option>
                            <option value="viejo" >NC</option>
                        </select> 
                        <p style={{width:'8%'}}>1.0 - 4.8</p>
                        <p style={{width:'8%'}}>x10<sup>9</sup>/L</p>
                        <p style={{width:'15%'}}>Neutrófilos tóxicos</p>
                        <select name="select" style={{width:'11%'}}>
                            <option value="nuevo" >-</option>
                            <option value="nuevo" >Alto</option>
                            <option value="viejo" >Bajo</option>
                            <option value="viejo" >NC</option>
                        </select> 
                    </div>
                    <div className="divisor-container">
                        <div className="divisor2"></div>
                    </div>

                    <div className="vertical-container" >
                        <p style={{textAlign:'left',width:'10%'}}>Monocitos</p>
                        <input placeholder="Valor"/>
                        <select name="select">
                            <option value="nuevo" >-</option>
                            <option value="nuevo" >Alto</option>
                            <option value="viejo" >Bajo</option>
                            <option value="viejo" >NC</option>
                        </select> 
                        <p style={{width:'8%'}}>0 - 1.4</p>
                        <p style={{width:'8%'}}>x10<sup>9</sup>/L</p>
                        <p style={{width:'15%'}}>Linfocitos reactivos</p>
                        <select name="select" style={{width:'11%'}}>
                            <option value="nuevo" >-</option>
                            <option value="nuevo" >Alto</option>
                            <option value="viejo" >Bajo</option>
                            <option value="viejo" >NC</option>
                        </select> 
                    </div>
                    <div className="divisor-container">
                        <div className="divisor2"></div>
                    </div>
                
                    <div className="vertical-container" >
                        <p style={{textAlign:'left',width:'10%'}}>Eosinófilos</p>
                        <input placeholder="Valor"/>
                        <select name="select">
                            <option value="nuevo" >-</option>
                            <option value="nuevo" >Alto</option>
                            <option value="viejo" >Bajo</option>
                            <option value="viejo" >NC</option>
                        </select> 
                        <p style={{width:'8%'}}>0 - 0.9</p>
                        <p style={{width:'8%'}}>x10<sup>9</sup>/L</p>
                        <p style={{width:'15%'}}>Mielo. Inmaduros</p>
                        <select name="select" style={{width:'11%'}}>
                            <option value="nuevo" >-</option>
                            <option value="nuevo" >Alto</option>
                            <option value="viejo" >Bajo</option>
                            <option value="viejo" >NC</option>
                        </select> 
                    </div>
                    <div className="divisor-container">
                        <div className="divisor2"></div>
                    </div>

                    <div className="vertical-container" >
                        <p style={{textAlign:'left',width:'10%'}}>Basófilos</p>
                        <input placeholder="Valor"/>
                        <select name="select">
                            <option value="nuevo" >-</option>
                            <option value="nuevo" >Alto</option>
                            <option value="viejo" >Bajo</option>
                            <option value="viejo" >NC</option>
                        </select> 
                        <p style={{width:'8%'}}>Raros</p>
                        <p style={{width:'8%'}}>x10<sup>9</sup>/L</p>
                        <p style={{width:'15%'}}>Microfilarias</p>
                        <select name="select" style={{width:'11%'}}>
                            <option value="nuevo" >-</option>
                            <option value="nuevo" >Alto</option>
                            <option value="viejo" >Bajo</option>
                            <option value="viejo" >NC</option>
                        </select> 
                    </div>
                    <div className="divisor-container">
                        <div className="divisor2"></div>
                    </div>

                    <div className="vertical-container" >
                        <p style={{textAlign:'left',width:'10%'}}>Artefactos</p>
                        <input style={{width:'35%'}} placeholder="Ninguno"/>
                        <p style={{width:'15%'}}>Macroplaquetas</p>
                        <select name="select" style={{width:'11%'}}>
                            <option value="nuevo" >-</option>
                            <option value="nuevo" >Alto</option>
                            <option value="viejo" >Bajo</option>
                            <option value="viejo" >NC</option>
                        </select> 
                    </div>
                    <div className="divisor-container">
                        <div className="divisor2"></div>
                    </div>
                    <div className="second-container" >
                        <div style={{width:'40%'}} className="horizontal-container">
                            <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Interpretación:</p>
                        </div>
                        <div style={{width:'40%'}} className="horizontal-container">
                            <input style={{width:'100%'}} placeholder="Interpretación"/>
                        </div>
                    </div>

                    <div style={{display:"flex", justifyContent:"space-evenly", marginBottom:"30px"}}>
                        <button className="goback-button" onClick={()=>setScreen(2)}>Regresar</button>
                        <button className="upload-button" onClick={()=>handleSubmit()}>Registrar resultados</button>
                    </div>
        </div>
    )
}