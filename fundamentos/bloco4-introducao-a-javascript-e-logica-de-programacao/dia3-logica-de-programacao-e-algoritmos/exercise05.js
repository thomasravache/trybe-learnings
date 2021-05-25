//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
// Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 9;
let space = '';
let text = '';
let numberLines = n-3;
let auxiliar = numberLines;

for(let line = 0; line < numberLines; line+=1){

  for(let spaceCount = 1; spaceCount<= auxiliar; spaceCount+=1){

    space += ' ';

  }

  if(line === 1){
    text+=' *';
  }
  else if(line === 2){
    text='*   *';
  }
  else if(line > 2){
    text = '';
    for(let base = 1; base <= n; base+=1){
      text+='*';
    }
  }
  else{
    text+='*';
  }

  console.log(space + text);
  
  space = '';
  auxiliar-=1;
  

}

