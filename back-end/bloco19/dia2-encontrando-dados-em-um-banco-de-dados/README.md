# Exercícios

## Conteúdo

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

### Dados repetidos? Aqui Não! Como usar o DISTINCT

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

## Vamos praticar