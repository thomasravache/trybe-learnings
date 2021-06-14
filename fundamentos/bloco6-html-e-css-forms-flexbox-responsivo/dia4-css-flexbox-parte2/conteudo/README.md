# Conteúdo

## Parte l - Propriedade: align-self

-   Copie o código abaixo e no seu editor de código, teste as possibilidades para a propriedade  `align-self`  .


```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - ALIGN SELF</title>
    <style>
      .container {
        border: 1px solid black;
        display: flex;
        height: 300px;
        margin: auto;
        width: 500px;
      }

      .keep {
        align-self: center;
        background-color: #FAA488;
        display: flex;
        justify-content: center;
        width: 150px;
      }

      .change {
        /* Altere a propriedade align-self. */
        align-self: center;
        background-color: #FBD26A;
        display: flex;
        justify-content: center;
        width: 200px;
      }

    </style>
  </head>
  <body>
    <div class="container">
      <div class="keep">REFERÊNCIA</div>
      <div class="change">ELEMENTO TESTE</div>
      <div class="keep">REFERÊNCIA</div>
    </div>
  </body>
</html>
```

## Parte ll - Propriedade: order
-  
    Copie o código abaixo e teste as possibilidades de ordenação.


```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - ORDER</title>
    <style>
      .container {
        border: 1px solid black;
        display: flex;
        height: 50px;
        margin: auto;
        width: 500px;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 125px;
      }

      .one {
        background-color: #FBD26A;
        display: flex;
        /* Altere a propriedade order. */
        order: 1;
      }

      .two {
        background-color: #FAA488;
        display: flex;
        /* Altere a propriedade order. */
        order: 2;
      }

      .three {
        background-color: #9069EF;
        display: flex;
        /* Altere a propriedade order. */
        order: 3;
      }

      .four {
        background-color: #006472;
        display: flex;
        /* Altere a propriedade order. */
        order: 4;
      }

    </style>
  </head>
  <body>
    <div class="container">
      <div class="box one">1</div>
      <div class="box two">2</div>
      <div class="box three">3</div>
      <div class="box four">4</div>
    </div>
  </body>
</html>
```

## Parte lll - flex-grow, flex-shrink, flex-basis

-   Teste as possibilidades para a propriedade  `flex-grow`  .


```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - ORDER</title>
    <style>
      .container {
        display: flex;
        height: 50px;
        margin: auto;
        width: 100%;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
      }

      .one {
        background-color: #FBD26A;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
      }

      .two {
        background-color: #FAA488;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
      }

      .three {
        background-color: #9069EF;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
      }

      .four {
        background-color: #006472;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
      }

    </style>
  </head>
  <body>
    <div class="container">
      <div class="box one">1</div>
      <div class="box two">2</div>
      <div class="box three">3</div>
      <div class="box four">4</div>
    </div>
  </body>
</html>
```

-   Teste as possibilidades para a propriedade  `flex-shrink`  .


```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - SHRINK</title>
    <style>
      .container {
        display: flex;
        height: 50px;
        margin: auto;
        width: 100%;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-basis: 500px;
        flex-grow: 0;
        flex-shrink: 1;
      }

      .one {
        background-color: #FBD26A;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
      }

      .two {
        background-color: #FAA488;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
      }

      .three {
        background-color: #9069EF;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
      }

      .four {
        background-color: #006472;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
      }

    </style>
  </head>
  <body>
    <div class="container">
      <div class="box one">1</div>
      <div class="box two">2</div>
      <div class="box three">3</div>
      <div class="box four">4</div>
    </div>
  </body>
</html>
```

-   Teste as possibilidades para a propriedade  `flex-basis`  .


```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - BASIS</title>
    <style>
      .container {
        display: flex;
        height: 50px;
        margin: auto;
        width: 100%;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
        /* Altere a propriedade flex-basis */
        flex-basis: 500px;
        flex-grow: 0;
        flex-shrink: 1;
      }

      .one {
        background-color: #FBD26A;
      }

      .two {
        background-color: #FAA488;
      }

      .three {
        background-color: #9069EF;
      }

      .four {
        background-color: #006472;
      }

    </style>
  </head>
  <body>
    <div class="container">
      <div class="box one">1</div>
      <div class="box two">2</div>
      <div class="box three">3</div>
      <div class="box four">4</div>
    </div>
  </body>
</html>
```