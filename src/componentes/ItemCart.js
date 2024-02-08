import styled from "styled-components";

import { IoCloseOutline } from "react-icons/io5";

function Itens({ title, price, image, cart, setCart, id, mensagem }) {
  mensagem = encodeURI(`
  Produto: ${title}
  Preço: R$ ${price}
  *Valor total: R$ ${price}*
  `);
  window.location.href = `https://wa.me/5514996047024?text=${mensagem}`;

  function RemoveItem() {
    const update = cart.filter((item) => item.id !== id);
    setCart(update);
    console.log(cart);
  }
  return (
    <ItemCard>
      <img src={image} alt="Imagem Produto" />
      <Informacoes>
        <Titulo>{title}</Titulo>
        <Preco>R$ {price}</Preco>
      </Informacoes>
      <Botao onClick={RemoveItem}></Botao>
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
  font-size: 12px;
  padding-bottom: 30px;
  width: 50vw;
  max-width: 40ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Preco = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
`;

const Botao = styled(IoCloseOutline)`
  font-size: 22px;
  color: #b3b3b3;
  position: relative;
  left: 6vw;
  top: 0;
`;

export default Itens;
