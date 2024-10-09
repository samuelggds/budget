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

  useEffect(() => {
    const data = getLocalStorageData();
    if (data) {
      setDataFromLocalStorage(data);
    }
  }, []);

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
      item6: dataFromLocalStorage.item6,
      item7: dataFromLocalStorage.item7,
      item8: dataFromLocalStorage.item8,
      item9: dataFromLocalStorage.item9,
      item10: dataFromLocalStorage.item10,
      descricao: dataFromLocalStorage.descricao,
      descricao2: dataFromLocalStorage.descricao2,
      descricao3: dataFromLocalStorage.descricao3,
      descricao4: dataFromLocalStorage.descricao4,
      descricao5: dataFromLocalStorage.descricao5,
      descricao6: dataFromLocalStorage.descricao6,
      descricao7: dataFromLocalStorage.descricao7,
      descricao8: dataFromLocalStorage.descricao8,
      descricao9: dataFromLocalStorage.descricao9,
      descricao10: dataFromLocalStorage.descricao10,
      qtde: dataFromLocalStorage.qtde,
      qtde2: dataFromLocalStorage.qtde2,
      qtde3: dataFromLocalStorage.qtde3,
      qtde4: dataFromLocalStorage.qtde4,
      qtde5: dataFromLocalStorage.qtde5,
      qtde6: dataFromLocalStorage.qtde6,
      qtde7: dataFromLocalStorage.qtde7,
      qtde8: dataFromLocalStorage.qtde8,
      qtde9: dataFromLocalStorage.qtde9,
      qtde10: dataFromLocalStorage.qtde10,
      unit: dataFromLocalStorage.unit,
      unit2: dataFromLocalStorage.unit2,
      unit3: dataFromLocalStorage.unit3,
      unit4: dataFromLocalStorage.unit4,
      unit5: dataFromLocalStorage.unit5,
      unit6: dataFromLocalStorage.unit6,
      unit7: dataFromLocalStorage.unit7,
      unit8: dataFromLocalStorage.unit8,
      unit9: dataFromLocalStorage.unit9,
      unit10: dataFromLocalStorage.unit10,
      vlrTotal: dataFromLocalStorage.vlrTotal,
      vlrTotal2: dataFromLocalStorage.vlrTotal2,
      vlrTotal3: dataFromLocalStorage.vlrTotal3,
      vlrTotal4: dataFromLocalStorage.vlrTotal4,
      vlrTotal5: dataFromLocalStorage.vlrTotal5,
      vlrTotal6: dataFromLocalStorage.vlrTotal6,
      vlrTotal7: dataFromLocalStorage.vlrTotal7,
      vlrTotal8: dataFromLocalStorage.vlrTotal8,
      vlrTotal9: dataFromLocalStorage.vlrTotal9,
      vlrTotal10: dataFromLocalStorage.vlrTotal10,
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

    if (dataFromLocalStorage) {
      generatePDF();
    }
  }, [dataFromLocalStorage]);

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
                  <p>{filteredData.item6}</p>
                  <p>{filteredData.item7}</p>
                  <p>{filteredData.item8}</p>
                  <p>{filteredData.item9}</p>
                  <p>{filteredData.item10}</p>
                </div>
                <div>
                  <p className="font">Descrição:</p>
                  <p>{filteredData.descricao}</p>
                  <p>{filteredData.descricao2}</p>
                  <p>{filteredData.descricao3}</p>
                  <p>{filteredData.descricao4}</p>
                  <p>{filteredData.descricao5}</p>
                  <p>{filteredData.descricao6}</p>
                  <p>{filteredData.descricao7}</p>
                  <p>{filteredData.descricao8}</p>
                  <p>{filteredData.descricao9}</p>
                  <p>{filteredData.descricao10}</p>
                </div>
                <div>
                  <p className="font">Qtd:</p>
                  <p>{filteredData.qtde}</p>
                  <p>{filteredData.qtde2}</p>
                  <p>{filteredData.qtde3}</p>
                  <p>{filteredData.qtde4}</p>
                  <p>{filteredData.qtde5}</p>
                  <p>{filteredData.qtde6}</p>
                  <p>{filteredData.qtde7}</p>
                  <p>{filteredData.qtde8}</p>
                  <p>{filteredData.qtde9}</p>
                  <p>{filteredData.qtde10}</p>
                </div>
                <div>
                  <p className="font">Unidade:</p>
                  <p>{filteredData.unit}</p>
                  <p>{filteredData.unit2}</p>
                  <p>{filteredData.unit3}</p>
                  <p>{filteredData.unit4}</p>
                  <p>{filteredData.unit5}</p>
                  <p>{filteredData.unit6}</p>
                  <p>{filteredData.unit7}</p>
                  <p>{filteredData.unit8}</p>
                  <p>{filteredData.unit9}</p>
                  <p>{filteredData.unit10}</p>
                </div>
                <div>
                  <p className="font">Vlr. Total:</p>
                  <p>{filteredData.vlrTotal}</p>
                  <p>{filteredData.vlrTotal2}</p>
                  <p>{filteredData.vlrTotal3}</p>
                  <p>{filteredData.vlrTotal4}</p>
                  <p>{filteredData.vlrTotal5}</p>
                  <p>{filteredData.vlrTotal6}</p>
                  <p>{filteredData.vlrTotal7}</p>
                  <p>{filteredData.vlrTotal8}</p>
                  <p>{filteredData.vlrTotal9}</p>
                  <p>{filteredData.vlrTotal10}</p>
                </div>
              </>
            )}
          </Description>
        </ContainerDescription>
        <Line />
        <ContainerObs>
          <div>
            <p className="obs">Observações Importantes</p>
            <p>{dataFromLocalStorage?.obs}</p>
          </div>
          <div>
            <p className="value">Total Geral (R$)</p>
            <p>{dataFromLocalStorage?.totalGeral}</p>
          </div>
        </ContainerObs>
      </ContainerItens>
    </Container>
  );
}

Budget.propTypes = {
  setBudget: PropTypes.func.isRequired,
};

export default Budget;
