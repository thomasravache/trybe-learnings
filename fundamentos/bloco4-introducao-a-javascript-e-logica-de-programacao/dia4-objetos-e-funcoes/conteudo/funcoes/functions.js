// Exercício 01
function operations(a, operador, b) {
  let result;
  switch (operador) {
    case '+': result = a + b;
    break;
    case '-': result = a - b;
    break;
    case '*': result = a * b;
    break;
    case '/': result = a / b;
    break;
    case '%': result = a % b;
    default: result = 'informe um operador válido';
  }
  return result;
}

// Exercício 02
function highestNumber(a, b) {
  let verification1 = (a > b);
  let verification2 = (a < b);
  let result;

  if (verification1) {
    result = a;
  } else if (verification2) {
    result = b;
  } else {
    result = 'os dois valores são iguais!';
  }
  
  return result;
}

// Exercício 03
function highestNumber2(a, b, c) {
  let verification1 = (a > b && a > c);
  let verification2 = (b > a && b > c);
  let verification3 = (c > a && c > b);
  let result;

  if (verification1) {
    result = a;
  } else if (verification2) {
    result = b;
  } else if (verification3) {
    result = c;
  } else {
    result = 'Existem 2 ou 3 valores iguais';
  }

  return result;
}

// Exercício 04
function statusNumber(number) {
  let verification1 = (number > 0);
  let verification2 = (number < 0);
  let result;

  if (verification1) {
    result = 'Número Positivo'
  } else if (verification2) {
    result = 'Número Negativo';
  } else {
    result = 'Número igual a zero.';
  }

  return result;
}

//Exercício 05
function isValidTriangule(angule1, angule2, angule3) {
  let sumAngules = angule1 + angule2 + angule3;
  let isValidTriangule;

  if (sumAngules == 180 && angule1 > 0 && angule2 > 0 && angule3 > 0){
    isValidTriangule = true;
    console.log(isValidTriangule);
  }
  else if (angule1 < 0 || angule2 < 0 || angule3 < 0){
    isValidTriangule = false;
    console.log('Existe(m) ângulo(s) com valor(es) diferente(es) de positivo.')
  }
  else{
    isValidTriangule = false;
  }

  return isValidTriangule;
}

//Exercício 06
function peacesOfChess(peace) {
  switch(peace.toLowerCase()){
    case 'peão':
      return 'O peão se movimenta uma casa para frente, a não ser que seja um En passant ou sua primeira movimentação, no caso da primeira movimentação, ele pode andar até duas casas a sua frente.';
    case 'torre':
      return 'A torre se movimenta quantas casas quiser, desde que seja na vertical ou na horizontal.';
    case 'cavalo':
      return 'O cavalo possui sua movimentação em "L", seu movimento equivale a uma casa e outra na diagonal';
    case 'bispo':
      return 'O bispo se movimenta quantas casas quiser, desde que seja na diagonal';
    case 'dama':
      return 'A dama se movimenta quantas casas quiser, podendo ser tanto na diagonal, vertical e horizontal.';
    case 'rei':
      return 'O rei se movimenta em todas as direções possíveis, mas somente uma casa por vez.';
    default:
      return 'Opção inválida.';
  }
}

//Exercício 07
function noteConverter(percentNote) {

  if (percentNote >= 90 && percentNote <= 100){
    return ('Nota A');
  }
  else if (percentNote < 90 && percentNote >= 80){
    return ('Nota B');
  }
  else if (percentNote < 80 && percentNote >= 70){
    return ('Nota C');
  }
  else if (percentNote < 70 && percentNote >= 60){
    return ('Nota D');
  }
  else if (percentNote < 60 && percentNote >= 50){
    return ('Nota E');
  }
  else if (percentNote < 50 && percentNote >= 0){
    return ('Nota F');
  }
  else{
    return ('Valor informado não identificado.');
  }
}

//Exercício 08
function evenVerificator(num1, num2, num3) {
  let existingEven = false;

  if (num1%2 === 0 || num2%2 === 0 || num3%2 === 0){
    existingEven = true;
  }

  return existingEven;
}

