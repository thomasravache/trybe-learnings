// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let choice = 'cavalo';

switch(choice.toLowerCase()){
  case 'peão':
    console.log('O peão se movimenta uma casa para frente, a não ser que seja um En passant ou sua primeira movimentação, no caso da primeira movimentação, ele pode andar até duas casas a sua frente.');
    break;
  
  case 'torre':
    console.log('A torre se movimenta quantas casas quiser, desde que seja na vertical ou na horizontal.');
    break;
  
  case 'cavalo':
    console.log('O cavalo possui sua movimentação em "L", seu movimento equivale a uma casa e outra na diagonal');
    break;
  
  case 'bispo':
    console.log('O bispo se movimenta quantas casas quiser, desde que seja na diagonal');
    break;

  case 'dama':
    console.log('A dama se movimenta quantas casas quiser, podendo ser tanto na diagonal, vertical e horizontal.');
    break;
  
  case 'rei':
    console.log('O rei se movimenta em todas as direções possíveis, mas somente uma casa por vez.');

  default:
    console.log('Opção inválida.');
}
