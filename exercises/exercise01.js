const testingPromise = (a, b, c) => {
  const myPromise = new Promise((resolve, reject) => {
    const haveAnyNoNumber = [a, b, c].some((num) => typeof(num) !== 'number');

    if(haveAnyNoNumber) return reject('Informe apenas números');

    const resultado = (a + b) * c;

    resultado < 50 ? reject('Valor muito baixo') : resolve(resultado);
  });

  return myPromise;
};

testingPromise('oi', 10, 3)
  .then((result) => console.log(`O resultado é: ${result}`))
  .catch((err) => console.log(err));
