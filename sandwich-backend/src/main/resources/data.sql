------ ingredients ------
DROP TABLE IF EXISTS ingredients;
CREATE TABLE ingredients
(
    id              INT AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(20)   NOT NULL,
    price           NUMERIC(4, 2) NOT NULL,
    quantity        INT           NOT NULL,
    ingredient_type VARCHAR(20)   NOT NULL
);

-- vegetables
INSERT INTO ingredients (name, price, quantity, ingredient_type)
VALUES ('Lettuce', 0.3, 10, 'vegetables'),
       ('Tomato', 0.4, 10, 'vegetables'),
       ('Carrot', 0.5, 10, 'vegetables');

-- sauces
INSERT INTO ingredients (name, price, quantity, ingredient_type)
VALUES ('Mayonnaise', 0.2, 10, 'sauces'),
       ('Ketchup', 0.2, 10, 'sauces'),
       ('Bearnaise', 0.4, 10, 'sauces');

-- bread type
INSERT INTO ingredients (name, price, quantity, ingredient_type)
VALUES ('White', 1.0, 3, 'bread_type'),
       ('Brown', 1.0, 3, 'bread_type'),
       ('Special', 1.2, 3, 'bread_type');

-- toppings
INSERT INTO ingredients (name, price, quantity, ingredient_type)
VALUES ('Cheese', 1.0, 40, 'toppings'),
       ('Ham', 1.1, 50, 'toppings'),
       ('Pork', 1.2, 35, 'toppings'),
       ('Tuna', 1.3, 25, 'toppings'),
       ('Meat', 1.4, 30, 'toppings');

-- bread size
INSERT INTO ingredients (name, price, quantity, ingredient_type)
VALUES ('Small', 0.75, 10, 'bread_size'),
       ('Normal', 1.0, 10, 'bread_size'),
       ('Double', 1.8, 10, 'bread_size');


------ sandwiches ------
DROP TABLE IF EXISTS sandwiches;
CREATE TABLE sandwiches
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    bread_type  VARCHAR(20) NULL,
    bread_size VARCHAR(20) NULL,
    vegetables VARCHAR(255) NULL,
    sauces     VARCHAR(255) NULL,
    toppings   VARCHAR(255) NULL
);
