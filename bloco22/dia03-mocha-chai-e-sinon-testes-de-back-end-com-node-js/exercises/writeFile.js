const fs = require('fs');

const myWriteFileFunction = async (fileName, fileContent) => {
  try {
    if(typeof(fileContent) !== 'string') return 'não é uma string';
    await fs.promises.writeFile(fileName, `${fileContent}\n`);
    return 'ok';
  } catch(err) {
    return 'Deu ruim';
  }
}

myWriteFileFunction('./arquivo.txt', 'Testea');

module.exports = myWriteFileFunction;
