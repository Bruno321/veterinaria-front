import React, { useContext, useState } from "react";

import { LoginContext } from "../../Context/LoginContext";
import Swal from "sweetalert2";
import { loginApi } from "../../Services/Api";
import LogoVetAppBlanco from "../../Assets/Imgs/VetApp-Logo-Blanco.png";
import LogoVetAppNegro from "../../Assets/Imgs/VetApp-Logo-Negro.png";
import PethBath from "../../Assets/Icons/pet-bath.svg";

import "./index.css";

const url = "http://localhost:8080/api/users/login";

export const Login = () => {
  const { login } = useContext(LoginContext);
  const [form, setForm] = useState({
    user: "",
    password: "",
  });

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
  const handleClick = async () => {
    login("response.data.token", 1);
  };
  return (
    <div className="login">
      <section className="login-container">
        <section className="logo-section">
          <img
            media="(max-width: 320px)"
            className="img-logo-vetapp"
            src={LogoVetAppNegro}
          />
        </section>
        <section className="login-title">
          <p>¡Bienvenidos al Sistema!</p>
          {/* <div></div> */}
        </section>

        <section className="login-inputs">
          <label>Nombre de Usuario:</label>
          <input
            placeholder="Usuario"
            type="text"
            value={form.user}
            onChange={(e) => setForm({ ...form, user: e.target.value })}
          />
          <label>Contraseña:</label>
          <input
            placeholder="Contraseña"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </section>

        <button className="login-input button" onClick={handleClick}>
          <p>ENTRAR</p>
        </button>
      </section>
      <section className="img-background-container">
        <img className="img-logo-vetapp-blanco" src={LogoVetAppBlanco} />
        <img src={PethBath} className="img-background-rightside" alt="" />
      </section>
    </div>
  );
};
