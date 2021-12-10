USE hr;
-- 01
SELECT
  MAX(SALARY)
FROM
  employees;
-- 02
SELECT
  MAX(SALARY) - MIN(SALARY)
FROM
  employees;
-- 03
SELECT
  JOB_ID,
  AVG(SALARY) AS media_salarial
FROM
  employees
GROUP BY
  JOB_ID
ORDER BY
  media_salarial DESC;
-- 04
SELECT
  SUM(SALARY)
FROM
  employees;
-- 05
SELECT
  ROUND(MAX(SALARY), 2),
  ROUND(MIN(SALARY), 2),
  ROUND(SUM(SALARY), 2),
  ROUND(AVG(SALARY), 2)
FROM
  employees;
-- 06
SELECT
  JOB_ID,
  COUNT(*)
FROM
  employees
WHERE
  JOB_ID = 'IT_PROG';
-- 07
SELECT
  JOB_ID,
  SUM(SALARY)
FROM
  employees
GROUP BY
  JOB_ID;
-- 08
SELECT
  JOB_ID,
  SUM(SALARY)
FROM
  employees
GROUP BY
  JOB_ID
HAVING
  JOB_ID = 'IT_PROG';
-- 09
SELECT
  JOB_ID,
  AVG(SALARY) AS media_salarial
FROM
  employees
GROUP BY
  JOB_ID
HAVING
  JOB_ID <> 'IT_PROG'
ORDER BY
  media_salarial DESC;
-- OU:
SELECT
  job_id,
  AVG(salary) 'average_salary'
FROM
  employees
WHERE
  job_id <> 'IT_PROG'
GROUP BY
  job_id
ORDER BY
  `average_salary` DESC;
-- 10
SELECT
  DEPARTMENT_ID,
  AVG(SALARY),
  COUNT(*) AS employee_quantity
FROM
  employees
GROUP BY
  DEPARTMENT_ID
HAVING
  employee_quantity > 10;
-- 11
UPDATE
  employees
SET
  PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE
  PHONE_NUMBER LIKE '515%';
-- 12
SELECT
  *
FROM
  employees
WHERE
  CHAR_LENGTH(FIRST_NAME) >= 8;
-- 13
SELECT
  EMPLOYEE_ID,
  FIRST_NAME,
  YEAR(HIRE_DATE)
FROM
  employees;
-- OR
SELECT
  employee_id,
  first_name,
  LEFT(hire_date, 4) `hire_year`
FROM
  employees;
-- 14
SELECT
  EMPLOYEE_ID,
  FIRST_NAME,
  DAY(HIRE_DATE)
FROM
  employees;
-- 15
SELECT
  EMPLOYEE_ID,
  FIRST_NAME,
  MONTH(HIRE_DATE)
FROM
  employees;
-- 16
SELECT
  UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME))
FROM
  employees;
-- 17
SELECT
  LAST_NAME,
  HIRE_DATE
FROM
  employees
WHERE
  MONTH(HIRE_DATE) = 07
  AND YEAR(HIRE_DATE) = 1987;
-- 18
SELECT
  FIRST_NAME,
  LAST_NAME,
  DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS `tempo que trabalha na empresa`
FROM
  employees;
