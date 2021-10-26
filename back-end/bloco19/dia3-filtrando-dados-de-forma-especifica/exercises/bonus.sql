USE Scientists;

-- 01

SELECT
	*
FROM
	Scientists
WHERE
	Name LIKE '%e%'
;

-- 02

SELECT
	Name
FROM
	Projects
WHERE
	Code LIKE 'A%'
ORDER BY
	Name
;

-- 03

SELECT
	Code, Name
FROM
	Projects
WHERE
	Code LIKE '%3%'
ORDER BY
	Code, Name
;

-- 04

SELECT
	Scientist
FROM
	AssignedTo
WHERE
	Project IN('AeH3', 'Ast3', 'Che1')
;

-- 05

SELECT
	*
FROM
	Projects
WHERE
	Hours > 500
;

-- 06

SELECT
	*
FROM
	Projects
WHERE
	Hours BETWEEN 251 AND 799
ORDER BY
	Hours
;

-- 07

SELECT
	Name, Code
FROM
	Projects
WHERE
	Name NOT LIKE 'A%'
;

-- 08

SELECT
	Name, Code
FROM
	Projects
WHERE
	Code LIKE '%H%'
;
