# Conteúdo

##  Parte I -  `var, let e const`

Em primeiro lugar, vamos entender o que é o escopo em que a variável é declarada. Podemos pensar em escopo como sendo o 'local' em que uma variável é visível e pode ser referenciada. Como exemplo, observe a função abaixo:


```javascript
function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();
```

Tente rodar a função  `userInfo`  no seu editor de código. Nesse caso, a variável  `userEmail`  foi declarada dentro do escopo da função  `userInfo`  . Agora experimente mover o  `console.log(userEmail)`  para fora da função e a execute novamente. Você verá um erro dizendo que  `userEmail`  não é definida - a variável só é reconhecida dentro do escopo da função. O que aconteceria se trocássemos o  `let`  por  `var`  e  `const`  ? Não deixe de fazer esse teste! Você verá que nos três casos, não temos acesso à variável fora do escopo da função  `userInfo`  . Como saber, então, qual expressão utilizar para declarar variáveis


Vamos agora pensar em variáveis declaradas dentro do escopo de um bloco de código - como o corpo de um  `if`  ou um  `for`  . Acompanhe o exemplo abaixo e não deixe de testá-lo no seu editor de código:


```javascript
if (true) {
  // inicio do escopo do if
  var userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20
```

Nesse exemplo, temos acesso à variável  `userAge`  dentro e fora do bloco de código. Experimente trocar o  `var`  por  `let`  e  `const`  . Qual será o resultado? Temos acesso à variável declarada com o  `var`  dentro e fora do escopo do bloco. No entanto, não temos acesso à  `userAge`  fora do bloco de código quando usamos  `let`  e  `const`  para declarar essa variável. Isso é interessante quando queremos trabalhar com variáveis acessíveis apenas no contexto daquele bloco de código. Por ter um escopo mais abrangente, em aplicações mais complexas declarar variáveis com o  `var`  pode confundir até mesmo programadores mais experientes.

Agora observe de uma forma um pouco mais visual como funcionam os escopos e o comportamento do  `var`  em casos que sua utilização "vaza" o escopo.

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/javascript-es6/images/escopos-0945c242e80b8eb512adb7c89a37c72d.gif)

GIF Escopos.

Outro grande problema ao utilizar o  `var`  para atribuir valor à variáveis é que você consegue sobrescrevê-las sem gerar erros.


```javascript
var userName = "Isabella";
var userName = "Lucas";
console.log(userName); // Resultado: Lucas
```

Em aplicações maiores, você pode redeclarar variáveis acidentalmente e nem perceber o que aconteceu quando usamos o  `var`  . Por isso, encontrar e corrigir bugs pode se tornar uma verdadeira missão impossível. Por estes motivos, declarar variáveis com o  `var`  não é uma boa prática.

O ES6 corrige esse problema ao introduzir o  `let`  e o  `const`  , fazendo com que uma variável, com um nome específico, só possa ser declarada uma única vez dentro de um escopo. Experimente executar o exemplo anterior usando o  `let`  e  `const`  e veja o que acontece!

E quanto ao  `const`  , como ele se diferencia do  `let`  ? O  `const`  permite com que você declare  **constantes** . Em outras palavras, o valor atribuído a uma variável declarada com o  `const`  não pode ser alterado. Já quando usamos o  `let`  , podemos substituir o valor original atribuído à variável. Tente executar o código abaixo usando o  `const`  e  `let`  e veja o que acontece!


```javascript
const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition
```

No exemplo acima, vimos que o  `const`  é  **imutável** - ao declarar  `const favoriteLanguage = "Javascript`  o valor de  `favoriteLanguage`  não pode ser alterado. Mas quando usamos o  `const`  para criar um objeto, o Javascript nos permite alterar as suas propriedades sem, contudo, reatribuir um novo objeto. Acompanhe o exemplo abaixo para entender melhor como funciona:


```javascript
const userInfo = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo.name = "João"

console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }
```

Esse raciocínio também se aplica a um array. Podemos alterá-lo indiretamente adicionando/removendo um novo item sem sobrescrever o que já foi declarado:


```javascript
const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro
```

Em resumo, variáveis podem ser declaradas com o  `const`  ,  `let`  e  `var`  . Apesar das três terem o mesmo propósito, é importante nos atentar às boas práticas para escrevermos códigos confiáveis. Assim, sempre que possível, usar o  `const`  para declarar variáveis é interessante porque conseguimos um comportamento mais previsível, já que o seu valor não pode ser alterado diretamente.