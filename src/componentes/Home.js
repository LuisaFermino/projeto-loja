import styled from "styled-components";

import BotaoBar from "./BotaoBar";

function Home() {
  return (
    <Container>
      <p>Home</p>
      <BotaoBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Home;
