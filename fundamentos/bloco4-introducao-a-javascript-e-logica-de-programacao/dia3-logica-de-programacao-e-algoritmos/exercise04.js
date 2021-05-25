// Depois, faça uma pirâmide com n asteriscos de base:
// Copiar
// n = 5

//   *
//  ***
// *****

let n = 6;
let text = '';
let space = '';
let auxiliar = n-2;

for(let line = 0; line < n-2; line +=1){

  for(let spaceCount = 1; spaceCount <= auxiliar; spaceCount+=1){

    space += ' ';

  }

  if(line >= 1){
    text+='**';
  }
  else{
    text+='*';
  }
  
  console.log(space + text);
  space = '';
  auxiliar-=1;
  
}
