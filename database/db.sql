CREATE DATABASE application;

USE application;

CREATE TABLE users(
    id INTEGER(11) PRIMARY KEY AUTOINCREMENT NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    full_name VARCHAR(100) NOT NULL
)

DESCRIBE users;