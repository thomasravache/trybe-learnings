const returnArrayDivision = (result) => {
  const divisors = [2, 3, 5, 10];
  return divisors.map((divisor) => result / divisor);
};

const sumElementsOfArray = (array) => {
  return array.reduce((accumulator, elements) => accumulator + elements);
};

const promise = new Promise((resolve, reject) => {
  const arrayOfNumbers = [];

  for (let counter = 1; counter <= 10; counter += 1) {
    const randomNumber = Math.floor(Math.random() * 50);
    arrayOfNumbers.push(randomNumber ** 2);
  }
  const sumOfAllElements = sumElementsOfArray(arrayOfNumbers);

  if (sumOfAllElements < 8000) {
    resolve(returnArrayDivision(sumOfAllElements));
  } else {
    reject('É mais de oito mil! Essa promise deve estar quebrada!');
  }
})
  .then((response) => response)
  .then((responseOfResponse) => console.log(sumElementsOfArray(responseOfResponse)))
  .catch((error) => console.log(error));