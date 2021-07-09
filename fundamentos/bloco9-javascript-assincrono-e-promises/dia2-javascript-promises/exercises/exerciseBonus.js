const sumRandomNumbers = () => {
  const array = Array
  .from(
    {length: 10},
    () => (Math.floor(Math.random() * 50) + 1) ** 2 // o + 1 é porque não quero que tenha números zero
  );
  const sum =  array.reduce((accumulator, elements) => accumulator + elements);

  if (sum < 8000) {
    return sum;
  }
  throw new Error();
};

const returnArrayDivision = (sum) => {
  const divisors = [2, 3, 5, 10];
  return divisors.map((divisor) => sum / divisor);
};

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const arrayWithDivisions = await returnArrayDivision(sum);

    return console.log(arrayWithDivisions);
  } catch (error) {
    console.log('É mais de oito mil, Essa promise deve estar quebrada!');
  }
};

fetchPromise();