//Exercício 09
function oddVerificator(num1, num2, num3) {
  let existingOdd = false;

  if (num1%2 !== 0 || num2%2 !== 0 || num3%2 !== 0){
    existingOdd = true;
  }
  
  return existingOdd;
}

//Exercício 10
function profitOfProduct(costProduct, saleValue, soldAmount, tax) {
  let totalProductCost = costProduct + (costProduct * tax); // Custo total do produto
  let profit = soldAmount * (saleValue - totalProductCost); // Lucro
  let result;

  if(costProduct < 0 || saleValue < 0 || soldAmount < 0 || tax < 0){
    result = 'Não foi possível dar continuidade, valores informados não são positivos.';
  }
  else{
    console.log('Custo do produto: ' + costProduct);
    console.log('Valor de Venda: ' + saleValue);
    console.log('Incidência de imposto sobre o custo: ' + tax*100 + '%');
    console.log('Quantidade vendida: ' + soldAmount + ' unidades');
    result = 'O lucro para ' + soldAmount + ' unidades vendidas seria de: R$' + profit;
  }

  return result;
}

//Exercício 11
function liquidSalary(grossSalary) {
  let inssAliquot;
  let baseSalary;
  let irAliquot;
  let deductionTax;
  let netSalary;
  let result;

  console.log('Salário bruto informado: R$ ' + grossSalary);

  if (grossSalary > 0 && grossSalary <= 1556.94){
    inssAliquot = 0.08 * grossSalary;
    console.log('Alíquota de 8% de INSS incidida --> R$ ' + inssAliquot);
  }
  else if (grossSalary > 1556.94 && grossSalary <= 2594.92){
    inssAliquot = 0.09 * grossSalary;
    console.log('Alíquota de 9% de INSS incidida --> R$ ' + inssAliquot);
  }
  else if (grossSalary > 2594.92 && grossSalary <= 5189.82){
    inssAliquot = 0.11 * grossSalary;
    console.log('Alíquota de 11% de INSS incidida --> R$ ' + inssAliquot);
  }
  else if (grossSalary > 5189.82){
    inssAliquot = 570.88;
    console.log('Alíquota máxima de INSS incidida: R$ ' + inssAliquot);
  }

  baseSalary = grossSalary - inssAliquot;
  console.log('Seu salário base é de R$ ' + baseSalary)

  if (baseSalary <= 1903.98){
    irAliquot = 0;
    console.log('Isento do Imposto de Renda.');
  }
  else if(baseSalary > 1903.98 && baseSalary <= 2826.65){
    deductionTax = 142.80
    irAliquot = baseSalary * 0.075 - deductionTax;
    console.log('Alíquota de 7,5% de IR incidida --> R$ ' + baseSalary * 0.075);
    console.log('Dedução no IR de R$ ' + deductionTax);
  }
  else if(baseSalary > 2826.65 && baseSalary <= 3751.05){
    deductionTax = 354.80
    irAliquot = baseSalary * 0.15 - deductionTax;
    console.log('Alíquota de 15% de IR incidida --> R$ ' + baseSalary * 0.15);
    console.log('Dedução no IR de R$ ' + deductionTax);
  }
  else if (baseSalary > 3751.05 && baseSalary <= 4664.68){
    deductionTax = 636.13
    irAliquot = baseSalary * 0.225 - deductionTax;
    console.log('Alíquota de 22,5% de IR incidida --> R$ ' + baseSalary * 0.225);
    console.log('Dedução no IR de R$ ' + deductionTax);
  }
  else if (baseSalary > 4664.68){
    deductionTax = 869.36
    irAliquot = baseSalary * 0.275 - deductionTax;
    console.log('Alíquota de 27,5% de IR incidida --> R$ ' + baseSalary * 0.275);
    console.log('Dedução no IR de R$ ' + deductionTax);
  }

  netSalary = baseSalary - irAliquot;
  result = 'Sálario líquido de R$ ' + netSalary;

  return result;
}
