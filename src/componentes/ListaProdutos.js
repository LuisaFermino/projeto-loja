import Produto from "./Produto";

function ListaProdutos({ produtos, cart, setCart }) {
  return produtos[0] ? (
    produtos.map(({ title, price, image, id }, indice) => (
      <Produto
        key={indice}
        title={title}
        price={price}
        image={image}
        cart={cart}
        setCart={setCart}
        id={id}
      />
    ))
  ) : (
    <p> Carregando Produtos...</p>
  );
}

export default ListaProdutos;
