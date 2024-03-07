function EnviaMensagem(cart) {
  let valorTotal = 0;
  let mensagem = `
  *Itens do Carrinho*
 
  ---------------------------
 `;

  cart.forEach((item) => {
    mensagem += `
  *Produto:* ${item.title} 

  *Preço: R$ ${item.price}* 
    
  ---------------------------
    `;
    valorTotal += item.price;
  });

  mensagem += `
  *Total: ${valorTotal}*
    
    `;

  mensagem = encodeURI(mensagem);
  window.location.href = `https://wa.me/5514998812492?text=${mensagem}`;
}

export default EnviaMensagem;
