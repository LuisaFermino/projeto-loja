function EnviaMensagem(cart) {
  let mensagem = `
  Itens do Carrinho:
 
  ---------------------------
 
 `;
  cart.forEach((item) => {
    mensagem += `
    
    ${item.title} - ${item.price}
    
    ---------------------------
 
    `;
  });

  mensagem = encodeURI(mensagem);
  window.location.href = `https://wa.me/5514996047024?text=${mensagem}`;
}

export default EnviaMensagem;
