import React, { useState } from "react";
import InputField from "./InputField";

function WeatherDataInput({
  pluviometria,
  pressao,
  temperatura,
  umidade,
  direcao,
  velocidade,
  onPluviometriaChange,
  onPressaoChange,
  onTemperaturaChange,
  onUmidadeChange,
  onDirecaoChange,
  onVelocidadeChange,
}) {
  return (
    <table className="border-separate p-2 w-full border-spacing-2 border border-slate-500">
      <thead>
        <tr>
          <th className="border border-slate-600">Pluviometria</th>
          <th className="border border-slate-600">
            <InputField
              label="Pluviometria"
              value={`${pluviometria}mm`}
              onChange={onPluviometriaChange}
            />
          </th>
        </tr>
        <tr>
          <th className="border border-slate-700">Pressão Atmosférica</th>
          <th className="border border-slate-700">
            <InputField
              label="Pressão Atmosférica"
              value={`${pressao}hPa`}
              onChange={onPressaoChange}
            />
          </th>
        </tr>
        <tr>
          <th className="border border-slate-700">Temperatura</th>
          <th className="border border-slate-700">
            <InputField
              label="Temperatura"
              value={`${temperatura}°C`}
              onChange={onTemperaturaChange}
            />
          </th>
        </tr>
        <tr>
          <th className="border border-slate-700">Umidade do Ar</th>
          <th className="border border-slate-700">
            <InputField
              label="Umidade do Ar"
              value={`${umidade}%`}
              onChange={onUmidadeChange}
            />
          </th>
        </tr>
        <tr>
          <th className="border border-slate-700">Direção do Vento</th>
          <th className="border border-slate-700">
            <InputField
              label="Direção do Vento"
              value={direcao}
              onChange={onDirecaoChange}
            />
          </th>
        </tr>
        <tr>
          <th className="border border-slate-700">Velocidade do Vento</th>
          <th className="border border-slate-700">
            <InputField
              label="Velocidade do Vento"
              value={`${velocidade}m/s`}
              onChange={onVelocidadeChange}
            />
          </th>
        </tr>
      </thead>
    </table>
  );
}

export default WeatherDataInput;


    // <div className="input-container">
    //   <InputField
    //     label="Pluviometria"
    //     value={`${pluviometria}mm`}
    //     onChange={onPluviometriaChange}
    //     className="border border-slate-600 ..."
    //   />
    //   <InputField
    //     label="Pressão Atmosférica"
    //     value={`${pressao}hPa`}
    //     onChange={onPressaoChange}
    //     className="border border-slate-700 ..."
    //   />
    //   <InputField
    //     label="Temperatura"
    //     value={`${temperatura}°C`}
    //     onChange={onTemperaturaChange}
    //     className="border border-slate-700 ..."
    //   />
    //   <InputField
    //     label="Umidade do Ar"
    //     value={`${umidade}%`}
    //     onChange={onUmidadeChange}
    //     className="border border-slate-700 ..."
    //   />
    //   <InputField
    //     label="Direção do Vento"
    //     value={`${direcao} `}
    //     onChange={onDirecaoChange}
    //     className="border border-slate-700 ..."
    //   />
    //   <InputField
    //     label="Velocidade do Vento"
    //     value={`${velocidade}m/s`}
    //     onChange={onVelocidadeChange}
    //     className="border border-slate-700 ..."
    //   />
    // </div>