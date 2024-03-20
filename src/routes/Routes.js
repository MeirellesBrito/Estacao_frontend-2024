import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Peifericos from "../components/Peifericos";
import { Home } from "../Paginas/Home";

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Rotas;
