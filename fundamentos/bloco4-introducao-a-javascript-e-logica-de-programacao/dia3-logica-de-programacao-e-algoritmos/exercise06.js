// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.


let number = 139;
let storer = 0;
  
  for (let sequence = 0; sequence < number; sequence += 1) {
    let isNotPrimeNumber = ((number % sequence === 0)  && (sequence !== 1) && (sequence !== 0));

    if (isNotPrimeNumber) {
      storer += 1;
      break;
    }
  }

  let verification = (storer >= 1) || (number <= 1);

  if(verification) {
    console.log(`O número ${number} não é primo.`);
  } else {
    console.log(`O número ${number} é primo.`);
  }



