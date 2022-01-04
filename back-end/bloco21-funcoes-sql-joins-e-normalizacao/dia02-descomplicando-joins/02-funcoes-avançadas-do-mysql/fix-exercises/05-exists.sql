USE hotel;
-- 01 --------
SELECT
  Id,
  Title
FROM
  Books AS b
WHERE
  NOT EXISTS(
    SELECT
      *
    FROM
      Books_Lent
    WHERE
      b.Id = book_id
  );
-- SELECT * FROM Books_Lent;
  -- 02 -------------
SELECT
  Id,
  Title
FROM
  Books AS b
WHERE
  EXISTS(
    SELECT
      *
    FROM
      Books_Lent
    WHERE
      b.Id = book_id
      AND b.Title LIKE '%lost%'
  );
-- 03 -------
SELECT
  `Name`
FROM
  Customers AS c
WHERE
  NOT EXISTS(
    SELECT
      *
    FROM
      CarSales
    WHERE
      c.CustomerID = CustomerID
  );
-- 04 --------
SELECT
  customer.Name AS nome_cliente,
  car.Name AS modelo_carro
FROM
  Customers AS customer
  INNER JOIN Cars AS car
WHERE
  EXISTS(
    SELECT
      *
    FROM
      CarSales
    WHERE
      customer.CustomerID = CustomerID AND car.Id = CarID
  );
