
let array = [1, 2, 3, 10, 5];

// Resolvendo com For
let higherNumber;

for (let index = 0; index < array.length; index += 1) {
  if (!higherNumber || higherNumber < array[index]) {
    higherNumber = array[index];
  }
}

console.log(`maior número com For: ${higherNumber}`);


//Resolvendo com reduce

const higherNumberWithReduce = array.reduce((result, number) => {
  if (result < number) result = number;

  return result;
});

console.log(`maior número com reduce: ${higherNumberWithReduce}`);