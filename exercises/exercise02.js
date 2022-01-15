const testingPromiseFunction = require('./exercise01');

const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const a = generateRandomNumber();
const b = generateRandomNumber();
const c = generateRandomNumber();

testingPromiseFunction(a, b, c)
  .then((result) => console.log(`Resultado: ${result}`))
  .catch((err) => console.log(err));
