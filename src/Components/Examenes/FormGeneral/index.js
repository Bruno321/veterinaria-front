import React from "react"
import './index.css'

export const FormGeneral = () => {
  
    return (
        <>
             <div className="topForm-container">
                <div>
                    <div className="horizontal-container">
                        <p>Caso:</p>
                        <p>Propietario:</p>
                        <p>Dirección:</p>
                        <p>Teléfono:</p>
                    </div>
                    {/* TODO si ya existe el propietario se puede autocompletar */}
                    <div className="horizontal-container">
                        <input className="large-input" placeholder="Ingrese la dirección del propietario"/>
                        <input className="large-input" placeholder="Ingrese el nombre del propietario"/>
                        <input className="large-input" placeholder="Ingrese la dirección del propietario"/>
                        <input className="large-input" placeholder="Ingrese el teléfono del propietario"/>
                    </div>
                </div>
                <div style={{marginLeft:'10%'}}>
                    <div className="horizontal-container">
                        <p>Fecha:</p>
                        <p>Especie:</p>
                        <p>Raza:</p>
                        <p>Sexo:</p>
                        <p>MVZ:</p>
                    </div>
                    <div className="horizontal-container">
                        <input placeholder="Fecha" type="date"/>
                        <input placeholder="Especie"/>
                        <input placeholder="Raza"/>
                        <select name="select">
                            <option value="nuevo" >Macho</option>
                            <option value="viejo" >Hembra</option>
                        </select>
                        <input placeholder="Médico"/>
                    </div>
                </div>
               <div>
                <div className="horizontal-container">
                    <p>Hora:</p>
                    <p>Nombre:</p>
                    <p>Edad:</p>
                    <p>Castrado:</p>
                    <p>Expediente:</p>
                </div>
                <div className="horizontal-container">
                    <input placeholder="Fecha" type="date"/>
                    <input placeholder="Nombre"/>
                    <input placeholder="Edad"/>
                    <select name="select">
                        <option value="nuevo" >Si</option>
                        <option value="viejo" >No</option>
                        <option value="viejo" >NR</option>
                    </select>
                    <input placeholder="Expediente"/>
                </div>
            </div>
                
            </div>

            <div className="second-container" >
                <div style={{width:'40%'}} className="horizontal-container">
                    <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Anamnesis/Examen fisico:</p>
                    <p style={{width:'100%',height:'5vh', display:'flex',alignItems:'center'}}>Tratamiento previo:</p>
                </div>
                    {/* TODO si ya existe el propietario se puede autocompletar */}
                <div style={{width:'40%'}} className="horizontal-container">
                    <input style={{width:'100%'}} placeholder="Ingrese anamnesis y examen fisico"/>
                    <input style={{width:'100%'}} placeholder="Ingrese tratamiento"/>
                </div>
            </div>
        </>
    )
}