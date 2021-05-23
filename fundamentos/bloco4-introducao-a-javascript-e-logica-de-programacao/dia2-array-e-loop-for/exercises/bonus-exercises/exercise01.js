// Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
  
    if (numbers[index] < numbers[secondIndex]) {
      console.log(`${numbers[index]} é MENOR do que ${numbers[secondIndex]}, serão trocados.`);
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
    else{
      console.log(`${numbers[index]} é MAIOR do que ${numbers[secondIndex]}, NÃO serão trocados.`);
    }
    console.log(numbers);
  }

}

