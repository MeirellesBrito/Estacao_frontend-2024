// WeatherStation.js
import React, { useState, useEffect } from "react";
import CurrentTime from "./CurrentTime";
import WeatherDataInput from "./WeatherDataInput";
import SubmitButton from "./SubmitButton";

function WeatherStation() {
  const [pluviometria, setPluviometria] = useState("");
  const [pressao, setPressao] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [umidade, setUmidade] = useState("");
  const [direcao, setDirecao] = useState("");
  const [velocidade, setVelocidade] = useState("");
  const [horaAtual, setHoraAtual] = useState("");

  const enviarDados = async () => {
    // Lógica para enviar dados para a API
  };

  const geradorDePontos = () => {
    // Lógica para gerar direção do vento aleatória
  };

  const gerarDadosAleatorios = () => {
    // Lógica para gerar dados meteorológicos aleatórios
  };

  useEffect(() => {
    // Lógica para atualizar a hora atual
  }, []);

  useEffect(() => {
    // Lógica para gerar dados aleatórios em intervalos
  }, []);

  return (
    <div>
      <CurrentTime currentTime={horaAtual} />
      <WeatherDataInput
        pluviometria={pluviometria}
        pressao={pressao}
        temperatura={temperatura}
        umidade={umidade}
        direcao={direcao}
        velocidade={velocidade}
        onPluviometriaChange={(e) => setPluviometria(e.target.value)}
        onPressaoChange={(e) => setPressao(e.target.value)}
        onTemperaturaChange={(e) => setTemperatura(e.target.value)}
        onUmidadeChange={(e) => setUmidade(e.target.value)}
        onDirecaoChange={(e) => setDirecao(e.target.value)}
        onVelocidadeChange={(e) => setVelocidade(e.target.value)}
      />
      <SubmitButton onClick={enviarDados} />
    </div>
  );
}

export default WeatherStation;
