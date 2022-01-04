USE sakila;
-- 01 ----------------
(
  SELECT
    first_name,
    last_name
  FROM
    actor
)
UNION ALL
  (
    SELECT
      first_name,
      last_name
    FROM
      staff
  );
-- 02 ----------------
  (
    SELECT
      first_name,
      last_name
    FROM
      customer
    WHERE
      first_name LIKE '%tracy%'
  )
UNION
  (
    SELECT
      first_name,
      last_name
    FROM
      actor
    WHERE
      first_name LIKE '%je%'
  );
-- 03 --------------
  (
    SELECT
      first_name,
      last_name
    FROM
      actor
    ORDER BY
      first_name DESC
    LIMIT
      5
  )
UNION
  (
    SELECT
      first_name,
      last_name
    FROM
      staff
    LIMIT
      1
  )
UNION
  (
    SELECT
      first_name,
      last_name
    FROM
      customer
    LIMIT
      5 OFFSET 14
  )
ORDER BY
  first_name;
-- 04 -------------
  (
    SELECT
      first_name,
      last_name
    FROM
      customer
  )
UNION ALL
  (
    SELECT
      first_name,
      last_name
    FROM
      actor
  )
ORDER BY
  first_name,
  last_name
LIMIT
  15 OFFSET 45;