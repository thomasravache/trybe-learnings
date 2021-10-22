# Exercícios

## Exercício do Conteúdo

### 1. SELECT, o primeiro passo

1.  Monte uma  _query_ que exiba seu nome na tela;
2.  Monte uma  _query_ que exiba seu nome, sobrenome, cidade natal e idade na tela;
3.  Monte uma  _query_ que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o  `AS`  , que é chamado de  `alias`  na linguagem  **SQL** (  _alias_ é como um  **apelido** no português);
4.  Qual é o resultado de  `13 * 8`  ? Descubra usando apenas o  `SELECT`  ;
5.  Monte uma  _query_ que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

#### Fixação

1.  Escreva uma  _query_ que selecione todas as colunas da tabela  `city`  ;
2.  Escreva uma  _query_ que exiba apenas as colunas  `first_name`  e  `last_name`  da tabela  `customer`  ;
3.  Escreva uma  _query_ que exiba todas as colunas da tabela  `rental`  ;
4.  Escreva uma  _query_ que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela  `film`  ;
5.  Utilize o  `SELECT`  para explorar todas as tabelas do banco de dados.

### 2. Juntando duas ou mais colunas usando o CONCAT


1.  Na tabela  `sakila.film`  , monte uma  _query_ que exiba o  **título** e o  **ano de lançamento** dos filmes em uma coluna e dê a ela o nome  `Lançamento do Filme`  .
    
2.  Na tabela  `sakila.film`  , crie uma  _query_ que exiba o  **título** do filme e sua  **classificação indicativa** (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome  `Classificação`  . Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
    
3.  Na tabela  `sakila.address`  , monte uma  _query_ que exiba a  **rua** e o  **distrito** de cada registro em uma coluna apenas, e dê a essa coluna o nome  `Endereço`  .

### 3. Dados repetidos? Aqui Não! Como usar o DISTINCT

Perfeito! Então, depois de ter assistido ao vídeo sobre  `DISTINCT`  , dê uma olhada nesta tabela:

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/sampleTable1-1df75b03ae8e20c7da20d37904a634e6.png)

Tabela fictícia

Para criá-la no seu banco de dados, abra uma nova janela de  _query_ no  **MySQL Workbench** e execute o seguinte código:

Copiar

```sql
CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Alunos (
    `Nome` VARCHAR(7) CHARACTER SET utf8,
    `Idade` INT
);
INSERT INTO Escola.Alunos VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
```

Feito isso, você terá acesso à tabela  `Alunos`  do banco de dados  `Escola`  . Levando em conta a explicação que você acabou de ver, como você montaria uma  _query_ para encontrar os seguintes dados?

1.  Monte uma  _query_ para encontrar pares únicos de  **nomes** e  **idades** .
2.  Quantas linhas você encontraria na  _query_ anterior?
3.  Monte uma  _query_ para encontrar somente os  **nomes** únicos.
4.  Quantas linhas você encontraria na  _query_ anterior?
5.  Monte uma  _query_ para encontrar somente as  **idades** únicas.
6.  Quantas linhas você encontraria na  _query_ anterior?

### 4. Contando resultados com o COUNT


![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/sampleSelect1-f3fffe6ff17225ce4ffaa1a843e29405.png)

tabela staff

Essa é a tabela  `staff`  do banco de dados  `sakila`  . Como você poderia responder às seguintes questões?

1.  **Quantas senhas** temos cadastradas nessa tabela?
2.  **Quantas pessoas** temos no total trabalhando para nossa empresa?
3.  **Quantos emails** temos cadastrados nessa tabela?

### 5. LIMIT OFFSET - Pulando linhas desnecessárias


Agora, olhando o resultado a seguir, qual  _query_ eu teria que montar para trazer os 10 primeiros resultados, a partir de JOHNNY?

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/limit4-d2cddfe680162164a24131fee86ab759.png)

Tabela actor

