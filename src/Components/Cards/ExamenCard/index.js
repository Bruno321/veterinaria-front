import React, { useContext } from "react"
import './index.css'
import Swal from "sweetalert2"
import { SAVE,process } from "../../../Services/Api"
import imgCard from "../../../Assets/Imgs/pet-care.svg";
import { NavigationContext } from "../../../Context/NavigationContext";

export const ExamenCard = ({nombre, idValue}) => {
    const { screen, setScreen } = useContext(NavigationContext);

    const handleClick =  () => {

        Swal.fire({
            // Que significara NR
            title:`Formulario para el examen de ${nombre}`,
            showCancelButton:true,
            confirmButtonColor:'green',
            confirmButtonText:'Solicitar',
            cancelButtonText:'Cancelar',
            html:
            `
            <div id="form">
                <div>
                    <label>Nombre de la mascota:</label>
                    <input id="nombre" placeholder="Nombre"/>
                </div>
                <div>
                    <label>Raza:</label>
                    <input id="raza" placeholder="Raza"/>
                </div>
                <div>
                    <label>Edad:</label>
                    <input id="edad" placeholder="Edad"/>
                </div>
                <div>
                    <div>
                        <label>¿Esta castrado?</label>
                        <input id="castrado" type="checkbox"/>
                    </div>
                    <div>
                        <label>Sexo: </label>
                        <div>
                            <label>Macho</label>
                            <input id="sexo" type="checkbox"/>
                        </div>
                        <div>
                            <label>Hembra</label>
                            <input type="checkbox"/>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        .then(async ({isConfirmed})=>{
            if(isConfirmed){
                const nombreAnimal = document.getElementById("nombre").value
                const razaAnimal = document.getElementById("raza").value
                const edadAnimal = document.getElementById("edad").value
                const estaCastradoSelect = document.getElementById("castrado").checked
                const sexoSelect = document.getElementById("sexo").checked
                console.log(estaCastrado,sexo)
                let estaCastrado = 0
                let sexo = 0
                if(estaCastradoSelect){
                    estaCastrado = 1
                }
                if(sexoSelect){
                    estaCastrado = 1
                }
                const data = {
                    solicitudData:{
                        exameneId:1
                    },
                    examenData:{
                        nombreAnimal,
                        razaAnimal,
                        edadAnimal,
                        estaCastrado,
                        sexo,
                    }
                }
                try {
                    const response = await process(SAVE,'examenes/solicitud',data)
                    Swal.fire('Exito', response.data, 'success')
                    setScreen(idValue)
                } catch(e){
                    console.log(e.response)
                    Swal.fire('Error', '', 'error')
                }
            }
        })
    }
    return (
        <div className="examenCard-container">
            <img src={imgCard}/>
            <h1 className = "title-card-name">{nombre}</h1>
            {/* <button onClick={()=>handleClick(data.id)}>SOLICITAR EXAMEN</button> */}
            <button onClick={()=>handleClick()}>SOLICITAR EXAMEN</button>
        </div>
    )
}