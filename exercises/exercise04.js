const fs = require('fs').promises;

const readSimpsonsFile = () => {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent)) // convertendo o arquivo json para um array que o javascript entenda
    .then((persons) => persons.map(({ id, name }) => `${id} - ${name}`)) // transformando array de objetos em um array de strings
    .then((persons) => persons.forEach((person) => console.log(person))); // exibindo no console todos os dados do array
};

const findSimpsonsPersonById = async (id) => {
  const readingPersons = await fs.readFile('./simpsons.json', 'utf-8');
  const persons = await JSON.parse(readingPersons);

  const findedPerson = persons
    .find((person) => parseInt(person.id) === parseInt(id));

  const myPromise = new Promise((resolve, reject) => {
    if(!findedPerson) reject('id não encontrado');

    resolve(findedPerson.name);
  });

  return myPromise;
};

const deleteSimpsonsPersons = async (...ids) => {
  const readingPersons = await fs.readFile('./simpsons.json', 'utf-8');
  const persons = await JSON.parse(readingPersons);

  const newPersons = persons
    .filter((person) => ids.every((id) => parseInt(person.id) !== id));

  await fs.writeFile('./simpsons.json', JSON.stringify(newPersons));

  return console.log(`Arquivo alterado com sucesso. Novo conteúdo:\n\n${newPersons}`);
};

const createSimpsonsFamily = async () => {
  const readingPersons = await fs.readFile('./simpsons.json', 'utf-8');
  const persons = await JSON.parse(readingPersons);

  const simpsonsFamily = persons
    .filter((person) => person.id >= 1 && person.id <= 4);
  
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

  console.log(simpsonsFamily);
};

const addPerson = async (personName) => {
  const readingFile = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const persons = JSON.parse(readingFile);

  const personsIds = persons.map(({ id }) => id);
  const maxId = personsIds.reduce((a, b) => Math.max(a, b));

  const newPersons = [...persons, { id: (maxId + 1).toString(), name: personName }];

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newPersons));

  return console.log(newPersons);
};

const updatePerson = async (id, newName) => {
  const readingFile = await fs.readFile('simpsonsFamily.json');
  const persons = await JSON.parse(readingFile);

  const personIndex = persons.findIndex((person) => parseInt(person.id) === id);

  persons.splice(personIndex, 1, { id: id.toString(), name: newName });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(persons));

  console.log(persons);
}

// createSimpsonsFamily();
// addPerson('Nelson Muntz');
// updatePerson(5, 'Maggie Simpson');

module.exports = {
  readSimpsonsFile,
  findSimpsonsPersonById,
  deleteSimpsonsPersons,
  createSimpsonsFamily,
  addPerson,
  updatePerson,
};
