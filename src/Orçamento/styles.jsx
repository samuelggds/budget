import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 5px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 20px;
`;

export const Text = styled.div`
  p {
    margin-bottom: 5px;
  }
  .cnpj {
    font-weight: 600;
  }
  span {
    font-weight: 400;
  }

  .email {
    font-weight: 600;
  }
  .cep {
    font-weight: 600;
  }
`;

export const P = styled.p`
  margin-top: 30px;
  width: 100%;
  font-weight: 600;

  span {
    font-weight: 400;
  }
`;

export const ContainerItens = styled.div`
  width: 80%;
`;

export const ContainerOrc = styled.div`
  width: 100%;
  background-color: #d3d3d3;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  margin-left: 80px;
  border: 1px solid #000;

  h2 {
    font-size: 15px;
  }
`;

export const ContainerData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-left: 20px;
`;

export const Data = styled.div`
  margin-top: 10px;
  margin-left: 50px;
  span {
    font-weight: 400;
  }

  h4 {
    margin-bottom: 8px;
    font-size: 10px;
  }
`;

export const DataState = styled.div`
  margin-top: 10px;

  span {
    font-weight: 400;
  }
  h4 {
    margin-bottom: 8px;
    font-size: 10px;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid #000;
  width: 100%;
  margin: 10px 0 -5px 80px;
`;

export const Info = styled.div`
  padding: 20px;
  margin-left: 200px;
`;

export const InfoContainer = styled.div`
  margin-left: 120px;
  padding: 15px;
  display: flex;
  justify-content: space-between;

  h4 {
    margin-bottom: 10px;
    font-size: 13px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const LineInfo = styled.div`
  border-bottom: 1px solid #000;
  width: 100%;
  margin: -15px 0 0 80px;
`;

export const ContainerDescription = styled.div`
  width: 100%;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  gap: 5px;
  margin: 10px 0 0 80px;
  text-align: center;
  @media screen and (max-width: 1920px) {
    gap: 5px;
  }

  p {
    margin-top: 10px;
  }
  .font {
    font-weight: 600;
  }
  
  .real {
    width: 50px;
  }
`;

export const ContainerObs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 80px;
  margin-top: 20px;
  font-size: 10px;

  p {
    margin-top: 20px;
    width: 100%;
  }

  .obs {
    font-weight: 600;
  }
  .value {
    font-weight: 600;
  }
`;

export const Logo = styled.img`
  width: 250px;
  height: auto;
  margin-top: -100px;
`;
