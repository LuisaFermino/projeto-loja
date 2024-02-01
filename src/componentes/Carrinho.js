import styled from "styled-components";

import BotaoBar from "./BotaoBar";
import ListaCarrinho from "./ListaCarrinho";

function Carrinho({ cart, setCart }) {
  return (
    <Container>
      <Titulo>Meu Carrinho</Titulo>
      <Main>
        <ListaCarrinho cart={cart} setCart={setCart} />
      </Main>
      <BotaoBar />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
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
  height: 80vh;
  position: fixed;
  left: 0;
  top: 10vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
`;

export default Carrinho;
