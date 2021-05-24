// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 5;
let text = '';
for(let line = 1; line <= n; line +=1){
  
  for(let column = 1; column <= n; column+=1){
    text += '*';
  }
  
  console.log(text);
  text = '';
}
