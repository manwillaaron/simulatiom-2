Create table housertable (
    id serial primary key,
    name text,
    address VARCHAR,
    city text,
    state text ,
    zip NUMERIC,
    image text,
    mortgage money,
    rent money
);