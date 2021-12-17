-- 01 -------
USE sakila;
DELIMITER $ $ CREATE FUNCTION QuantidadeDePagamentosDoCliente(id INT) RETURNS INT READS SQL DATA BEGIN DECLARE qtd INT;
SELECT
  COUNT(*)
FROM
  payment
WHERE
  customer_id = id INTO qtd;
RETURN qtd;
END $ $ DELIMITER;
-- 02 ---------
USE sakila;
DELIMITER $ $ CREATE FUNCTION BuscarNomeDoFilmeNoInventario(id INT) RETURNS VARCHAR(128) READS SQL DATA BEGIN DECLARE nome_do_filme VARCHAR(128);
SELECT
  f.title
FROM
  film AS f
  INNER JOIN inventory AS i ON i.film_id = f.film_id
WHERE
  i.inventory_id = id INTO nome_do_filme;
RETURN nome_do_filme;
END $ $ DELIMITER;
-- 03 ------------
USE sakila;
DELIMITER $ $ CREATE FUNCTION BuscarQuantidadeDeFilmesDaCategoria(categoria VARCHAR(25)) RETURNS INT READS SQL DATA BEGIN DECLARE qtdFilmes INT;
SELECT
  COUNT(*) AS `Quantidade total de filmes`
FROM
  film_category AS fc
  INNER JOIN category AS c ON fc.category_id = c.category_id
WHERE
  c.name = categoria INTO qtdFilmes;
RETURN qtdFilmes;
END $ $ DELIMITER;
