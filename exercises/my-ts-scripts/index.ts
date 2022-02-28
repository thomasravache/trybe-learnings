import readlineSync from 'readline-sync';

const main = (): any => {
  const files: string[] = ['area', 'capacity', 'characters', 'length', 'mass'];

  const menu = files
    .map((file: string, index: number) => `${index + 1} - ${file}`)
    .join('\n');

  console.log(menu);

  const fileToRun = readlineSync.questionInt('\nQual arquivo deseja abrir?\n');
  const fileIndex = files.findIndex((file: string) => file === files[fileToRun - 1]);

  if (fileIndex === -1) return console.log('Deu ruim');

  return require(`${__dirname}/${files[fileIndex]}`);
};

main();
