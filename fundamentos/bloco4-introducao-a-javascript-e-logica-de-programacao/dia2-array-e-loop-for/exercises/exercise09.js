// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let arrayOfNumbers = [];

for (let newValues = 1; newValues <= 25; newValues+=1){
  arrayOfNumbers.push(newValues);
  console.log(arrayOfNumbers[newValues-1]);
}

console.log(``);
console.log(`Exibindo os elementos divididos por 2:`)
for (let index = 0; index < arrayOfNumbers.length; index+=1){
  console.log(`Indice ${index} --> ${arrayOfNumbers[index]}/2 = ${arrayOfNumbers[index]/2}`);
}
