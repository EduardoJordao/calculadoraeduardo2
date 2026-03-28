//ESPERA DO HTML CARREGAR COMPLETAMENTE
document.addEventlistener('DOMContentLoadad' function () {

  // NÛMEROS A SEREM SOMADOS 

  let n1 = 10;
  let n2 = 20;

  // FUNÇÃO QUE REALIZA A SOMA 
  function soma(a, b) {
    return a + b;
  }
  // ADICIONA O EVENTO DE CLIQUE NO BOTÃO
  botao.addEventListener('click', function () {

    // CALCULA O RESULTADO
    let resultado = somar(n1 + n2);

    // ATUALIZA A 'TELA' DO JOGO COM O RESULTADO
    displayResultado.innerText = resultado;

  })
);
