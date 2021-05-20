// Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let number1 = 3;
let number2 = 3;
let number3 = 3;

let existingEven = false;

if (number1%2 === 0 || number2%2 === 0 || number3%2 === 0){
  existingEven = true;
  console.log(existingEven);
}
else{
  console.log(existingEven);
}