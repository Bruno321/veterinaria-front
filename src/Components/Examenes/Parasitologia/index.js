import React from "react"
import './index.css'

export const Parasitologia = () => {
  
    return (
        <div>
            <div className="second-container" >

                <div style={{width:'40%'}} className="horizontal-container">
                    <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Tipo de muestra:</p>
                </div>
                <div style={{width:'40%'}} className="horizontal-container">
                    <select name="select" style={{width:'100%'}}>
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
                    <select name="select" style={{width:'100%'}}>
                        <option value="nuevo" >Raspado</option>
                        <option value="viejo" >Ejemplar de parsito</option>
                        <option value="viejo" >Heces</option>
                        <option value="viejo" >Heces seriadas</option>
                    </select> 
                    <input style={{width:'100%'}} placeholder="Resultado"/>
                </div>
            </div>
            <div className="second-container" >
                <div style={{width:'40%'}} className="horizontal-container">
                    <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Observaciones:</p>
                </div>
                <div style={{width:'40%'}} className="horizontal-container">
                    <input style={{width:'100%'}} placeholder="Observaciones"/>
                </div>
            </div>
        </div>
    )
}