/*
   
*/

import React, { useState, useEffect } from "react";
import CurrentTime from "./CurrentTime";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function Peifericos() {
  const [pluviometria, setPluviometria] = useState("");
  const [pressao, setPressao] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [umidade, setUmidade] = useState("");
  const [direcao, setDirecao] = useState("");
  const [velocidade, setVelocidade] = useState("");
  const [horaAtual, setHoraAtual] = useState("");

  const enviarDados = async () => {
    const dados = {
      pressao,
      temperatura,
      umidade,
      direcao,
      velocidade
    };
    // const dados = {
    //   pressao: {
    //     valor: 1000, // Exemplo de valor para a pressão
    //     unidade: "hPa" // Exemplo de unidade para a pressão
    //   },
    //   temperatura: {
    //     valor: 25, // Exemplo de valor para a temperatura
    //     unidade: "°C" // Exemplo de unidade para a temperatura
    //   },
    //   umidade: {
    //     valor: 60, // Exemplo de valor para a umidade
    //     unidade: "%" // Exemplo de unidade para a umidade
    //   },
    //   direcao: "Norte", // Exemplo de valor para a direção
    //   velocidade: 20 // Exemplo de valor para a velocidade
    // };
    
  

    // Enviar dados para a API via método POST
    try {
      const response = await fetch('http://192.168.0.107:3001/Sensor', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
      });
      if (response.ok) {
        console.log("Dados enviados com sucesso!");
      } else {
        console.error("Erro ao enviar os dados:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error.message);
    }
  
    // Exibir os dados no console em formato JSON
    console.log(dados)
    console.log("Dados enviados:", JSON.stringify(dados));
  };
  

  const gerarDadosAleatorios = () => {
    const randomPluviometria = Math.floor(Math.random() * 100);
    const randomPressao = Math.floor(Math.random() * 100);
    const randomTemperatura = Math.floor(Math.random() * 100);
    const randomUmidade = Math.floor(Math.random() * 100);
    const randomDirecao = Math.floor(Math.random() * 100);
    const randomVelocidade = Math.floor(Math.random() * 100);

    setPluviometria(randomPluviometria);
    setPressao(randomPressao);
    setTemperatura(randomTemperatura);
    setUmidade(randomUmidade);
    setDirecao(randomDirecao);
    setVelocidade(randomVelocidade);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setHoraAtual(currentTime);
      gerarDadosAleatorios();
    }, 10000);
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
      <table className="border-separate p-2  w-full border-spacing-2 border border-slate-500 ...">
        <thead>
          <tr>
            <th className=" border border-slate-600 ...">Pluviometria</th>
            <th className="border border-slate-600 ...">
              <InputField
                label="Pluviometria"
                value={pluviometria}
                onChange={(e) => setPluviometria(e.target.value)}
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
                onChange={(e) => setDirecao(e.target.value)}
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
