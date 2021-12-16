USE Pixar;
-- 01 -------------
SELECT
  m.title,
  b.domestic_sales,
  b.international_sales
FROM
  Movies AS m
  INNER JOIN BoxOffice AS b ON b.movie_id = m.id;
-- 02 --------------
SELECT
  m.title,
  (b.international_sales + b.domestic_sales)
FROM
  Movies AS m
  INNER JOIN BoxOffice AS b ON b.movie_id = m.id
WHERE
  b.international_sales > b.domestic_sales;
-- 03 -------------
SELECT
  m.title,
  b.rating
FROM
  Movies AS m
  INNER JOIN BoxOffice AS b ON b.movie_id = m.id
ORDER BY
  b.rating DESC;
-- 04 ---------------
SELECT
  t.name,
  t.location,
  m.title,
  m.director,
  m.year,
  m.length_minutes
FROM
  Theater AS t
  LEFT JOIN Movies AS m ON t.id = m.theater_id
ORDER BY
  t.name;
-- 05 ----------------
SELECT
  t.name,
  t.location,
  m.title,
  m.director,
  m.year,
  m.length_minutes
FROM
  Theater AS t
  RIGHT JOIN Movies AS m ON t.id = m.theater_id
ORDER BY
  t.name;
