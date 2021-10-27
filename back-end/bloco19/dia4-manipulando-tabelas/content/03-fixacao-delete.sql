USE sakila;

-- 01

DELETE FROM
	film_actor
WHERE
	actor_id = 12
;

DELETE FROM
	actor
WHERE
	first_name = 'KARL'
;

-- 02
    
DELETE FROM
	film_actor
WHERE
	actor_id IN (8, 103, 181)
;
    
DELETE FROM
	actor
WHERE
	first_name = 'MATTHEW'
;

-- 03

DELETE FROM
	film_text
WHERE
	description LIKE '%saga%'
;

-- 04

TRUNCATE film_actor;
TRUNCATE film_category;


-- 06

DROP DATABASE sakila;
