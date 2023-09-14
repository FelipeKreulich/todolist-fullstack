````sql
CREATE DATABASE IF NOT EXISTS your_database_name;

USE your_database_name;

CREATE TABLE your_table_name (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  status VARCHAR(45) NOT NULL,
  created_at VARCHAR(45) NOT NULL,
);
```