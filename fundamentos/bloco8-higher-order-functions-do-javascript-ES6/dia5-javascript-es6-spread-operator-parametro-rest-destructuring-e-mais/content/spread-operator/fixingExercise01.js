// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Uva', 'Kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Creme de leite', 'Nutella', 'Chantilly'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));