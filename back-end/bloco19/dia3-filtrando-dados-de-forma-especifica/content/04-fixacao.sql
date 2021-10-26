USE sakila;

-- 01

SELECT
	COUNT(payment_id)
FROM
	payment
WHERE
	DATE(payment_date) = '2005-05-25'
;

-- 02

SELECT
	COUNT(payment_id)
FROM
	payment
WHERE
	DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22'
;

-- 03

SELECT DATE(rental_date) FROM rental WHERE rental_id = 10330;
SELECT YEAR(rental_date) FROM rental WHERE rental_id = 10330;
SELECT MONTH(rental_date) FROM rental WHERE rental_id = 10330;
SELECT HOUR(rental_date) FROM rental WHERE rental_id = 10330;
SELECT MINUTE(rental_date) FROM rental WHERE rental_id = 10330;
SELECT SECOND(rental_date) FROM rental WHERE rental_id = 10330;

-- 04

SELECT
	*
FROM
	payment
WHERE
	DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22
ORDER BY
	TIME(payment_date)
;