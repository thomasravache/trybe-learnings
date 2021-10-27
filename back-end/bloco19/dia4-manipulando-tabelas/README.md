# Exercícios

## Exercícios do Conteúdo

### Tabela vazia ? Vamos resolver isso ae! INSERT na prática


Um grande filósofo uma vez disse:  **_"Practice Makes Perfect"_** . Não sabemos quem ele é, mas ele tem razão! Vamos praticar!

1.  Insira um novo funcionário na tabela  `sakila.staff`  .
    
    Para saber quais campos são obrigatórios, clique com o botão direito na tabela  `sakila.staff`  e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!
    
2.  Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma  _query_ .
    
3.  Selecione os cinco primeiros nomes e sobrenomes da tabela  `sakila.customer`  e cadastre essas pessoas como atores na tabela  `sakila.actor`  .
    
4.  Cadastre três categorias de uma vez só na tabela  `sakila.category`  .
    
5.  Cadastre uma nova loja na tabela  `sakila.store`  .

### Digitou algo errado? De boa, vamos dar um UPDATE


##### Dê um  `UPDATE`  em seus conhecimentos com estes desafios

Como o banco pode ser deletado e recriado infinitamente, vamos desabilitar o  `--safe-updates`  nos exercícios. Além disso, esse modo pode ser habilitado novamente quando necessário. Rode o seguinte comando em uma janela de  _query_ dentro do MySQL Workbench  **sempre** que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos  `UPDATE`  ou  `DELETE`  :

Copiar

```sql
SET SQL_SAFE_UPDATES = 0;
```

1.  Atualize o primeiro nome de todas as pessoas da tabela  `sakila.actor`  que possuem o primeiro nome "JULIA" para "JULES".
    
2.  Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
    
3.  Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações  **"G"** ,  **"PG"** ou  **"PG-13"** e um custo de substituição maior que $20.
    
4.  Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

### Como assim, alguém te cadastrou sem você deixar ? Vamos dar um DELETE nisso!

#### Vamos praticar o  `DELETE`

1.  Exclua do banco de dados o ator com o nome de "KARL".
    
2.  Exclua do banco de dados os atores com o nome de "MATTHEW".
    
3.  Exclua da tabela  `film_text`  todos os registros que possuem a palavra "saga" em suas descrições.
    
4.  Apague da maneira mais performática possível todos os registros das tabelas  `film_actor`  e  `film_category`  .
    
5.  Inspecione todas as tabelas do banco de dados  `sakila`  e analise quais restrições  `ON DELETE`  foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
    
6.  Exclua o banco de dados e o recrie (use as instruções no início desta aula).