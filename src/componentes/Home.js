import styled from "styled-components";

import NavBar from "./NavBar";
import BotaoBar from "./BotaoBar";
import imgBanner from "../assets/img/banner.jpg";

function Home() {
  return (
    <Container>
      <NavBar />
      <Banner>
        <img src={imgBanner} alt="banner" />
      </Banner>
      <Main>
        <Produtos>
          <p>Ofertas Exclusivas</p>
        </Produtos>
        <Produtos>
          <p>Mais vendidos</p>
        </Produtos>
        <Produtos>
          <p>Mantimentos</p>
        </Produtos>
      </Main>
      <BotaoBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Banner = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 16vh;

  img {
    width: 90vw;
    height: 15vh;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #d7dbdd;
  }
`;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 35vh;
  left: 8vw;
`;

const Produtos = styled.div`
  margin-top: 1vh;
  height: 42vh;
  width: 100vw;
  p {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 15px;
  }
`;

export default Home;
