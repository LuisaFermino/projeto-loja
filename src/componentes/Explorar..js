import styled from "styled-components";

import BotaoBar from "./BotaoBar";

function Explorar() {
  return (
    <Container>
      <p>Explorar</p>
      <BotaoBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Explorar;
