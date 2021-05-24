// Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n = 5;
let text = '';
let space = '';

console.log(space);

for (let line = 0; line <n; line+=1){

  for(let column = 1; column <= n-line; column+=1){

    space += ' ';
  
  }

  text += '*';
  console.log(space + text);
  space = '';

}
