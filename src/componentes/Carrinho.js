import styled from "styled-components";

import BotaoBar from "./BotaoBar";
import imgJoias from "../assets/img/joias.jpg";

import { IoCloseOutline } from "react-icons/io5";

function Carrinho() {
  return (
    <Container>
      <Titulo>Meu Carrinho</Titulo>
      <Main>
        <ItemCard>
          <img src={imgJoias} alt="Imagem Produto" />
          <Informacoes>
            <p>Descrição</p>
            <p>R$ 12.00</p>
          </Informacoes>
          <Botao></Botao>
        </ItemCard>
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
  top: 5vh;
  border-bottom: 1px solid #d7dbdd;
`;

const Main = styled.div`
  width: 100vw;

  position: fixed;
  left: 0;
  top: 10vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ItemCard = styled.div`
  width: 90vw;
  height: 15vh;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #d7dbdd;
  padding: 15px;

  img {
    width: 20vw;
    height: 10vh;
  }
`;

const Informacoes = styled.div`
  margin-left: 4vw;

  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 13px;
    padding-bottom: 5px;
  }
`;

const Botao = styled(IoCloseOutline)`
  font-size: 22px;
  color: #b3b3b3;
  position: fixed;
  right: 5vw;
`;

export default Carrinho;
