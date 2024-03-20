import React, { useEffect } from "react";

function SubmitButton({ onClick }) {
  useEffect(() => {
    const intervalId = setInterval(onClick, 9900); // Chama a função onClick a cada 10 segundos

    return () => {
      clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado
    };
  }, [onClick]);

  return (
    <>
      <button
        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onClick} // Adiciona onClick ao evento de clique (opcional)
      >
        Enviar Dados
      </button>
    </>
  );
}

export default SubmitButton;
