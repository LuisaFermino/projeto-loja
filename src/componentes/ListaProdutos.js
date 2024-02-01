import EstruturaProduto from "./Produto";

function ListaProdutos({ produtos, cart, setCart }) {
  return produtos[0] ? (
    produtos.map(({ title, price, image }, indice) => (
      <EstruturaProduto
        key={indice}
        title={title}
        price={price}
        image={image}
        cart={cart}
        setCart={setCart}
      />
    ))
  ) : (
    <p> Carregando Produtos...</p>
  );
}

export default ListaProdutos;
