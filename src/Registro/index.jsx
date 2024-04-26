import { useContext, useState, useEffect } from "react";
import { Container, Label, ContainerGrid, NewRegister } from "./styles";
import GlobalContext from "../hooks/globalContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { formData, handleInputChange } = useContext(GlobalContext);
  const [registroData, setRegistroData] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistroData(formData);
    saveToLocalStorage(registroData);
  };

  useEffect(() => {
    if (Object.keys(registroData).length > 0) {
      saveToLocalStorage(registroData);
      navigate("/orcamento");
    }
  }, [registroData, navigate]);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("registroData", JSON.stringify(data));
    console.log("Dados do registro salvos no localStorage:", data);
  };

  return (
    <Container>
      <h1>DADOS DE ORÇAMENTO</h1>
      <form onSubmit={handleSubmit}>
        <ContainerGrid>
          <Label>
            ORÇAMENTO
            <input
              type="text"
              name="orcamento"
              placeholder="Número do orçamento"
              value={formData.orcamento}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            DATA DE EMISSÃO
            <input
              type="text"
              name="dataEmissao"
              placeholder="Data Emissão"
              value={formData.dataEmissao}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            NOME DO CLIENTE
            <input
              type="text"
              name="nomeCliente"
              placeholder="Nome do Cliente"
              value={formData.nomeCliente}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            CNPJ/CPF
            <input
              type="text"
              name="cnpjCpf"
              placeholder="CNPJ/CPF"
              value={formData.cnpjCpf}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            ENDEREÇO
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={formData.endereco}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            CIDADE
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            CEP
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              value={formData.cep}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Fone
            <input
              type="text"
              name="fone"
              placeholder="Telefone"
              value={formData.fone}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            E-mail
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Inscrição Estadual
            <input
              type="text"
              name="inscricaoEstadual"
              placeholder="Inscrição Estadual"
              value={formData.inscricaoEstadual}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Estado
            <input
              type="text"
              name="estado"
              placeholder="Estado"
              value={formData.estado}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Contato
            <input
              type="text"
              name="contato"
              placeholder="Contato"
              value={formData.contato}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Condição de pagamento
            <input
              type="text"
              name="condicaoPagamento"
              placeholder="Condição de pagamento"
              value={formData.condicaoPagamento}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Item
            <input
              type="text"
              name="item"
              placeholder="Item"
              value={formData.item}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Descrição
            <input
              type="text"
              name="descricao"
              placeholder="Descrição"
              value={formData.descricao}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Quantidade
            <input
              type="text"
              name="qtde"
              placeholder="Quantidade"
              value={formData.qtde}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Valor Unitário
            <input
              type="text"
              name="unit"
              placeholder="Valor Unitário"
              value={formData.unit}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Valor Total
            <input
              type="text"
              name="vlrTotal"
              placeholder="Valor Total"
              value={formData.vlrTotal}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Observações
            <input
              type="text"
              name="obs"
              placeholder="Observações"
              value={formData.obs}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Total Geral
            <input
              type="text"
              name="totalGeral"
              placeholder="Total Geral"
              value={formData.totalGeral}
              onChange={handleInputChange}
            />
          </Label>
        </ContainerGrid>
        <NewRegister>
          <h1>NOVO REGISTRO</h1>
          <Label>
            Item 2
            <input
              type="text"
              name="item2"
              placeholder="Item"
              value={formData.item2}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Item 3
            <input
              type="text"
              name="item3"
              placeholder="Item"
              value={formData.item3}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Item 4
            <input
              type="text"
              name="item4"
              placeholder="Item"
              value={formData.item4}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Item 5
            <input
              type="text"
              name="item5"
              placeholder="Item"
              value={formData.item5}
              onChange={handleInputChange}
            />
          </Label>
          <h1>DESCRIÇÃO</h1>

          <Label>
            Descrição 2
            <input
              type="text"
              name="descricao2"
              placeholder="Descrição"
              value={formData.descricao2}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Descrição 3
            <input
              type="text"
              name="descricao3"
              placeholder="Descrição"
              value={formData.descricao3}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Descrição 4
            <input
              type="text"
              name="descricao4"
              placeholder="Descrição"
              value={formData.descricao4}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Descrição 5
            <input
              type="text"
              name="descricao5"
              placeholder="Descrição"
              value={formData.descricao5}
              onChange={handleInputChange}
            />
          </Label>

          <h1>QUANTIDADE</h1>

          <Label>
            Qtde 2
            <input
              type="text"
              name="qtde2"
              placeholder="Quantidade"
              value={formData.qtde2}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Qtde 3
            <input
              type="text"
              name="qtde3"
              placeholder="Quantidade"
              value={formData.qtde3}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Qtde 4
            <input
              type="text"
              name="qtde4"
              placeholder="Quantidade"
              value={formData.qtde4}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Qtde 5
            <input
              type="text"
              name="qtde5"
              placeholder="Quantidade"
              value={formData.qtde5}
              onChange={handleInputChange}
            />
          </Label>
          <h1>Valor da Unidade</h1>

          <Label>
            Unit 2
            <input
              type="text"
              name="unit2"
              placeholder="Unidade"
              value={formData.unit2}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Unit 3
            <input
              type="text"
              name="unit3"
              placeholder="Unidade"
              value={formData.unit3}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Unit 4
            <input
              type="text"
              name="unit4"
              placeholder="Unidade"
              value={formData.unit4}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Unit 5
            <input
              type="text"
              name="unit5"
              placeholder="Unidade"
              value={formData.unit5}
              onChange={handleInputChange}
            />
          </Label>

          <h1>Total</h1>

          <Label>
            Total 2
            <input
              type="text"
              name="vlrTotal2"
              placeholder="Valor Total"
              value={formData.vlrTotal2}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Total 3
            <input
              type="text"
              name="vlrTotal3"
              placeholder="Valor Total"
              value={formData.vlrTotal3}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Total 4
            <input
              type="text"
              name="vlrTotal4"
              placeholder="Valor Total"
              value={formData.vlrTotal4}
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            Total 5
            <input
              type="text"
              name="vlrTotal5"
              placeholder="Valor Total"
              value={formData.vlrTotal5}
              onChange={handleInputChange}
            />
          </Label>
        </NewRegister>

        <button type="submit">ENVIAR DADOS</button>
      </form>
    </Container>
  );
}

export default Register;
