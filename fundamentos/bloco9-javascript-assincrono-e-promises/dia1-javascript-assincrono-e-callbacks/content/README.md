# Conteúdo

## Callbacks

Agora, faça estes exercícios de fixação:

1.  No código abaixo você tem a função  `getUser`  , que retorna uma pessoa qualquer. Complete a função  `getUser`  de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.

Copiar

```javascript
const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
};

assert.strictEqual(getUser(), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser(), "Ivan is Russian"); // complete a chamada da função de getUser
```

2.  No código abaixo você tem a função  `getUser`  modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa qualquer depois de um certo tempo. Complete a função  `getUser`  de forma que ela receba um  `callback`  para que possa realizar as operações abaixo sobre a pessoa.

Copiar

```javascript
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
```

_Obs: note e averigue o comportamento assíncrono da função  `getUser`  ao chamar  `getUser(userFullName)`  seguido de  `getUser(userNationality)`  . Tem hora que é impresso antes no console o nome da pessoa, e tem hora que é impressa antes a nacionalidade da pessoa!_