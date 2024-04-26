import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import html2pdf from "html2pdf.js";
import {
  Container,
  ContainerLogo,
  Text,
  P,
  ContainerItens,
  ContainerOrc,
  ContainerData,
  Data,
  DataState,
  Line,
  InfoContainer,
  LineInfo,
  ContainerDescription,
  Description,
  ContainerObs,
  Logo,
} from "./styles";
import MGR from "../assets/MG.jpg";

function Budget() {
  const [dataFromLocalStorage, setDataFromLocalStorage] = useState(null);

  console.log(dataFromLocalStorage);

  useEffect(() => {
    const data = getLocalStorageData();
    if (data) {
      setDataFromLocalStorage(data);
    }
  }, []);

  useEffect(() => {
    console.log(dataFromLocalStorage);
  }, [dataFromLocalStorage]);

  const getLocalStorageData = () => {
    const data = localStorage.getItem("registroData");
    if (data) {
      return JSON.parse(data);
    }
    return null;
  };

  const filteredData = dataFromLocalStorage
    ? {
        item: dataFromLocalStorage.item,
        item2: dataFromLocalStorage.item2,
        item3: dataFromLocalStorage.item3,
        item4: dataFromLocalStorage.item4,
        item5: dataFromLocalStorage.item5,
        descricao: dataFromLocalStorage.descricao,
        descricao2: dataFromLocalStorage.descricao2,
        descricao3: dataFromLocalStorage.descricao3,
        descricao4: dataFromLocalStorage.descricao4,
        descricao5: dataFromLocalStorage.descricao5,
        qtde: dataFromLocalStorage.qtde,
        qtde2: dataFromLocalStorage.qtde2,
        qtde3: dataFromLocalStorage.qtde3,
        qtde4: dataFromLocalStorage.qtde4,
        qtde5: dataFromLocalStorage.qtde5,
        unit: dataFromLocalStorage.unit,
        unit2: dataFromLocalStorage.unit2,
        unit3: dataFromLocalStorage.unit3,
        unit4: dataFromLocalStorage.unit4,
        unit5: dataFromLocalStorage.unit5,
        vlrTotal: dataFromLocalStorage.vlrTotal,
        vlrTotal2: dataFromLocalStorage.vlrTotal2,
        vlrTotal3: dataFromLocalStorage.vlrTotal3,
        vlrTotal4: dataFromLocalStorage.vlrTotal4,
        vlrTotal5: dataFromLocalStorage.vlrTotal5,
      }
    : null;

  useEffect(() => {
    const generatePDF = async () => {
      const element = document.getElementById("pdf-container");
      const opt = {
        padding: [5, -30, -30, 0],
        filename: "budget.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      const pdf = await html2pdf().set(opt).from(element).outputPdf("bloburl");
      window.open(pdf, "_blank");
    };

    generatePDF();
  }, []);

  return (
    <Container id="pdf-container">
      <ContainerLogo>
        <Logo src={MGR} />
        <Text>
          <p>MG REFRIGERAÇÃO</p>
          <p>RUA FRANCISCO CALAÇA 1688</p>
          <p className="cep">
            CEP: <span>60.336-232</span>
          </p>
          <p>FORTALEZA-CE</p>
          <P style={{ marginBottom: "5px" }}>
            Fone: <span>(85)98932-3113</span>
          </P>
          <p className="cnpj">
            CNPJ: <span>31.263.081/0001-46</span>
          </p>
          <p className="email">
            E-mail:{" "}
            <a href="mailto:matheuslegend10@icloud.com">
              matheuslegend10@icloud.com
            </a>
          </p>
        </Text>
      </ContainerLogo>
      <ContainerItens>
        <ContainerOrc>
          <h2>Orçamento: {dataFromLocalStorage?.orcamento || "N/A"}</h2>
          <h2>Data de Emissão: {dataFromLocalStorage?.dataEmissao || "N/A"}</h2>
        </ContainerOrc>
        <ContainerData>
          <Data>
            <h4>
              Cliente: <span>{dataFromLocalStorage?.nomeCliente || "N/A"}</span>
            </h4>
            <h4>
              CNPJ/CPF: <span>{dataFromLocalStorage?.cnpjCpf || "N/A"}</span>
            </h4>
            <h4>
              Endereço: <span>{dataFromLocalStorage?.endereco || "N/A"}</span>
            </h4>
            <h4>
              Cidade: <span>{dataFromLocalStorage?.cidade || "N/A"}</span>
            </h4>
            <h4>
              CEP: <span>{dataFromLocalStorage?.cep || "N/A"}</span>
            </h4>
            <h4>
              Fone: <span>{dataFromLocalStorage?.fone || "N/A"}</span>
            </h4>
            <h4>
              E-mail: <span>{dataFromLocalStorage?.email || "N/A"}</span>
            </h4>
          </Data>
          <DataState>
            <h4>
              Inscrição Estadual:{" "}
              <span>{dataFromLocalStorage?.inscricaoEstadual || "N/A"}</span>
            </h4>
            <h4>
              Estado: <span>{dataFromLocalStorage?.estado || "N/A"}</span>
            </h4>
            <h4>
              Contato: <span>{dataFromLocalStorage?.contato || "N/A"}</span>
            </h4>
          </DataState>
        </ContainerData>
        <Line />
        <InfoContainer>
          <h4>
            Condição de Pagamento:{" "}
            <span>{dataFromLocalStorage?.condicaoPagamento || "N/A"}</span>
          </h4>
          <h4 className="orc">
            Validade Orçamento: <span>5 dias</span>
          </h4>
        </InfoContainer>
        <LineInfo />

        <ContainerDescription className="print-friendly">
          <Description>
            {filteredData && (
              <>
                <div>
                  <p className="font">Item:</p>
                  <p>{filteredData.item}</p>
                  <p>{filteredData.item2}</p>
                  <p>{filteredData.item3}</p>
                  <p>{filteredData.item4}</p>
                  <p>{filteredData.item5}</p>
                </div>
                <div>
                  <p className="font">Descrição:</p>
                  <p>{filteredData.descricao}</p>
                  <p>{filteredData.descricao2}</p>
                  <p>{filteredData.descricao3}</p>
                  <p>{filteredData.descricao4}</p>
                  <p>{filteredData.descricao5}</p>
                </div>
                <div>
                  <p className="font">Quantidade:</p>
                  <p>{filteredData.qtde}</p>
                  <p>{filteredData.qtde2}</p>
                  <p>{filteredData.qtde3}</p>
                  <p>{filteredData.qtde4}</p>
                  <p>{filteredData.qtde5}</p>
                </div>
                <div>
                  <p className="font">Unitário:</p>
                  <p className="real">{filteredData.unit}</p>
                  <p className="real">{filteredData.unit2}</p>
                  <p className="real">{filteredData.unit3}</p>
                  <p className="real">{filteredData.unit4}</p>
                  <p className="real">{filteredData.unit5}</p>
                </div>
                <div>
                  <p className="font">Total:</p>
                  <p className="real">{filteredData.vlrTotal}</p>
                  <p className="real">{filteredData.vlrTotal2}</p>
                  <p className="real">{filteredData.vlrTotal3}</p>
                  <p className="real">{filteredData.vlrTotal4}</p>
                  <p className="real">{filteredData.vlrTotal5}</p>
                </div>
              </>
            )}
          </Description>
        </ContainerDescription>
        <Line />
        <ContainerObs>
          <div>
            <p className="obs">Observações Importantes</p>
            <p>{dataFromLocalStorage?.obs || "N/A"}</p>
          </div>
          <div>
            <p className="value">Total Geral (R$)</p>
            <p>{dataFromLocalStorage?.totalGeral || "N/A"}</p>
          </div>
        </ContainerObs>
      </ContainerItens>
    </Container>
  );
}

Budget.propTypes = {
  registroData: PropTypes.object,
};

export default Budget;
