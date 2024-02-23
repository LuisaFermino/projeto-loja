import Itens from "./ItemCart";

function ListaCarrinho({ cart, setCart }) {
  return cart[0] ? (
    cart.map(({ title, price, image, id }, indice) => (
      <Itens
        key={indice}
        id={id}
        title={title}
        price={price}
        image={image}
        setCart={setCart}
        cart={cart}
      />
    ))
  ) : (
    <></>
  );
}

export default ListaCarrinho;
