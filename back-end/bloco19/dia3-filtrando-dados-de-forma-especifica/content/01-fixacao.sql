USE sakila;

-- 01

SELECT
	*
FROM
	customer
WHERE
	email = 'LEONARD.SCHOFIELD@sakilacustomer.org'
;

-- 02

SELECT
	CONCAT(first_name, ' ', last_name) AS `nome`
FROM
	customer
WHERE
	active IS NOT TRUE AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name, last_name
;

-- 03

SELECT
	title, description, release_year, replacement_cost
FROM
	film
WHERE
	rating <> 'NC-17' AND replacement_cost >= 18
ORDER BY
	replacement_cost DESC, title
LIMIT 100
;

-- 04

SELECT
	COUNT(*)
FROM
	customer
WHERE
	active IS TRUE AND store_id = 1
;

-- 05

SELECT
	COUNT(*)
FROM
	customer
WHERE
	active IS NOT TRUE AND store_id = 1
;

-- 06

SELECT
	title
FROM
	film
WHERE
	rating = 'NC-17'
ORDER BY
	rental_rate, title
LIMIT 50
;