// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

let costProduct = 10; //Custo do produto
let saleValue = 20; //Valor de Venda
let soldAmount = 1000; //Quantidade Vendida
let tax = 0.2; //Imposto de 20%

let totalProductCost = costProduct + (costProduct * tax); // Custo total do produto

let profit = soldAmount * (saleValue - totalProductCost); // Lucro

if(costProduct < 0 || saleValue < 0 || soldAmount < 0 || tax < 0){
  console.log('Não foi possível dar continuidade, valores informados não são positivos.')
}
else{
  console.log('Custo do produto: ' + costProduct);
  console.log('Valor de Venda: ' + saleValue);
  console.log('Incidência de imposto sobre o custo: ' + tax*100 + '%');
  console.log('Quantidade vendida: ' + soldAmount + ' unidades');
  console.log('O lucro para ' + soldAmount + ' unidades vendidas seria de: R$' + profit);
}



