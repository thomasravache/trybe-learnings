// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let number1 = 10;
let number2 = 20;
let number3 = 30;

if (number1 > number2 && number1 > number3){
  console.log(number1);
}
else if (number2 > number1 && number2 > number3){
  console.log(number2);
}
else {
  console.log(number3);
}
