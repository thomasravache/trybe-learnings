const fs = require('fs').promises;

Promise.all(['Finalmente', 'estou', 'usando', 'Promisse.all', '!!!'])
  .then((files) => {
    let fileNames = []

    files.forEach((fileContent, index) => {
      let fileName = `file${index + 1}.txt`;
      fileNames.push({fileName, fileContent});
      fs.writeFile(fileName, fileContent);
    });

    return fileNames;
  })
  .then((files) => {
    const allContent = files
      .map(({ fileContent }) => fileContent)
      .join(' ');

    files.forEach(({fileName}) => {
      fs.readFile(`./${fileName}`, 'utf-8')
        .then((content) => console.log(content));
    });
    fs.writeFile('filleAll.txt', allContent);
  });
