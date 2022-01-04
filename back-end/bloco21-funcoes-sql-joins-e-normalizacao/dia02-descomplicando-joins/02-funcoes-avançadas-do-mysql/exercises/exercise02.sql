-- trigger 01
USE BeeMovies;

DELIMITER $$
CREATE TRIGGER trigger_atualiza_data_lancamento_movies
  BEFORE INSERT ON movies
  FOR EACH ROW
BEGIN
  SET NEW.release_year = YEAR(NOW());
END $$

-- trigger 02

CREATE TRIGGER trigger_guarda_log
  AFTER INSERT ON movies
  FOR EACH ROW
BEGIN
  INSERT INTO movies_logs (movie_id, executed_action, log_date)
  VALUES (NEW.movie_id, 'INSERÇÃO', NOW());
END $$
DELIMITER ;

-- INSERT INTO 
--   movies (ticket_price, ticket_price_estimation)
-- VALUES
--   (1, 2);

-- SELECT * FROM movies;
