import { createContext, useState } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    orcamento: "",
    dataEmissao: "",
    nomeCliente: "",
    cnpjCpf: "",
    endereco: "",
    cidade: "",
    cep: "",
    fone: "",
    email: "",
    inscricaoEstadual: "",
    estado: "",
    contato: "",
    condicaoPagamento: "",
    item: "",
    descricao: "",
    descricao2: "",
    descricao3: "",
    descricao4: "",
    descricao5: "",
    qtde: "",
    qtde2: "",
    qtde3: "",
    qtde4: "",
    qtde5: "",
    unit: "",
    unit2: "",
    unit3: "",
    unit4: "",
    unit5: "",
    vlrTotal: "",
    vlrTotal2: "",
    vlrTotal3: "",
    vlrTotal4: "",
    vlrTotal5: "",
    obs: "",
    totalGeral: "",
    item2: "",
    item3: "",
    item4: "",
    item5: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <GlobalContext.Provider
      value={{ formData, handleInputChange }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.object,
};

export default GlobalContext;
