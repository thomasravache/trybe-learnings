const express = require('express');
const bodyParser = require('body-parser');
const { readSimpsonsFile, writeSimpsonsFile } = require('./readAndWrite');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(age < 18) return res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}` });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get('/simpsons', async (_req, res) => {
  const simpsonsPersons = await readSimpsonsFile();

  res.status(200).json(simpsonsPersons);
});

app.get('/simpsons/:id', async (req, res) => {
  const simpsonsPersons = await readSimpsonsFile();
  const { id } = req.params;

  const person = simpsonsPersons
    .find((p) => p.id === id);

  if(!person) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(person);
});

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
