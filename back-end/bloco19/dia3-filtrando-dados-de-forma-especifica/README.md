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
    

### 3. Englobando uma faixa de resultados com IN e BETWEEN


-   Como você faria, então, para encontrar, usando o  `IN`  , todos os detalhes sobre o aluguel dos clientes com os seguintes ids: 269, 239, 126, 399, 142? As informações podem ser encontradas na tabela  `payment`  .
-   Como encontraria todas as informações sobre os endereços que estão registrados nos distritos de QLD, Nagasaki, California, Attika, Mandalay, Nantou e Texas? As informações podem ser encontradas na tabela  `address`  .

#### Para Fixar

1.  Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes:  `hicks, crawford, henry, boyd, mason, morales e kennedy`  , ordenados por nome em ordem alfabética.
    
2.  Mostre o e-mail dos clientes com os  `address_id 172, 173, 174, 175 e 176`  , ordenados em ordem alfabética.
    
3.  Descubra quantos pagamentos foram feitos entre  `01/05/2005`  e  `01/08/2005`  . Lembre-se de que, no banco de dados, as datas estão armazenadas no formato  `ano/mês/dia`  , diferente do formato brasileiro, que é  `dia/mês/ano`  .
    
4.  Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de  `3 a 6`  . Os resultados devem ser classificados em filmes com  `maior duração`  de empréstimo primeiro. Em caso de empate, ordene em  `ordem alfabética`  pelo título.
    
5.  Monte um relatório que exiba o título e classificação dos  `500`  primeiros filmes direcionados para as classificações indicativas  `G, PG e PG-13`  . Os resultados devem estar  `ordenados`  por título.
    

**P.S.** As classificações podem ser verificadas acima, na seção "Alavancando o poder dos principais comparadores lógicos".

### 4. Encontrando e separando resultados que incluem datas


Você já tem as ferramentas em mãos, então quero ver os dedos se mexendo.  **Let's GO!!!**

![](https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif)

Aquele momento quando você entra no fluxo

1.  Quantos pagamentos temos com a data de retorno  `2005-05-25`  ? Há múltiplas maneiras possíveis de encontrar a resposta.
    
2.  Quantos pagamentos foram feitos entre  `01/07/2005`  e  `22/08/2005`  ?
    
3.  Usando a tabela  `rental`  , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com  `rental_id`  = 10330. Utilize a coluna  `rental_date`  para extrair as informações.
    
4.  Monte uma  _query_ que retorne todos os dados do pagamento feito no dia  `28/07/2005`  a partir das  `22 horas`  .
