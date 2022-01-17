const express = require('express');
const bodyParser = require('body-parser');
const { readSimpsonsFile, writeSimpsonsFile } = require('./readAndWrite');
const authentication = require('./authentication');
const generateToken = require('./generateToken');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(authentication);

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});
// http :3001/ping Authorization:1234567890123456

app.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(200).json({ message: `Hello, ${name}` });
});
// http POST :3001/hello name=Thomas Authorization:1234567890123456

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(age < 18) return res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}` });
});
// http POST :3001/greetings name=Thomas age:=23 Authorization:1234567890123456

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});
// http PUT :3001/users/thomas/23 Authorization:1234567890123456

app.get('/simpsons', async (_req, res) => {
  const simpsonsPersons = await readSimpsonsFile();

  res.status(200).json(simpsonsPersons);
});
// http :3001/simpsons Authorization:1234567890123456

app.get('/simpsons/:id', async (req, res) => {
  const simpsonsPersons = await readSimpsonsFile();
  const { id } = req.params;

  const person = simpsonsPersons
    .find((p) => p.id === id);

  if(!person) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(person);
});
// http :3001/simpsons/2 Authorization:1234567890123456

app.post('/simpsons', async (req, res) => {
  const simpsons = await readSimpsonsFile();
  const { id, name } = req.body;

  const alreadyHaveThisPerson = simpsons
    .some((simpson) => parseInt(simpson.id) === parseInt(id));

  if(alreadyHaveThisPerson) return res.status(409).json({ message: 'id already exists' });

  simpsons.push({ id: id.toString(), name });
  await writeSimpsonsFile(simpsons);

  res.status(204).end();
});
// http POST :3001/simpsons id=2 name='Testando nomes' Authorization:1234567890123456
// http POST :3001/simpsons id=12 name='Testando nomes' Authorization:1234567890123456

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;
  const validation = [email, password, firstName, phone]
    .some((field) => !field);

  if(validation) return res.status(401).json({ message: 'missing fields' });

  const token = generateToken();

  res.status(200).json({ token: token });
});
// http POST :3001/signup email=teste@gmail.com password:=1234 firstName=Thomas phone:=12344321 Authorization:1234567890123456

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe.` });
});
// http :3001/rotaquenaoexiste Authorization:1234567890123456

app.listen(3001, () => {
  console.log('Ouvindo na porta 3001');
});
