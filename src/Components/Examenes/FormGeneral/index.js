import React from "react";
import "./index.css";

export const FormGeneral = ({ data, setInformacionGeneral }) => {
  const examenes = ["", "-HG-", "-Para-", "-UA-"];

  const handleInput = (key, value) => {
    setInformacionGeneral({ ...data, [key]: value });
  };

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
            <input
              readOnly={true}
              value={data.examen.id + `${examenes[data.examene.id]}`}
              className="large-input"
              placeholder="Ingrese el caso"
            />
            <input
              readOnly={true}
              value={data.usuario.nombres + " " + data.usuario.apellidos}
              className="large-input"
              placeholder="Ingrese el nombre del propietario"
            />
            <input
              readOnly={true}
              value={data.usuario.direccion}
              className="large-input"
              placeholder="Ingrese la dirección del propietario"
            />
            <input
              readOnly={true}
              value={data.usuario.telefono}
              className="large-input"
              placeholder="Ingrese el teléfono del propietario"
            />
          </div>
        </div>
        <div style={{ marginLeft: "10%" }}>
          <div className="horizontal-container">
            <p>Fecha:</p>
            <p>Especie:</p>
            <p>Raza:</p>
            <p>Sexo:</p>
            <p>MVZ:</p>
          </div>
          <div className="horizontal-container">
            <input placeholder="Fecha" type="date" />
            <input placeholder="Especie" />
            <input
              readOnly={true}
              value={data.examen.razaAnimal}
              placeholder="Raza"
            />
            <select name="select" readOnly={true} value={data.examen.sexo}>
              <option value="0">Macho</option>
              <option value="1">Hembra</option>
            </select>
            <input placeholder="Médico" />
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
            <input placeholder="Fecha" type="time" />
            <input
              readOnly={true}
              value={data.examen.nombreAnimal}
              placeholder="Nombre"
            />
            <input
              readOnly={true}
              value={data.examen.edadAnimal}
              placeholder="Edad"
            />
            <select
              readOnly={true}
              value={data.examen.estaCastrado}
              placeholder="Edad"
              name="select"
            >
              <option value="0">Si</option>
              <option value="1">No</option>
              <option value="2">NR</option>
            </select>
            <input placeholder="Expediente" />
          </div>
        </div>
      </div>

      <div className="second-container">
        <div style={{ width: "40%" }} className="horizontal-container">
          <p
            style={{
              width: "100%",
              height: "5vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            Anamnesis/Examen fisico:
          </p>
          <p
            style={{
              width: "100%",
              height: "5vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            Tratamiento previo:
          </p>
        </div>
        {/* TODO si ya existe el propietario se puede autocompletar */}
        <div style={{ width: "40%" }} className="horizontal-container">
          <input
            style={{ width: "100%" }}
            placeholder="Ingrese anamnesis y examen fisico"
          />
          <input style={{ width: "100%" }} placeholder="Ingrese tratamiento" />
        </div>
      </div>
    </>
  );
};