Ótimo, tomara que tenha conseguido achar o resultado do último desafio. Você está quase lá! Vamos fechar este dia de aprendizado descobrindo como gerar resultados do tipo que todo chefe gosta de ter: "Tudo bem organizado", usando o  `ORDER BY`  .

### 6. Vamos montar o bolo com todos os ingredientes que vimos hoje


Para os exercícios a seguir, vamos usar a tabela  `sakila.film`

-   Escreva uma  _query_ que exiba  **todos os filmes** cadastrados no banco de dados.
-   Escreva uma  _query_ que exiba apenas o  **nome** dos filmes, seu  **ano de lançamento** e sua  **classificação** .
-   **Quantos filmes** temos cadastrados?

Para os exercícios a seguir, vamos usar a tabela  `sakila.actor`

-   Escreva uma  _query_ que exiba apenas os  **sobrenomes únicos** cadastrados.
    
-   **Quantos sobrenomes únicos** temos na tabela?
    
-   Ordene os valores na tabela  **em ordem crescente** de sobrenomes e  **em ordem decrescente** de nome.
    
-   Vá até a tabela  `language`  do  `sakila`  e crie uma pesquisa que mostre os  **5 idiomas cadastrados** , mas  **não mostre** o idioma  `english`  .
    
-   Vá até a tabela  `film`  e selecione todos os dados da tabela. Pronto, fez isso?
    
-   Agora vamos tentar fazer o seguinte: Crie uma  _query_ para encontrar os  **20 primeiros filmes** , incluindo o  **título** , o  **ano de lançamento** , a  **duração** , a  **classificação indicativa** e o  **custo de substituição** . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

## Exercícios

### Agora, a prática

**Exercício 1** : Faça as tarefas de 1 a 15.

> Para realizar os exercícios do 1 ao 15, restaure o banco de dados seguinte.

Copiar

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

> Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos  [deste link](https://creativecommons.org/licenses/by-sa/3.0/) .

1.  Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
2.  Escreva uma query para exibir três números em três colunas.
3.  Escreva uma query para exibir a soma dos números 10 e 15.
4.  Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
5.  Escreva uma query para exibir todas as informações de todos os cientistas.
6.  Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
7.  Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
8.  Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
9.  Escreva uma query que exiba a string "O projeto  `Name`  precisou de  `Hours`  horas para ser concluído." para cada projeto.
10.  Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
11.  Escreva uma query para exibir o código de todos os projetos da tabela  `AssignedTo`  sem que haja repetições.
12.  Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
13.  Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
14.  Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
15.  Escreva uma query que exiba a string "Existem  `Number`  cientistas na tabela Scientists.", em que  `Number`  se refira a quantidade de cientistas.

### Bônus


**Exercício 1** : Faça as tarefas de 1 a 15.

> Para realizar os exercícios do 1 ao 15, restaure o banco de dados seguinte.

Copiar

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  Code CHAR(4),
  Name CHAR(50) NOT NULL,
  Hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  Scientist INT NOT NULL,
  Project CHAR(4) NOT NULL,
  PRIMARY KEY (Scientist, Project),
  FOREIGN KEY (Scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (Project) REFERENCES Projects (Code)
);

INSERT INTO Scientists(SSN,Name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (Code, Name, Hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (Scientist, Project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');

```

> Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste link .

1.  Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
2.  Escreva uma query para exibir três números em três colunas.
3.  Escreva uma query para exibir a soma dos números 10 e 15.
4.  Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
5.  Escreva uma query para exibir todas as informações de todos os cientistas.
6.  Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
7.  Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
8.  Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
9.  Escreva uma query que exiba a string "O projeto `Name` precisou de `Hours` horas para ser concluído." para cada projeto.
10.  Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
11.  Escreva uma query para exibir o código de todos os projetos da tabela `AssignedTo` sem que haja repetições.
12.  Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
13.  Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
14.  Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
15.  Escreva uma query que exiba a string "Existem `Number` cientistas na tabela Scientists.", em que `Number` se refira a quantidade de cientistas.