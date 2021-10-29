USE Pixar;

SET SQL_SAFE_UPDATES = 0;
SHOW TABLES;

-- 01
SELECT * FROM Movies;
SHOW COLUMNS FROM Movies;

INSERT INTO
	Movies (title, director, `year`, length_minutes)
VALUES
	('Monstros SA', 'Pete Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104)
;
	
-- 02

SELECT * FROM BoxOffice;

INSERT INTO
	BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES
	(9, 6.8, 450000000, 370000000)
;

-- 03

SELECT * FROM Movies;

UPDATE
	Movies
SET
	director = 'Andrew Staton'
WHERE
	title = 'Procurando Nemo'
;

-- 04

UPDATE
	Movies
SET
	title = 'Ratatouille', year = 2007
WHERE
	title = 'ratatui'
;

-- 05

INSERT INTO
	BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES
	(8, 8.5, 300000000, 250000000),
    (10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000)
;

-- 06

DELETE FROM
	BoxOffice
WHERE
	movie_id = 11
;

DELETE FROM
	Movies
WHERE
	title = 'WALL-E'
;

-- 07
SELECT * FROM Movies WHERE director = 'Andrew Staton'; -- 2 9
SELECT * FROM BoxOffice WHERE movie_id IN(2, 9);

DELETE FROM
	BoxOffice
WHERE
	movie_id IN(2, 9)
;

DELETE FROM
	Movies
WHERE
	director = 'Andrew Staton'
;

	