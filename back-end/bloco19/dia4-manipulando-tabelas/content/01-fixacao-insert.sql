USE sakila;

-- 01

INSERT INTO
	staff (first_name, last_name, address_id, store_id, username)
VALUES
	('Thomas', 'Ravache', 1, 1, 'thtomt')
;

-- 02

INSERT INTO
	staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`)
VALUES
	('Gabriele', 'Oliveira', 2, 'gabriele@gmail.com', 2, 0, 'gepril', '123'),
    ('Josivaldo', 'Pereira', 3, null, 2, 1, 'josi', '134');

-- 03

INSERT INTO
	actor (first_name, last_name)
SELECT
	first_name, last_name
FROM
	customer
LIMIT 5
;

-- 04

INSERT INTO
	category (name)
VALUES
	('teste1'),
    ('teste2');
	
-- 05

INSERT INTO
	store (manager_staff_id, address_id)
VALUES
	(3, 3);