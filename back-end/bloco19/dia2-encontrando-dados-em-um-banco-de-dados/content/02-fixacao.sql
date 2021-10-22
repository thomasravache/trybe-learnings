USE sakila;

-- 01

SELECT CONCAT(title, ' - ', release_year) AS 'Lançamento do Filme' FROM film;

-- 02

SELECT CONCAT(title, ' - ', rating) AS Classificação FROM film;

-- 03

SELECT CONCAT(address, ' - ', district) AS Endereço FROM address;