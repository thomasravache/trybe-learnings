USE Pixar;
SET SQL_SAFE_UPDATES = 0;

-- 08

SELECT * FROM BoxOffice;

UPDATE
	BoxOffice
SET
	rating = 9
WHERE
	domestic_sales > 400000000
;

-- 09

UPDATE
	BoxOffice
SET
	rating = 6
WHERE
	international_sales < 300000000 AND domestic_sales > 200000000
;

-- 10
SELECT * FROM Movies WHERE length_minutes < 100; -- IDs: 1 6 7 8
SELECT * FROM BoxOffice WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM
	BoxOffice
WHERE
	movie_id IN (1,6, 7, 8)
;

DELETE FROM
	Movies
WHERE
	length_minutes < 100
;