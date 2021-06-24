const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((value) => value === name);
}

console.log(hasName(names, 'Ana'));