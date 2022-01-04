-- 01 SUBQUERY
SELECT
  title
FROM
  Movies
WHERE
  id IN (
    SELECT movie_id
    FROM BoxOffice
    WHERE (domestic_sales + international_sales) >= 500000000
  ) AND length_minutes > 110;

-- 02 JOIN
SELECT
  m.title
FROM
  Movies AS m
  INNER JOIN BoxOffice AS b ON m.id = b.movie_id
WHERE
  (b.domestic_sales + b.international_sales) >= 500000000
  AND m.length_minutes > 110;
