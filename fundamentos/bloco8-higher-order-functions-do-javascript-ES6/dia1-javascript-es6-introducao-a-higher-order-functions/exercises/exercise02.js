const isDrawnNumber = (drawnNumber, userNumber) => {
  const verification = (drawnNumber === userNumber);
  let result = ``;

  verification ? result = `Parabéns você ganhou` : result = `Tente novamente`;

  return result;
};

const drawResult = (drawnNumberVerificator, userNumber) => {
  const randomNumber = Math.floor(Math.random() * 5 + 1); //Não pense que estamos somando 10 + 1 e multiplicando por Math.random(). Na verdade, multiplicamos 10 por Math.random() e, somente depois, somamos uma unidade.
  console.log(randomNumber);

  return drawnNumberVerificator(randomNumber, userNumber);
};

console.log(drawResult(isDrawnNumber, 5));
