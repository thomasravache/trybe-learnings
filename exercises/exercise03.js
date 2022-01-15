const testingPromiseFunction = require('./exercise01');

async function main() {
  const generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);
  
  const a = generateRandomNumber();
  const b = generateRandomNumber();
  const c = generateRandomNumber();

  try {
    const result = await testingPromiseFunction(a, b, c);
    return console.log(`Resultado: ${result}`);
  } catch(e) {
    return console.log(e);
  }
}

main();
