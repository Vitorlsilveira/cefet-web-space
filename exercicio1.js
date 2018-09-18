
//busca botoes usados para expandir/retrair paragrafos
let buttons = document.querySelectorAll('#aliens .botao-expandir-retrair');

//adiciona o evento de click a cada um dos botoes
for (let button of buttons) {
    button.addEventListener('click', buttonClick);
}

//executa a acao no paragrafo correspondente ao botao clicado
function buttonClick(event) {
    //se o botao estiver com o + , entao troca para - e expande o paragrafo correspondente
    if (event.currentTarget.innerText === '+') {
        event.currentTarget.innerText = '-';
        //acrescenta classe ao paragrafo pai do botao
        event.currentTarget.parentElement.classList.add('expandido');
      }
      else { //nesse caso o botao é - , troca para + e remove a classe do elemento pai ao botao 
        event.currentTarget.innerText = '+';
        //remove classe expandido ao paragrafo pai do botao
        event.currentTarget.parentElement.classList.remove('expandido');
      }
}