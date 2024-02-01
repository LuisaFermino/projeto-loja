import EstruturaProduto from "./Produto";

function ListaProdutos({ produtos, cart, setCart }) {
  return produtos[0] ? (
    produtos.map(({ title, price, category, description, image }, indice) => (
      <EstruturaProduto
        key={indice}
        title={title}
        price={price}
        category={category}
        description={description}
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
