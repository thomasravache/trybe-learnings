-- 01 --------------
USE betrybe_automoveis;

DELIMITER $$

CREATE TRIGGER trigger_insert_carros
  BEFORE INSERT ON carros
  FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(), NEW.acao = 'INSERÇÃO', NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;
-- 02 --------------
USE betrybe_automoveis;

DELIMITER $$

CREATE TRIGGER trigger_
  BEFORE UPDATE ON carros
  FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(), NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;
-- 03 -----------
USE betrybe_automoveis;

DELIMITER $$

CREATE TRIGGER trigger__
  BEFORE DELETE ON carros
  FOR EACH ROW
BEGIN
  INSERT INTO
    log_operacoes (tipo_operacao, data_ocorrido)
  VALUES
    ('EXCLUSÃO', NOW());
END $$
DELIMITER ;
