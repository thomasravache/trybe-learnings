const numberStatus = (number) => {
  if(number > 0) return 'positivo';
  if(number < 0) return 'negativo';
  if(number === 0) return 'neutro';
};

module.exports = numberStatus;
