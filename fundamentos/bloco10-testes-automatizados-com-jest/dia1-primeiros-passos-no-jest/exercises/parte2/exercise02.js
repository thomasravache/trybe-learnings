const techList = (listOfTechs, name) => {
  if (listOfTechs.length === 0) return 'Vazio!';

  return listOfTechs.sort().map((tech) => ({ tech, name, }));
};

module.exports = techList;