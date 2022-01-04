SELECT
  `name`, `location`
FROM
  Theater as t
WHERE NOT EXISTS (
  SELECT * FROM Movies
  WHERE t.id = theater_id
);
