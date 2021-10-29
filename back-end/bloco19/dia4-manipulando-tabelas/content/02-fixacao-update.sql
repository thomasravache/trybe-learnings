USE sakila;

-- 01

UPDATE
	actor
SET
	first_name = 'JULES'
WHERE
	first_name = 'JULIA'
;

-- 02
    
UPDATE
	category
SET
	name = 'Science Fiction'
WHERE
	name = 'Sci-Fi'
;

-- 03

UPDATE
	film
SET
	rental_rate = 25
WHERE
	length > 100 AND rating IN ('G', 'PG', 'PG-13') AND replacement_cost > 20
;

-- 04

UPDATE
	film
SET
	rental_rate = (
		CASE
			WHEN length <= 100 THEN 10
      WHEN length > 100 THEN 20
      ELSE rental_rate
		END
    );
    