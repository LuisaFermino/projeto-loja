import styled from "styled-components";

import { IoCloseOutline } from "react-icons/io5";

function Itens({ title, price, image }) {
  return (
    <ItemCard>
      <img src={image} alt="Imagem Produto" />
      <Informacoes>
        <Titulo>{title}</Titulo>
        <Preco>R$ {price}</Preco>
      </Informacoes>
      <Botao></Botao>
    </ItemCard>
  );
}
const ItemCard = styled.div`
  width: 90vw;
  height: 15vh;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #d7dbdd;
  padding: 15px;

  img {
    width: 18vw;
    height: 10vh;
  }
`;

const Informacoes = styled.div`
  margin-left: 5vw;
`;

const Titulo = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 11px;
  padding-bottom: 22px;
  width: 40vw;
`;

const Preco = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
`;

const Botao = styled(IoCloseOutline)`
  font-size: 22px;
  color: #b3b3b3;
  position: fixed;
  right: 6vw;
`;

export default Itens;
