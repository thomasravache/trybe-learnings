USE Scientists;

-- 01

SELECT 'This is SQL Exercise, Pactice and Solution' AS `SQL Exercises`;

-- 02

SELECT 1, 2, 3;

-- 03

SELECT 10 + 15;

-- 04

SELECT 10 * 5;

-- 05

SELECT * FROM Scientists;

-- 06

SELECT
  Name AS `Nome do Projeto`,
  Hours AS `Tempo de Trabalho`
FROM
  Projects
;

-- 07

SELECT
	Name
FROM
	Scientists
ORDER BY
	Name
;

-- 08

SELECT
	Name
FROM
	Projects
ORDER BY
	Name DESC
;

-- 09

SELECT
	CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.')
FROM
	Projects
;

-- 10

SELECT
	Name, Hours
FROM
	Projects
ORDER BY
	Hours DESC
LIMIT 3
;

-- 11

SELECT
	DISTINCT Project
FROM
	AssignedTo
;

-- 12

SELECT
	Name
FROM
	Projects
ORDER BY
	Hours DESC
LIMIT 1
;

-- 13

SELECT
	Name
FROM
	Projects
ORDER BY
	Hours ASC
LIMIT 1 OFFSET 1
;

-- 14

SELECT
	*
FROM
	Projects
ORDER BY
	Hours ASC
LIMIT 5
;

-- 15

SELECT
	CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.')
FROM
	Scientists
;
