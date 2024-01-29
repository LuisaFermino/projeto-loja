import EstruturaCard from "./Card";

function MontarCard({ produtos }) {
  return produtos[0] ? (
    produtos.map(({ title, price, category, description, image }, indice) => (
      <EstruturaCard
        key={indice}
        title={title}
        price={price}
        category={category}
        description={description}
        image={image}
      />
    ))
  ) : (
    <p> Carregando Produtos...</p>
  );
}

export default MontarCard;
