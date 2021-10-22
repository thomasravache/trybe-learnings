USE PiecesProviders;

-- 01

SELECT
	Piece, Price
FROM
	Provides
WHERE
	Provider = 'RBT'
;

-- 02

SELECT
	*
FROM
	Provides
ORDER BY
	Price DESC
LIMIT 5
;

-- 03

SELECT
	Provider, Price
FROM
	Provides
ORDER BY
	Price DESC
LIMIT 4
OFFSET 2
;

-- 04

SELECT
	*
FROM
	Provides
WHERE
	Provider = 'HAL'
ORDER BY
	Price DESC
;

-- 05

SELECT
	COUNT(Provider)
FROM
	Provides
WHERE
	Piece = 1
;
