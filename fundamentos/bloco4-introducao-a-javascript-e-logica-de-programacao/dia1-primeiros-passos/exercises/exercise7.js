// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let percentNote = 75;

if (percentNote >= 90 && percentNote <= 100){
  console.log('Nota A');
}
else if (percentNote < 90 && percentNote >= 80){
  console.log('Nota B');
}
else if (percentNote < 80 && percentNote >= 70){
  console.log('Nota C');
}
else if (percentNote < 70 && percentNote >= 60){
  console.log('Nota D');
}
else if (percentNote < 60 && percentNote >= 50){
  console.log('Nota E');
}
else if (percentNote < 50 && percentNote >= 0){
  console.log('Nota F');
}
else{
  console.log('Valor informado não identificado.');
}
