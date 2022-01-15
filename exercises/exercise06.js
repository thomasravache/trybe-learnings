const fs = require('fs').promises;
const { question } = require('readline-sync')

const readFile = async () => {
  const fileName = question('Qual arquivo deseja ler?\nResposta: ');

  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(`\nConteúdo do arquivo:\n\n${fileContent}`);

    const oldWord = question('\nDigite uma palavra para substituir no arquivo\nResposta: ');
    const newWord = question('\nDigite a nova palavra\nResposta: ')
    await fs.writeFile(fileName, fileContent.replace(new RegExp(oldWord, 'g'), newWord));

    const newFileContent = await fs.readFile(fileName, 'utf-8');

    return console.log(`\nNovo conteúdo do arquivo:\n\n${newFileContent}\n`);
  } catch(e) {
    return console.log(`Arquivo não existe.\n${e.message}`);
  }
};

readFile();
