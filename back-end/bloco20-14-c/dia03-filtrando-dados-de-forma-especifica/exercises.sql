USE PecasFornecedores;

-- 01

SELECT * FROM Pecas WHERE name LIKE 'GR%';

-- 02

SELECT * FROM Fornecimentos WHERE peca = 2 ORDER BY Fornecedor;

-- 03

SELECT peca, Preco, Fornecedor FROM Fornecimentos WHERE Fornecedor LIKE '%N%';

-- 04

SELECT * FROM Fornecedores WHERE name LIKE '%LTDA' ORDER BY name DESC;

-- 05

SELECT COUNT(*) FROM Fornecedores WHERE code LIKE '%F%';

-- 06

SELECT * FROM Fornecimentos WHERE Preco BETWEEN 15.01 AND 39.99 ORDER BY Preco;

-- 07

SELECT COUNT(*) FROM Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
