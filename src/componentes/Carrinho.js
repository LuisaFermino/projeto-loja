import styled from "styled-components";

import BotaoBar from "./BotaoBar";

function Carrinho() {
  return (
    <Container>
      <p>Carrinho</p>
      <BotaoBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Carrinho;
