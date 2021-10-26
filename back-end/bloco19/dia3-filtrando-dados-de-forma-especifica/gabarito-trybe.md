
## Gabarito dos exercícios

Lembre-se que os exercícios servem para consolidar o seu aprendizado e te ajudar a identificar as suas dúvidas! Portanto, é esperado que você trave em algum momento. Somente olhe o gabarito depois de tentar resolver o problema por algum tempo! Garanta que você entendeu tudo que está aqui, explique para "a parede" para ter certeza e, se houver dificuldade, tire sua dúvida conosco!

----------

## Conteúdos

### Alavancando o poder dos principais operadores booleanos e relacionais

#### Para Fixar

1.  Precisamos identificar os dados do cliente com o e-mail  `LEONARD.SCHOFIELD@sakilacustomer.org`  .  **Solução:**

Copiar

```sql
USE sakila;
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
```

2.  Precisamos de um relatório dos nomes dos clientes, em  `ordem alfabética`  , que não estão mais ativos no nosso sistema e pertencem à loja com o  **id** 2. Porém, não inclua o cliente  `KENNETH`  no resultado.  **Solução:**

Copiar

```sql
USE sakila;
SELECT first_name FROM customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;
```

3.  O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição, dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em  `ordem alfabética`  pelo título.  **Solução:**

Copiar

```sql
USE sakila;
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title
LIMIT 100;
```

4.  Quantos clientes estão  `ativos`  e na loja  `1`  ?

Copiar

```sql
USE sakila;
**Solução:**
SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM customer
WHERE active = 1 AND store_id = 1;
```

5.  Mostre todos os detalhes dos clientes que  `não`  estão ativos na loja  `1`  .  **Solução:**

Copiar

```sql
USE sakila;
SELECT * FROM customer
WHERE active = 0 AND store_id = 1;
```

6.  Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a  `menor`  taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em  `ordem alfabética`  pelo título.  **Solução:**

Copiar

```sql
USE sakila;
SELECT title FROM film
WHERE rating = 'NC-17' 
ORDER BY rental_rate, title
LIMIT 50;
```

### Como criar pesquisas mais dinâmicas e maleáveis usando o  `LIKE`

#### Para Fixar

1.  Mostre todos os detalhes dos filmes que contêm a palavra  `ace`  no nome.  **Solução:**

Copiar

```sql
USE sakila;
SELECT * FROM film
WHERE title LIKE '%ace%';
```

2.  Mostre todos os detalhes dos filmes cujas descrições finalizam com  `china`  .  **Solução:**

Copiar

```sql
USE sakila;
SELECT * FROM film
WHERE description LIKE '%china';
```

3.  Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra  `girl`  e o título finaliza com a palavra  `lord`  .  **Solução:**

Copiar

```sql
USE sakila;
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';
```

4.  Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra  `gon`  .  **Solução:**

Copiar

```sql
USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%';
```

5.  Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra  `gon`  e a descrição contém a palavra  `Documentary`  .  **Solução:**

Copiar

```sql
USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
```

6.  Mostre os dois filmes cujos títulos ou finalizam com  `academy`  ou iniciam com  `mosquito`  .  **Solução:**

Copiar

```sql
USE sakila;
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
```

7.  Mostre os seis filmes que contêm as palavras  `monkey`  e  `sumo`  em suas descrições.  **Solução:**

Copiar

```sql
USE sakila;
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
```

### Englobando uma faixa de resultados com  `IN`  e  `BETWEEN`  (consolidando o conhecimento)

#### Para Fixar

1.  Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes:  `hicks, crawford, henry, boyd, mason, morales e kennedy`  , ordenados por nome em ordem alfabética.  **Solução:**

Copiar

```sql
USE sakila;
SELECT first_name, last_name, email FROM customer
WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
```

2.  Mostre o e-mail dos clientes com os  `address_id 172, 173, 174, 175 e 176`  , ordenados em ordem alfabética.  **Solução:**

Copiar

```sql
USE sakila;
SELECT email FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;
```

3.  Descubra quantos pagamentos foram feitos entre  `01/05/2005`  e  `01/08/2005`  . Lembre-se de que, no banco de dados, as datas estão armazenadas no formato  `ano/mês/dia`  , diferente do formato brasileiro, que é  `dia/mês/ano`  .  **Solução:**

