import styled from "styled-components";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import BotaoBar from "./BotaoBar";

import imgEletronico from "../assets/img/eletronicos.png";
import imgJoias from "../assets/img/joias.jpg";
import imgMasculino from "../assets/img/masculino.jpg";
import imgFeminino from "../assets/img/femininas.jpg";

function Explorar() {
  return (
    <Container>
      <Navbar>
        <Box
          sx={{
            width: 200,
            maxWidth: "100%",
          }}
        >
          <TextField label="Pesquisa" id="Pesquisa" />
        </Box>
      </Navbar>
      <Titulo>Encontre Produtos</Titulo>
      <Main>
        <Categorias>
          <img src={imgEletronico} alt="Eletronicos" />
          <p>Eletrônicos</p>
        </Categorias>
        <Categorias>
          <img src={imgJoias} alt="Joias" />
          <p>Jóias</p>
        </Categorias>
        <Categorias>
          <img src={imgMasculino} alt="Masculino" />
          <p>Roupas Masculinas</p>
        </Categorias>
        <Categorias>
          <img src={imgFeminino} alt="Feminino" />
          <p>Roupas Femininas</p>
        </Categorias>
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
  width: 92vw;
  height: 60vh;
  position: fixed;
  top: 24vh;
  left: 4vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  img {
    width: 38vw;
    height: 20vh;
  }

  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
  }
`;

const Categorias = styled.div`
  width: 45vw;
  height: 27vh;
  border-bottom: 1px solid #d7dbdd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 100vw;
`;

export default Explorar;
