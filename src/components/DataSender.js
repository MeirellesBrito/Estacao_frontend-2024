import React from "react";
import SubmitButton from "./SubmitButton";
function DataSender({ data, apiUrl }) {
  const enviarDados = async () => {
    try {
      const response = await fetch(`${apiUrl}/Sensor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
    console.log(data);
    console.log("Dados enviados:", JSON.stringify(data));
  };

  return (
    <SubmitButton onClick={enviarDados}/>
    // <button >
    //   Enviar Dados
    // </button>
  );
}

export default DataSender;
