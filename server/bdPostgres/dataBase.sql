create TABLE todos(
   id SERIAL PRIMARY KEY,
   name VARCHAR(255),
   description VARCHAR(255),
   isDone boolean,
   date DATE
);
