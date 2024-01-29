import styled from "styled-components";

import BotaoBar from "./BotaoBar";

function Conta() {
  return (
    <Container>
      <BotaoBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Conta;
