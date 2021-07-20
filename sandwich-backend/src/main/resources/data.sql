DROP TABLE IF EXISTS toppings;
DROP TABLE IF EXISTS bread_size;
DROP TABLE IF EXISTS bread_type;
DROP TABLE IF EXISTS sauces;
DROP TABLE IF EXISTS vegetables;

CREATE TABLE vegetables
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(20)   NOT NULL,
    price    NUMERIC(4, 2) NOT NULL,
    quantity INT DEFAULT NULL
);

INSERT INTO vegetables (name, price, quantity)
VALUES ('Lettuce', 0.3, 10),
       ('Tomato', 0.4, 10),
       ('Carrot', 0.5, 10);

CREATE TABLE sauces
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(20)   NOT NULL,
    price    NUMERIC(4, 2) NOT NULL,
    quantity INT DEFAULT NULL
);

INSERT INTO sauces (name, price, quantity)
VALUES ('Mayonnaise', 0.2, 10),
       ('Ketchup', 0.2, 10),
       ('Bearnaise', 0.4, 10);

CREATE TABLE bread_type
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(20)   NOT NULL,
    price    NUMERIC(4, 2) NOT NULL,
    quantity INT DEFAULT NULL
);

INSERT INTO bread_type (name, price, quantity)
VALUES ('White', 1.0, 10),
       ('Brown', 1.0, 10),
       ('Special', 1.2, 10);


CREATE TABLE toppings
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(20)   NOT NULL,
    price    NUMERIC(4, 2) NOT NULL,
    quantity INT DEFAULT NULL
);

-- quantity per gr, multiply price and quantity per standard of bread size
INSERT INTO toppings (name, price, quantity)
VALUES ('Cheese', 1.0, 40),
       ('Ham', 1.1, 50),
       ('Pork', 1.2, 35),
       ('Tuna', 1.3, 25),
       ('Meat', 1.4, 30);


CREATE TABLE bread_size
(
    id       INT AUTO_INCREMENT PRIMARY KEY,
    name     VARCHAR(20)   NOT NULL,
    price    NUMERIC(4, 2) NOT NULL,
    quantity INT DEFAULT NULL
);

INSERT INTO bread_size (name, price, quantity)
VALUES ('Small', 0.75, 10),
       ('Normal', 1.0, 10),
       ('Double', 1.8, 10);
