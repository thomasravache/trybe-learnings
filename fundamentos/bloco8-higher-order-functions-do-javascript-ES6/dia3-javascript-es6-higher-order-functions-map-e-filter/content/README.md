# Conteúdo

## Array.map

Outras formas de usar o  `.map`  é unir dois arrays para criar um novo. Considere que você possui duas listas: o preço do primeiro produto (  `Arroz`  ) é o primeiro elemento da lista  `prices`  (  `2.99`  ), e assim por diante:


```javascript
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
```

Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:

```javascript
const listProducts = [{ Arroz: 2.99 },...]
```

Tente criar uma função que resolva esse problema. Lembre-se, também, que as funções passadas para as  _HOFs_ podem receber vários parâmetros, não só o  `elemento`  sobre o qual ela está sendo iterada! Use isso em seu favor.