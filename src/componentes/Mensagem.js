function Mensagem({ title, price }) {
  const mensagemZap = encodeURI(`
    Produto: ${title}
    Preço: R$ ${price}
    *Valor total: R$ ${price}*
    `);

  return (window.location.href = `https://wa.me/5514996047024?text=${mensagemZap}`);
}

export default Mensagem;
