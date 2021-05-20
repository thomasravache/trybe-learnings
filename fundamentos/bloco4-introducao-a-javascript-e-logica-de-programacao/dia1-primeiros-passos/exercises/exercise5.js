// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let angule1 = -1;
let angule2 = 60;
let angule3 = 60;

let sumAngules = angule1 + angule2 + angule3;
let isValidTriangule;

if (sumAngules == 180 && angule1 > 0 && angule2 > 0 && angule3 > 0){
  isValidTriangule = true;
  console.log(isValidTriangule);
}
else if (angule1 < 0 || angule2 < 0 || angule3 < 0){
  isValidTriangule = false;
  console.log('Existe(m) ângulo(s) com valor(es) diferente(es) de positivo.')
  console.log(isValidTriangule);
}
else{
  isValidTriangule = false;
  console.log(isValidTriangule);
}

