import React, { useEffect } from "react";
import "./index.css";
import filtro from "../../../Assets/Icons/filtro.svg";
import iconPDF from "../../../Assets/Icons/pdf_clickeable.svg";
import iconNoEdit from "../../../Assets/Icons/pdf_no_clickeable.svg";
import { useFetchData } from "../../../Hooks/fetchHook";

export const SeguimientoExamenes = () => {
  const [data, loading] = useFetchData("examenes/solicitud?isUser=true");

  return (
    <div className="seguimientoContainer">
      <div className="buscador">
        <input placeholder="Buscar..." className="buscador-input" />
        <div className="select-buscador">
          <select name="select">
            <option value="nuevo">Mas nuevo</option>
            <option value="viejo">Mas viejo</option>
          </select>
        </div>
        <div className="buscador-filtro">
          <img src={filtro} style={{ width: "30px", height: "30px" }} />
          <p>Filtro</p>
        </div>
      </div>

      <div className="seguimientoList-header">
        <p>Examen</p>
        <div className="divisor"></div>
        <p>Nombre</p>
        <div className="divisor"></div>
        <p>Fecha</p>
        <div className="divisor"></div>
        <p>Estatus</p>
        <div className="divisor"></div>
        <p>Descargar PDF</p>
      </div>

      <div className="seguimientoList">
        {data.map((element, index) => {
          return (
            <div key={index} className="seguimientoList-element">
              <p>{element.examen.nombre}</p>
              <p>{element.examen.caso}</p>
              <p>{element.fechaCreacion}</p>
              <p>{element.pendiente == 0 ? "Pendiente" : "Completado"}</p>
              <img
                className="img-pdf"
                style={element.pendiente == 0 ? {opacity: "50%"} : { cursor: "pointer" }}
                src={element.pendiente == 0 ? iconNoEdit : iconPDF}
                title={element.pendiente== 0 ? "Pendiente..." : "Descargar PDF"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
