import styled from "styled-components";

import NavBar from "./NavBar";
import BotaoBar from "./BotaoBar";

function Home() {
  return (
    <Container>
      <NavBar />

      <BotaoBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default Home;
