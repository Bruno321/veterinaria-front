import React,{useContext,useState} from 'react'

import {LoginContext} from '../../Context/LoginContext'
import Swal from "sweetalert2";
import { loginApi } from '../../Services/Api'

import './index.css'

export const Login = () => {

    const {login} = useContext(LoginContext)
    const [form,setForm] = useState({
        correo:"",
        contrasenia:"",
        tipo:0,
    })

    const handleClick = async () => {
        try {
            const response = await loginApi(form)
            login(response.data.token,form.tipo)

        } catch (e){
            console.log(e)
            Swal.fire({
                icon:'error',
                title:'Error',
                text:e.response.data.message
            })
        }

    }

    const handleCheckBox = () => {
        switch(form.tipo){
            case 0:
                setForm({...form,tipo:1})
                break;
            case 1:
                setForm({...form,tipo:0})
                break;
        }
    }
    return (
        <div className="login">

            <div className="login-container">

                <div className="login-title">
                    <p>Inicio de sesión</p>
                    <div></div>
                </div>

                <div className="login-inputs">
                    <input 
                        placeholder="Usuario" 
                        type="text" 
                        value={form.user} 
                        onChange={(e)=>setForm({...form,correo:e.target.value})}/>
                    <input 
                        placeholder="Contraseña"
                        type="password" 
                        value={form.password} 
                        onChange={(e)=>setForm({...form,contrasenia:e.target.value})}/>
                    <label>Soy veterinario</label>
                    <input
                        type='checkbox'
                        checked={form.tipo==1 ? true : false }
                        onChange={handleCheckBox}
                    />
                </div>

                <div className="login-input button" onClick={handleClick}>
                    <p>Continuar</p>
                </div>
            </div>
        </div>
    )
}
