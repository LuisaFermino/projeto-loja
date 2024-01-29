import styled from "styled-components";

import { IoIosAddCircleOutline } from "react-icons/io";

function EstruturaCard({ title, price, image }) {
  return (
    <Card>
      <Midia>
        <img src={image} alt="ImagemProduto" />
      </Midia>
      <Titulo>{title}</Titulo>
      <Acoes>
        <Preco>R$ {price}</Preco>
        <Botao></Botao>
      </Acoes>
    </Card>
  );
}

const Card = styled.div`
  width: 42vw;
  height: 30vh;
  margin-left: 5vw;
  border-bottom: 1px solid #d7dbdd;
  padding-top: 15px;
`;

const Midia = styled.div`
  height: 15vh;
  display: flex;
  justify-content: center;

  img {
    height: 12vh;
    width: 25vw;
  }
`;

const Titulo = styled.p`
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  max-width: 30ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 10px;
`;

const Acoes = styled.div`
  height: 5vh;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

const Preco = styled.p`
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
`;

const Botao = styled(IoIosAddCircleOutline)`
  font-size: 24px;
  color: #53b175;
`;
export default EstruturaCard;
