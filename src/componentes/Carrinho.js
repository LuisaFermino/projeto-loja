import styled from "styled-components";

import BotaoBar from "./BotaoBar";
import ListaCarrinho from "./ListaCarrinho";

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
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f3f4;
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

export default Carrinho;
