USE sakila;

-- 01

SELECT
	*
FROM
	film
WHERE
	title LIKE '%ace%'
;

-- 02

SELECT
	*
FROM
	film
WHERE
	description LIKE '%china'
;

-- 03

SELECT
	*
FROM
	film
WHERE
	description LIKE '%girl%' AND title LIKE '%lord'
;

-- 04

SELECT
	*
FROM
	film
WHERE
	title LIKE '___gon%'
;

-- 05

SELECT
	*
FROM
	film
WHERE
	title LIKE '___gon%' AND description LIKE '%Documentary%'
;

-- 06

SELECT
	*
FROM
	film
WHERE
	title LIKE 'mosquito%' OR title LIKE '%academy'
;

-- 07

SELECT
	*
FROM
	film
WHERE
	description LIKE '%sumo%' AND description LIKE '%monkey%'
;