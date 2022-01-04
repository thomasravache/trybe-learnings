USE Pixar;
-- 06 -------------
SELECT
  m.title,
  m.director,
  m.year,
  m.length_minutes,
  m.theater_id
FROM
  Movies AS m
  INNER JOIN BoxOffice AS b ON b.movie_id = m.id
WHERE
  b.rating > 8 AND m.theater_id IS NOT NULL;
