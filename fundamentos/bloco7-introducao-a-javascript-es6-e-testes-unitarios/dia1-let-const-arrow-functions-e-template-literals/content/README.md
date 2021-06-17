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