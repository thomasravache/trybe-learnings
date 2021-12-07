-- 01

SELECT 'This is SQL Exercise, Practice and Solution';

-- 02

SELECT 1, 2, 3;

-- 03

SELECT 10+15;

-- 04

SELECT 2*5;

-- 05

SELECT * FROM Scientists.Scientists;

-- 06

DESCRIBE Scientists.Projects;
SELECT `Name` AS `Nome do Projeto`, `Hours` AS `Tempo de Trabalho` FROM Scientists.Projects;

-- 07

SELECT `Name` FROM Scientists.Scientists ORDER BY `Name`;

-- 08

SELECT `Name` FROM Scientists.Projects ORDER BY `Name` DESC;

-- 09

SELECT CONCAT('O projeto ', `Name`, ' precisou de ', `Hours`, ' horas para ser concluído.') FROM Scientists.Projects;

-- 10

SELECT `Name`, `Hours` FROM Scientists.Projects ORDER BY `Hours` DESC LIMIT 3;

-- 11

SELECT DISTINCT Project FROM Scientists.AssignedTo;

-- 12

SELECT `Name` FROM Scientists.Projects ORDER BY `Hours` DESC LIMIT 1;

-- 13

SELECT `Name` FROM Scientists.Projects ORDER BY `Hours` LIMIT 1 OFFSET 1;

-- 14

SELECT * FROM Scientists.Projects ORDER BY `Hours` LIMIT 5;

-- 15

SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists.') FROM Scientists.Scientists;
