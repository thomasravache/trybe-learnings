const fs = require('fs').promises;

const readSimpsonsFile = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(fileContent);
};

const writeSimpsonsFile = () => {

};

module.exports = {
  readSimpsonsFile,
  writeSimpsonsFile,
};
