import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Budget from "../Orçamento";
import Register from "../Registro";
import Home from "../Home";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Register />} />
        <Route path="/orcamento" element={<Budget />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
