
### Agora prática

Agora vamos abrir o  **Workbench** e fazer uma análise prática do banco de dados  `sakila`  , que já deve estar instalado, caso você tenha feito a instalação do  **MySql Workbench** de forma padrão. Caso o banco  `sakila`  não esteja disponível, volte até a seção  `Restaurando o banco de dados de prática sakila`  e siga as instruções listadas. Com esse banco disponível na sua instalação do  **Workbench** , sua missão agora é tentar finalizar os exercícios a seguir!

**Exercício 1** : Descubra como fazer uma pesquisa em qualquer tabela sem usar uma linha de código.  **Resposta:** Basta clicar com botão direito na tabela e clicar em "select rows - limit 200"  _O limite vai depender da configuração do workbench_ .

![enter image description here](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/sql/images/worbench-listar-dados-tabela-7f8283c7b4763aaa32912ff16c4a6d37.gif)

**Exercício 2** : Descubra como é possível criar uma tabela sem usar código SQL.  **Resposta:** Basta clicar em create table usando o botão direito.

**Exercício 3** : Feito isso, crie a seguinte tabela com as seguintes restrições:  **Resposta:** Basta usar o GUI do Mysql Workbench para fazer isso.

**Nome da tabela:** `Filme`

Colunas:

-   **_FilmeId_** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
-   **_Descricao_** - não permite nulos, tipo texto (varchar(100));
-   **_AnoLancamento_** - não permite nulos, tipo int;
-   **_Nota_** - permite nulos, tipo int;

**Exercício 4** : Analise a tabela  `city`  e encontre a tabela à qual a coluna  `country_id`  faz referência.  **Resposta:** Ela faz referência à tabela country.

**Exercício 5** : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela  `city`  faz com a tabela  `country`  ?  **Resposta:** N:1

**Exercício 6** : Qual tipo de relacionamento a tabela  `country`  faz com a tabela  `city`  ?  **Resposta:** 1:N

**Exercício 7** : Abra tabela por tabela do banco  `sakila`  e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.  **Resposta:**

1.  store -> staff
2.  language -> film
3.  film -> language