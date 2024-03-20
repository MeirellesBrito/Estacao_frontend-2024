import React, { useState, useEffect } from "react";
import CurrentTime from "./CurrentTime";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function Peifericos() {
  const [pubviometria, setPubviometria] = useState("");
  const [pressao, setPressao] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [umidade, setUmidade] = useState("");
  const [direcao, sethirecao] = useState("");
  const [velocidade, setVelocidade] = useState("");
  const [horaAtual, setHoraAtual] = useState("");

  const enviarDados = () => {
    console.log("Dados enviados:");
    console.log("Pubviometria:", pubviometria);
    console.log("Pressão Atmosférica:", pressao);
    console.log("Temperatura:", temperatura);
    console.log("Umidade do Ar:", umidade);
    console.log("Direção do Vento:", direcao);
    console.log("Velocidade do Vento:", velocidade);
    alert("Dados enviados com sucesso!");
  };

  const gerarDadosAleatorios = () => {
    const randomPubviometria = Math.floor(Math.random() * 100);
    const randomPressao = Math.floor(Math.random() * 100);
    const randomTemperatura = Math.floor(Math.random() * 100);
    const randomUmidade = Math.floor(Math.random() * 100);
    const randomDirecao = Math.floor(Math.random() * 100);
    const randomVelocidade = Math.floor(Math.random() * 100);

    setPubviometria(randomPubviometria);
    setPressao(randomPressao);
    setTemperatura(randomTemperatura);
    setUmidade(randomUmidade);
    sethirecao(randomDirecao);
    setVelocidade(randomVelocidade);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setHoraAtual(currentTime);
      gerarDadosAleatorios();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const randomDataInterval = setInterval(() => {
      gerarDadosAleatorios();
    }, 10000);
    return () => clearInterval(randomDataInterval);
  }, []);

  return (
    <div>
      <CurrentTime currentTime={horaAtual} />
      <div className="input-container"></div>
      <table className="border-separate border-spacing-2 border border-slate-500 ...">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">Pubviometria</th>
            <th className="border border-slate-600 ...">
              <InputField
                label="Pubviometria"
                value={pubviometria}
                onChange={(e) => setPubviometria(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th className="border border-slate-700 ...">Pressão Atmosférica</th>
            <th className="border border-slate-700 ...">
              <InputField
                label="Pressão Atmosférica"
                value={pressao}
                onChange={(e) => setPressao(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th className="border border-slate-700 ...">Temperatura</th>
            <th className="border border-slate-700 ...">
              <InputField
                label="Temperatura"
                value={temperatura}
                onChange={(e) => setTemperatura(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th className="border border-slate-700 ...">Umidade do Ar</th>
            <th className="border border-slate-700 ...">
              <InputField
                label="Umidade do Ar"
                value={umidade}
                onChange={(e) => setUmidade(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th className="border border-slate-700 ...">Direção do Vento</th>
            <th className="border border-slate-700 ...">
              <InputField
                label="Direção do Vento"
                value={direcao}
                onChange={(e) => sethirecao(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th className="border border-slate-700 ...">Velocidade do Vento</th>
            <th className="border border-slate-700 ...">
              <InputField
                label="Velocidade do Vento"
                value={velocidade}
                onChange={(e) => setVelocidade(e.target.value)}
              />
            </th>
          </tr>
        </thead>
      </table>
      <SubmitButton onClick={enviarDados} />
    </div>
  );
}

export default Peifericos;
