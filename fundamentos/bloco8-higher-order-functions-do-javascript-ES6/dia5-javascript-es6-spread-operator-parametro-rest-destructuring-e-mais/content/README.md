# Conteúdo

## Spread Operator
#### Para fixar

Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada  `fruitSalad`  passando como parâmetro  `specialFruit`  e  `additionalItens`  , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o  `spread`  .

```javascript
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['', '', ''];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['', '', ''];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
};

console.log(fruitSalad(specialFruit, additionalItens));
```

## Array Destructuring

#### Para Fixar

**1** - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.


```javascript
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
```

----------

**2** - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.


```javascript
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
```

----------

**3** - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável  `numerosPares`  .


```javascript
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
```