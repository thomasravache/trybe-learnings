const fs = require('fs').promises;

const readSimpsonsFile = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(fileContent);
};

const writeSimpsonsFile = async (fileContent) => {
  await fs.writeFile('./simpsons.json', JSON.stringify(fileContent));
};

module.exports = {
  readSimpsonsFile,
  writeSimpsonsFile,
};
