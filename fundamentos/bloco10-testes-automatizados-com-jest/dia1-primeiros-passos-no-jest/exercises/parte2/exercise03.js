const hydrate = (string) => {
  const getQuantity = [...string]
    .reduce((accumulator, character) => (!isNaN(character)) ? accumulator + Number(character) : accumulator, 0);
  
  return (getQuantity === 1) ? `${getQuantity} copo de água` : `${getQuantity} copos de água`;
};

module.exports = hydrate;