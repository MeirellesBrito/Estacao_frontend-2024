import React from "react";

function SubmitButton({ onClick }) {
  return (
    <button className="button" onClick={onClick}>
      Enviar Dados
    </button>
  );
}
export default SubmitButton;
