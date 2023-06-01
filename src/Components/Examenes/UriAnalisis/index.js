import React, {useContext} from "react"
import {NavigationContext} from "../../../Context/NavigationContext"
import './index.css'

export const UriAnalisis = () => {
    const {setScreen} = useContext(NavigationContext)
  
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
                    <input  placeholder="Color"/>
                    <p >Proteínas</p>
                    <select name="select">
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
                    <input placeholder="Ingrese pH"/>
                </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p >Apariencia</p>
                    <select  name="select">
                        <option value="nuevo" >Transparente</option>
                        <option value="nuevo" >Turbio 1+</option>
                        <option value="viejo" >Turbio 2+</option>
                        <option value="viejo" >Turbio 3+</option>
                    </select> 
                    <p >Glucosa</p>
                    <select  name="select">
                        <option value="viejo" >0</option>
                        <option value="viejo" >5</option>
                        <option value="viejo" >15</option>
                        <option value="viejo" >30</option>
                        <option value="viejo" >60</option>
                        <option value="viejo" >110</option>
                    </select> 
                    <p >mmol/L</p>
                    <p >Cetonas</p>
                    <select  name="select">
                        <option value="nuevo" >Negativo</option>
                        <option value="nuevo" >1+</option>
                        <option value="nuevo" >2+</option>
                        <option value="nuevo" >3+</option>
                    </select> 
                </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p >Apariencia</p>
                    <input  placeholder="Ingrese DU"/>
                    <p >Sangre/Hg</p>
                    <select  name="select">
                        <option value="viejo" >0</option>
                        <option value="viejo" >5-10</option>
                        <option value="viejo" >50</option>
                        <option value="viejo" >>50</option>
                    </select> 
                    <p >mmol/L</p>
                    <p >Cetonas</p>
                    <select  name="select">
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
                    <input  placeholder="Eritrocitos"/>
                    <p>Campo 400x</p>
                    <p>Renales</p>
                    <input  placeholder="Renales"/>
                    <p>Campo 400x</p>
                </div>
            </div>

            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p>Leucocitos</p>
                    <input  placeholder="Leucocitos"/>
                    <p>Campo 400x</p>
                    <p>Cristales</p>
                    <input  placeholder="Cristales"/>
                    <p>Campo 400x</p>
                </div>
            </div>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p>Escamosas</p>
                    <input  placeholder="Escamosas"/>
                    <p>Campo 400x</p>
                    <p>Lipidos</p>
                    <input  placeholder="Lipidos"/>
                    <p>Campo 400x</p>
                </div>
            </div>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p>Transitorias</p>
                    <input  placeholder="Transitorias"/>
                    <p>Campo 400x</p>
                    <p>Bacterias</p>
                    <input  placeholder="Bacterias"/>
                    <p>Campo 400x</p>
                </div>
            </div>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}} >
                <div style={{width:'80%'}} className="vertical-container evenly-container">
                    <p>Cilindros</p>
                    <input  placeholder="Cilindros"/>
                    <p>Campo 400x</p>
                    <p>Otros:</p>
                    <input  placeholder="Renales"/>
                    <p>Campo 400x</p>
                </div>
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
                <button className="upload-button">Registrar resultados</button>
            </div>
        </div>
    )
}