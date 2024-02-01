import Itens from "./ItemCart";

function ListaCarrinho({ cart, setCart }) {
  return cart[0] ? (
    cart.map(({ title, price, image }, indice) => (
      <Itens
        key={indice}
        title={title}
        price={price}
        image={image}
        setCart={setCart}
      />
    ))
  ) : (
    <></>
  );
}

export default ListaCarrinho;
