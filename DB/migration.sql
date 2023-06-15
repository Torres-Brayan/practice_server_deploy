DROP TABLE IF EXISTS properties;

CREATE TABLE properties(
    id serial,
    name varchar(50),
    num_units int,
    owner_id int
);