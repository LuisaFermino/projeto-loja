import styled from "styled-components";

import NavBar from "./NavBar";
import BotaoBar from "./BotaoBar";

function Explorar() {
  return (
    <Container>
      <NavBar />
      <Titulo>Encontre Produtos</Titulo>
      <Main>
        <Eletronicos>
          <p>Eletronicos</p>
        </Eletronicos>
        <Joias>
          <p>Jóias</p>
        </Joias>
        <RoupasM>
          <p>Roupas Masculinas</p>
        </RoupasM>
        <RoupasF>
          <p>Roupas Femininas</p>
        </RoupasF>
      </Main>
      <BotaoBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Titulo = styled.div`
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  width: 100vw;
  height: 5vh;
  position: fixed;
  top: 17vh;
`;

const Main = styled.div`
  width: 94vw;
  height: 60vh;
  position: fixed;
  top: 25vh;
  left: 3vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Eletronicos = styled.div`
  width: 45vw;
  height: 25vh;
  background-color: #e8f8f5;
  border: 1px solid #53b175b2;
  border-radius: 20px;
`;

const Joias = styled.div`
  width: 45vw;
  height: 25vh;
  background-color: #fef5e7;
  border: 1px solid #f8a44cb2;
  border-radius: 20px;
`;

const RoupasM = styled.div`
  width: 45vw;
  height: 25vh;
  background-color: #f9ebea;
  border: 1px solid #f7a593;
  border-radius: 20px;
`;

const RoupasF = styled.div`
  width: 45vw;
  height: 25vh;
  background-color: #f4ecf7;
  border: 1px solid #d3b0e0;
  border-radius: 20px;
`;
export default Explorar;
