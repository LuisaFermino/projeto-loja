import styled from "styled-components";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.png";

function TelaInicial() {
  return (
    <Container>
      <Main>
        <LogoLoja>
          <img src={Logo} alt="Logo" />
          <p>Nectar</p>
        </LogoLoja>
        <Titulo>Bem vindo a nossa Loja</Titulo>
        <Subtitulo>Faça suas compras em apenas uma hora</Subtitulo>
        <Link to="/Home">
          <Footer>
            <Button variant="contained" color="success">
              Entrar
            </Button>
          </Footer>
        </Link>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  background-color: #d7dbdd;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Main = styled.div`
  width: 100vw;
`;

const LogoLoja = styled.div`
  display: flex;
  justify-content: center;

  p {
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    margin-top: 5vh;
    font-size: 40px;
  }

  img {
    max-width: 30vw;
    height: 15vh;
  }
`;
const Titulo = styled.p`
  font-weight: 700;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 20px;
  text-align: center;
  margin-top: 10vh;
`;

const Subtitulo = styled.p`
  font-weight: 400;
  font-family: "Noto Sans JP", sans-serif;
  font-size: 12px;
  margin-top: 2vh;
  text-align: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4vh;
`;

export default TelaInicial;
