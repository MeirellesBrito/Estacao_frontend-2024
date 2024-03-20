import React from "react";

function SubmitButton({ onClick }) {
  return (
    <>
      <a
        onClick={onClick}
        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Enviar Dados
      </a>
    </>
  );
}
export default SubmitButton;
