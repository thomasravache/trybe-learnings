const testingPromise = (a, b, c) => {
  const myPromise = new Promise((resolve, reject) => {
    const haveAnyNoNumber = [a, b, c].some((num) => typeof(num) !== 'number');

    if(haveAnyNoNumber) return reject('Informe apenas números');

    const resultado = (a + b) * c;

    resultado < 50 ? reject('Valor muito baixo') : resolve(resultado);
  });

  return myPromise;
};

module.exports = testingPromise;