Copiar

```sql
USE sakila;
SELECT COUNT(*) quantidade_de_pagamentos FROM payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';
```

4.  Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de  `3 a 6`  . Os resultados devem ser classificados em filmes com  `maior duração`  de empréstimo primeiro. Em caso de empate, ordene em  `ordem alfabética`  pelo título.  **Solução:**

Copiar

```sql
USE sakila;
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;
```

5.  Monte um relatório que exiba o título e classificação dos  `500`  primeiros filmes direcionados para as classificações indicativas  `G, PG e PG-13`  . Os resultados devem estar  `ordenados`  por título.  **Solução:**

Copiar

```sql
USE sakila;
SELECT title, rating FROM film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
```

### Encontrando e separando resultados que incluem datas (treinando consultas com datas)

#### Para Fixar

1.  Quantos pagamentos temos com a data de retorno  `2005-05-25`  ? Há múltiplas maneiras possíveis de encontrar a resposta.

-   Uma das formas de conseguir o resultado esperado está a seguir:  **Solução:**

Copiar

```sql
USE sakila;
SELECT COUNT(*) Pagamentos FROM payment
WHERE DATE(payment_date) = '2005-05-25';
```

2.  Quantos pagamentos foram feitos entre  `01/07/2005`  e  `22/08/2005`  ?  **Solução:**

Copiar

```sql
USE sakila;
SELECT COUNT(*) Pagamentos FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';
```

3.  Usando a tabela  `rental`  , extraia data, ano, mês, dia, hora, minuto e segundo do registro com  `rental_id`  = 10330. Utilize a coluna  `rental_date`  para extrair as informações.  **Solução:**

Copiar

```sql
USE sakila;
SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano ,
MONTH(rental_date) AS Mes,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minuto,
SECOND(rental_date) AS Segundo
FROM rental
WHERE rental_id = 10330;
```

4.  Monte uma  _query_ que retorne todos os dados do pagamento feito no dia  `28/07/2005`  a partir das  `22 horas`  .  **Solução:**

Copiar

```sql
USE sakila;
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;
```

----------

## Exercícios

### Agora a prática

Para realizar as tarefas do 1 ao 7, restaure o seguinte banco de dados:

Copiar

```sql
DROP SCHEMA IF EXISTS PecasFornecedores;
CREATE SCHEMA PecasFornecedores;
USE PecasFornecedores;

CREATE TABLE Pecas (
  code INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Fornecedores (
  code VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Fornecimentos (
  code INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  peca INTEGER,
  FOREIGN KEY (peca) REFERENCES Pecas (code),
  Fornecedor VARCHAR(40),
  FOREIGN KEY (fornecedor) REFERENCES Fornecedores (code),
  Preco INTEGER NOT NULL
);

CREATE TABLE Vendas (
  code INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fornecimento INTEGER,
  quantity INTEGER,
  order_date DATETIME,
  FOREIGN KEY (fornecimento) REFERENCES Fornecimentos (code)
);

INSERT INTO Fornecedores(code, name)
  VALUES ('ROB', 'Robauto SA'),
    ('CNF', 'Confiauto LTDA'),
    ('MAP', 'Malok Auto Peças'),
    ('INF', 'Infinity Peças LTDA');

INSERT INTO Pecas(code, name)
  VALUES (1, 'Rebimboca'),
    (2, 'Parafuseta'),
    (3, 'Grampola'),
    (4, 'Grapeta');

INSERT INTO Fornecimentos(peca, fornecedor, preco)
  VALUES (1, 'CNF', 10),
    (1, 'ROB', 15),
    (2, 'CNF', 20),
    (2, 'ROB', 25),
    (2, 'MAP', 14),
    (3, 'INF', 50),
    (3, 'MAP', 45),
    (4, 'CNF', 5),
    (4, 'ROB', 7);

INSERT INTO Vendas(fornecimento, quantity, order_date)
  VALUES (1, 3, '2017-05-22 11:28:36'),
    (2, 2, '2018-03-22 11:35:24'),
    (3, 8, '2018-11-16 15:51:36'),
    (3, 10, '2019-02-13 13:23:22'),
    (8, 5, '2019-06-11 12:22:48'),
    (6, 1, '2019-09-07 09:53:58'),
    (7, 3, '2020-01-05 08:39:33'),
    (9, 5, '2020-05-13 14:05:19');
```

