import styled from "styled-components";
// import { useState } from "react";

import BotaoBar from "./BotaoBar";
import ListaCarrinho from "./ListaCarrinho";
import EnviaMensagem from "./EnviaMensagem";

function Carrinho({ cart, setCart }) {
  return (
    <Container>
      <Nav>
        <Titulo>Meu Carrinho</Titulo>
      </Nav>
      <ContainerCarrinho>
        <Main>
          <ListaCarrinho cart={cart} setCart={setCart} />
        </Main>
        <Footer>
          <Finalizar onClick={() => EnviaMensagem(cart)}>
            <p>Finalizar</p>
          </Finalizar>
        </Footer>
        <BotaoBar />
      </ContainerCarrinho>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Nav = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-bottom: 1px solid #d7dbdd;
`;

const Titulo = styled.div`
  font-family: "Protest Riot", sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
`;

const ContainerCarrinho = styled.div`
  width: 100vw;
  height: 82vh;
  overflow: scroll;
`;

const Main = styled.div`
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 10vh;
  left: 0;
`;

const Finalizar = styled.div`
  background-color: #2ecc71;
  border-radius: 20px;
  width: 50vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 5px #d7dbdd;

  p {
    color: #e5e7e9;
    font-family: "Protest Riot", sans-serif;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 3px;
  }
`;

export default Carrinho;
