import Mensagem from "./Mensagem";

function ListaMensagem({ cart }) {
  return cart[0] ? cart.map(({ title, price, id }, indice) => <></>) : <></>;
}

export default ListaMensagem;
