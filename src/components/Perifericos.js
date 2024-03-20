import React, { useState, useEffect, useCallback } from "react";
import CurrentTime from "./CurrentTime";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function Perifericos() {
  const [pluviometria, setPluviometria] = useState("");
  const [pressao, setPressao] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [umidade, setUmidade] = useState("");
  const [direcao, setDirecao] = useState("");
  const [velocidade, setVelocidade] = useState("");
  const [horaAtual, setHoraAtual] = useState("");

  const geradorDePontos = useCallback(() => {
    const direcoes = ["N", "L", "S", "O", "NE", "NO", "SE", "SO"];
    const randomIndex = Math.floor(Math.random() * direcoes.length);
    const randomDirecao = direcoes[randomIndex];
    return randomDirecao;
  }, []);

  const enviarDados = async () => {
    const dados = {
      pluviometria,
      pressao,
      temperatura,
      umidade,
      direcao,
      velocidade,
    };

    // Envio de dados para a API via método POST
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/Sensor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      if (response.ok) {
        console.log("Dados enviados com sucesso!");
      } else {
        console.error("Erro ao enviar os dados:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error.message);
    }

    // Exibição dos dados no console em formato JSON
    console.log(dados);
    console.log("Dados enviados:", JSON.stringify(dados));
  };

  const gerarDadosAleatorios = useCallback(() => {
    const randomPluviometria = Math.floor(Math.random() * 100);
    const randomPressao = Math.floor(Math.random() * 100);
    const randomTemperatura = Math.floor(Math.random() * 100);
    const randomUmidade = Math.floor(Math.random() * 100);
    const randomDirecao = geradorDePontos(); // Geração de direção aleatória
    const randomVelocidade = Math.floor(Math.random() * 100);

    setPluviometria(randomPluviometria);
    setPressao(randomPressao);
    setTemperatura(randomTemperatura);
    setUmidade(randomUmidade);
    setDirecao(randomDirecao);
    setVelocidade(randomVelocidade);
  }, [geradorDePontos]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setHoraAtual(currentTime);
      gerarDadosAleatorios();
    }, 10000);
    return () => clearInterval(interval);
  }, [gerarDadosAleatorios]);

  useEffect(() => {
    const randomDataInterval = setInterval(() => {
      gerarDadosAleatorios();
    }, 10000);
    return () => clearInterval(randomDataInterval);
  }, [gerarDadosAleatorios]);

  return (
    <div className="funto">
      <CurrentTime currentTime={horaAtual} />
      <div className="input-container"></div>
      <table className="border-separate p-2  w-full border-spacing-2 border border-slate-500 ...">
        <thead>
          <tr>
            <th className="fundoBranco p-2 border border-slate-600 ...">Pluviometria</th>
            <th className="fundoBranco p-2 border border-slate-600 ...">
              <InputField
                label="Pluviometria"
                value={`${pluviometria}mm`}
                onChange={(e) => setPluviometria(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th className="fundoBranco border border-slate-700 ...">Pressão Atmosférica</th>
            <th className="fundoBranco p-2 border border-slate-700 ...">
              <InputField
                label="Pressão Atmosférica"
                value={`${pressao}hPa`}
                onChange={(e) => setPressao(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th className="fundoBranco border border-slate-700 ...">Temperatura </th>
            <th className="fundoBranco p-2 border border-slate-700 ...">
              <InputField
                label="Temperatura"
                value={`${temperatura}°C`}
                onChange={(e) => setTemperatura(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th className="fundoBranco border border-slate-700 ...">Umidade do Ar</th>
            <th className="fundoBranco p-2 border border-slate-700 ...">
              <InputField
                label="Umidade do Ar"
                value={`${umidade}%`}
                onChange={(e) => setUmidade(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th className="fundoBranco border border-slate-700 ...">Direção do Vento</th>
            <th className="fundoBranco p-2 border border-slate-700 ...">
              <InputField
                label="Direção do Vento"
                value={`${direcao} `}
                onChange={(e) => setDirecao(e.target.value)}
              />
            </th>
          </tr>
          <tr>
            <th className="fundoBranco border border-slate-700 ...">Velocidade do Vento</th>
            {/* Valor referente à rota cardias */}
            <th className="fundoBranco p-2 border border-slate-700 ...">
              <InputField
                label="Velocidade do Vento"
                value={`${velocidade}m/s`}
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

export default Perifericos;