Para restaurar o banco, copie o código acima no  _workbench_ do  `MySQL`  e execute o código por meio da opção  _"Query"_ do menu superior e depois selecionando  _"Execute (All or selection)"_ ou simplesmente clicando no  **ícone de raio** .

1.  Escreva uma  _query_ para exibir todas as peças que começam com  `GR`  .  **Solução:**

Copiar

```sql
USE PecasFornecedores;
SELECT * FROM Pecas
WHERE name LIKE 'GR%';
```

2.  Escreva uma  _query_ para exibir todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.  **Solução:**

Copiar

```sql
USE PecasFornecedores;
SELECT * FROM Fornecimentos
WHERE peca = 2 ORDER BY fornecedor;
```

3.  Escreva uma  _query_ para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra  `N`  .  **Solução:**

Copiar

```sql
USE PecasFornecedores;
SELECT peca, preco, fornecedor FROM Fornecimentos
WHERE fornecedor LIKE '%N%';
```

4.  Escreva uma  _query_ para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.  **Solução:**

Copiar

```sql
USE PecasFornecedores;
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA' ORDER BY name DESC;
```

5.  Escreva uma  _query_ para exibir o número de empresas (fornecedores) que contém a letra  `F`  no código.  **Solução:**

Copiar

```sql
USE PecasFornecedores;
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';
```

6.  Escreva uma  _query_ para exibir os fornecimentos onde as peças custam mais de  `R$15,00`  e menos de  `$40,00`  . Ordene os resultados por ordem crescente.  **Solução:**

Copiar

```sql
USE PecasFornecedores;
SELECT * FROM Fornecimentos
WHERE preco BETWEEN 15 AND 40 ORDER BY preco;
```

7.  Escreva uma  _query_ para exibir o número de vendas feitas entre o dia  `15/04/2018`  e o dia  `30/07/2019`  .  **Solução:**

Copiar

```sql
USE PecasFornecedores;
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
```

----------

### Bônus

1.  Escreva uma  _query_ para exibir todas as informações de todos os cientistas que possuam a letra  `e`  em seu nome.  **Solução:**

Copiar

```sql
USE Scientists;
SELECT * FROM Scientists
WHERE Name LIKE "%e%";
```

2.  Escreva uma  _query_ para exibir o nome de todos os projetos cujo o código inicie com a letra  `A`  . Ordene o resultado em ordem alfabética.  **Solução:**

Copiar

```sql
USE Scientists;
SELECT Name FROM Projects
WHERE Code LIKE "A%" ORDER BY Name;
```

3.  Escreva uma  _query_ para exibir o código e nome de todos os projetos que possuam em seu código o número  `3`  . Ordene o resultado em ordem alfabética.  **Solução:**

Copiar

```sql
USE Scientists;
SELECT Code, Name FROM Projects
WHERE Code LIKE "%3%" ORDER BY Name;
```

4.  Escreva uma  _query_ para exibir todos os cientistas (valores numéricos) cujos projetos sejam  `AeH3`  ,  `Ast3`  ou  `Che1`  .  **Solução:**

Copiar

```sql
USE Scientists;
SELECT Scientist FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');
```

5.  Escreva uma  _query_ para exibir todas as informações de todos os projetos com mais de 500 horas.  **Solução:**

Copiar

```sql
USE Scientists;
SELECT * FROM Projects
WHERE Hours > 500;
```

6.  Escreva uma  _query_ para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.  **Solução:**

Copiar

```sql
USE Scientists;
SELECT * FROM Projects WHERE Hours > 250 AND Hours < 800;
-- ou
SELECT * FROM Projects WHERE Hours BETWEEN 250 AND 800;
```

7.  Escreva uma  _query_ para exibir o nome e o código de todos os projetos cujo nome  **NÃO** inicie com a letre  `A`  .  **Solução:**

Copiar

```sql
USE Scientists;
SELECT Code, Name FROM Projects
WHERE Name NOT LIKE 'A%';
```

8.  Escreva uma  _query_ para exibir o nome de todos os projetos cujo código contenha a letra  `H`  .  **Solução:**

Copiar

```sql
USE Scientists;
SELECT Name FROM Projects
WHERE Code LIKE '%H%';
```