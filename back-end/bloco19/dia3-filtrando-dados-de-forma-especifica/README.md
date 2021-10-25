# Exercícios

## Exercícios do Conteúdo

### 1. Alavancando o poder dos principais operadores booleanos e relacionais

**A tabela a seguir é um guia de como a classificação indicativa é usada no banco de dados  `sakila`  . Consulte-a ao fazer os desafios propostos.**

**G** = permitido para todos

**PG** = permitido para crianças menores de 13 anos

**PG-13** = permitido para pessoas com mais de 13 anos

**R** = permitido para pessoas com mais de 17 anos

**NC-17** = permitido apenas para adultos

Entre no banco de dados  `sakila`  e siga as instruções (e guarde as  _queries_ para conferir posteriormente):

1.  Precisamos identificar os dados do cliente com o e-mail  `LEONARD.SCHOFIELD@sakilacustomer.org`  . As informações podem ser encontradas na tabela  `customer`
    
2.  Precisamos de um relatório dos nomes dos clientes, em  `ordem alfabética`  , que não estão mais ativos no nosso sistema e pertencem à loja com o  **id = 2** , e não inclua o cliente  `KENNETH`  no resultado. As informações podem ser encontradas na tabela  `customer`
    
3.  O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição (  _replacement_cost_ ), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em  `ordem alfabética`  pelo título. As informações podem ser encontradas na tabela  `film`
    
4.  Quantos clientes estão  `ativos`  e na loja  `1`  ? As informações podem ser encontradas na tabela  `customer`
    
5.  Mostre todos os detalhes dos clientes que  `não`  estão ativos na loja  `1`  . As informações podem ser encontradas na tabela  `customer`
    
6.  Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a  `menor`  taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em  `ordem alfabética`  pelo título. As informações podem ser encontradas na tabela  `film`

### 2. Como criar pesquisas mais dinâmicas e maleáveis usando o LIKE


Para consolidar esse conhecimento, brinque com os resultados que serão encontrados usando os comandos acima e tente criar suas próprias condições. Depois de ter praticado um pouco com eles, tente encontrar as seguintes informações:

1.  Mostre todos os detalhes dos filmes que contêm a palavra  `ace`  no nome.
    
2.  Mostre todos os detalhes dos filmes cujas descrições finalizam com  `china`  .
    
3.  Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra  `girl`  e o título finaliza com a palavra  `lord`  .
    
4.  Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra  `gon`  .
    
5.  Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra  `gon`  e a descrição contém a palavra  `Documentary`  .
    
6.  Mostre os dois filmes cujos títulos ou finalizam com  `academy`  ou iniciam com  `mosquito`  .
    
7.  Mostre os seis filmes que contêm as palavras  `monkey`  e  `sumo`  em suas descrições.
    

A seguir, vamos entender como trazer resultados que englobam uma faixa de valores usando os operadores  `IN`  e  `BETWEEN`  .