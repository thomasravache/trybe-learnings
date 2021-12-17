-- 01 -------------
USE sakila;
DELIMITER $ $ CREATE PROCEDURE ExibirDezAtoresMaisPopulares() BEGIN
SELECT
  actor_id,
  COUNT(film_id) AS `Quantidade de filmes`
FROM
  film_actor
GROUP BY
  actor_id
ORDER BY
  `Quantidade de filmes` DESC
LIMIT
  10;
END $ $ DELIMITER;
-- 02 ---------
USE sakila;
DELIMITER $ $ CREATE PROCEDURE BuscarFilmesComCategoria(IN categoryName VARCHAR(25)) BEGIN
SELECT
  f.film_id,
  f.title,
  c.category_id,
  c.name
FROM
  film_category AS fc
  INNER JOIN film AS f ON f.film_id = fc.film_id
  INNER JOIN category AS c ON c.category_id = fc.category_id
WHERE
  c.name = categoryName;
END $ $ DELIMITER;
-- 03 --------------
USE sakila;
DELIMITER $ $ CREATE PROCEDURE VerificarStatusClienteComEmail(
  IN customerEmail VARCHAR(50),
  OUT customerStatus VARCHAR(100)
) BEGIN
SELECT
  CONCAT(
    'O cliente possuidor do e-mail ',
    email,
    ' está ',
    IF(active IS TRUE, 'ATIVO', 'INATIVO')
  ) INTO customerStatus
FROM
  customer
WHERE
  email = customerEmail;
END $ $ DELIMITER;