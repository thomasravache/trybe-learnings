const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

let productsAndPrices = products.map((product, index) => {
  return {[product]: prices[index]}
});

console.log(productsAndPrices);