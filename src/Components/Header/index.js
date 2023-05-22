import React, { useContext } from "react";

import { NavigationContext } from "../../Context/NavigationContext";
import { LoginContext } from "../../Context/LoginContext";
import { DropMenu } from "../DropMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faListCheck,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

import VetAppLogo from "../../Assets/Imgs/VetApp-Logo-Blanco.png";

export const Header = () => {
  const { screen, setScreen } = useContext(NavigationContext);
  const { logOut, sesionType } = useContext(LoginContext);

  return (
    <header className="header-container">
      <section className="header">
        <section className="section-logo">
          <img
            src={VetAppLogo}
            alt="logotipo del VetApp"
            className="logo-vetapp-img"
          />
        </section>
        {sesionType == 0 ? (
          <>
            <div className="header-logo-container examn-btn">
              <FontAwesomeIcon
                icon={faFileLines}
                size="2xl"
                style={{ color: "#ffffff" }}
                onClick={() => setScreen(0)}
                alt={"Icono para solicitar examen"}
              />
              <p
                onClick={() => setScreen(0)}
                className={screen === 0 ? "underlineText" : "headerText"}
              >
                Solicitar examen
              </p>
            </div>
            <div className="header-logo-container">
              <FontAwesomeIcon
                icon={faListCheck}
                size="2xl"
                style={{ color: "#ffffff" }}
                onClick={() => setScreen(0)}
                alt={"Icono para hacer seguimiento de examen"}
              />
              <p
                onClick={() => setScreen(1)}
                className={screen === 1 ? "underlineText" : "headerText"}
              >
                Seguimiento de examenes
              </p>
            </div>
          </>
        ) : null}

        <div className="header-logo-container">
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            size="2xl"
            style={{ color: "#ffffff" }}
            onClick={() => setScreen(0)}
            alt={"Icono para salir de sesión"}
          />
          <p onClick={logOut} className={"headerText"}>
            Cerrar sesión
          </p>
        </div>
        <p className="userName">Jorge Josue Alvarez Martinez</p>
        {/* <DropMenu/> */}
      </section>
    </header>
  );
};
