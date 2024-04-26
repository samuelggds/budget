import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 40px;

  button {
    height: 50px;
    width: 100%;
    margin-top: 100px;
    cursor: pointer;
  }
  h1 {
    margin-bottom: 20px;
  }
`;
export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  padding: 10px;
  font-weight: 600;

  input {
    margin-top: 5px;
    outline: none;
    border: 1px solid;
    padding: 5px;
  }
`;
export const NewRegister = styled.div`
  display: flex;
 flex-direction: column;
  margin-top: 50px;
`;
