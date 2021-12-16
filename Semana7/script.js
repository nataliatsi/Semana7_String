let itens = prompt('Qquantos itens serão exibidos?')
let mensagem = prompt('Insira a mensagem a ser exibida: ')

function createList(itens, mensagem) {
  let i = 0;
  let ul = document.querySelector('ul');

  while (i < itens ) {
    var li = document.createElement('li');
    var msg = document.createTextNode(mensagem);

    li.appendChild(msg);
    ul.appendChild(li);
    
    i++;
  }
}
createList(itens, mensagem);
