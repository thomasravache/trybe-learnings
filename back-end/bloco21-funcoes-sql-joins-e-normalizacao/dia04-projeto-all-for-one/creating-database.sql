DROP TABLE IF EXISTS boteco_seu_ze;
CREATE DATABASE IF NOT EXISTS boteco_seu_ze;

USE boteco_seu_ze;

CREATE TABLE formas_de_pagamento (
  forma_pagto_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  tipo_pagto VARCHAR(50) NOT NULL
);

CREATE TABLE clientes (
  cliente_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  endereco VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  cidade VARCHAR(10) NOT NULL
);

CREATE TABLE pedidos (
  pedido_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  data_pedido TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  preco_total DECIMAL(5,2) NOT NULL,
  forma_pagto_id INTEGER NOT NULL,
  cliente_id INTEGER NOT NULL,
  FOREIGN KEY (forma_pagto_id) REFERENCES formas_de_pagamento (forma_pagto_id),
  FOREIGN KEY (cliente_id) REFERENCES clientes (cliente_id)
);

CREATE TABLE produtos (
  produto_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  preco_unitario DECIMAL(5,2) NOT NULL
);

CREATE TABLE produtos_pedidos (
  produto_id INTEGER NOT NULL,
  pedido_id INTEGER NOT NULL,
  PRIMARY KEY (produto_id, pedido_id),
  FOREIGN KEY (produto_id) REFERENCES produtos (produto_id),
  FOREIGN KEY (pedido_id) REFERENCES pedidos (pedido_id)
);

INSERT INTO
  produtos (nome, preco_unitario)
VALUES 
  ('Coxinha', 5.00),
  ('Coca lata', 5.00),
  ('Empada', 5.00),
  ('Suco 300ml', 3.00),
  ('Doce de leite', 10.00),
  ('Pão de queijo', 10.00),
  ('Café', 14.00);

INSERT INTO
  clientes (nome, endereco, bairro, estado, cidade)
VALUES
  ('Batman', 'Av. Paulista', 'Jardins', 'SP', 'SP'),
  ('Superman', 'Av. Getúlio Vargas 100', 'Funcionários', 'BH', 'MG'),
  ('Mulher-Maravilha', 'Av. Brasil nº 124', 'Centro', 'BH', 'MG'),
  ('Flash', 'Av. Nossa Senhora de Fátima', 'Bairro de Fátima', 'THE', 'PI');

INSERT INTO
  formas_de_pagamento (tipo_pagto)
VALUES
  ('Débito'),
  ('Crédito'),
  ('VR'),
  ('Dinheiro');

INSERT INTO
  pedidos (preco_total, forma_pagto_id, cliente_id)
VALUES
  (10, 1, 1),
  (8, 2, 2),
  (25, 1, 3),
  (24, 3, 2),
  (7, 4, 4);

INSERT INTO
  produtos_pedidos (pedido_id, produto_id, quantidade)
VALUES
  (1, 1, 1),
  (1, 2, 1),
  (2, 3, 1),
  (2, 4, 1),
  (3, 1, 3),
  (3, 5, 1),
  (4, 6, 4),
  (4, 7, 2),
  (5, 1, 1),
  (5, 7, 1);

SELECT * FROM produtos_pedidos;

SELECT
  ped.pedido_id,
  prod.nome AS produto,
  prod.preco_unitario,
  cli.nome AS cliente,
  pagto.tipo_pagto AS forma_pagto
FROM
  pedidos AS ped
  INNER JOIN produtos_pedidos AS pp ON pp.pedido_id = ped.pedido_id
  INNER JOIN produtos AS prod ON pp.produto_id = prod.produto_id
  INNER JOIN clientes AS cli ON ped.cliente_id = cli.cliente_id
  INNER JOIN formas_de_pagamento AS pagto ON ped.forma_pagto_id = pagto.forma_pagto_id
ORDER BY
  ped.pedido_id;

SELECT
  c.nome,
  SUM(p.preco_total) AS preco,
  COUNT(*) AS qtd_pedidos
FROM
  clientes AS c
  INNER JOIN pedidos AS p ON c.cliente_id = p.cliente_id
GROUP BY
  c.nome
ORDER BY
  preco DESC;
